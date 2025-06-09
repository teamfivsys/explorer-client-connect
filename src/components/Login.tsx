
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lock, LogIn } from "lucide-react";

interface LoginProps {
  setUserRole: (role: string) => void;
}

const Login = ({ setUserRole }: LoginProps) => {
  console.log("Login component rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const users: Record<string, { password: string; role: string; description: string }> = {
    admin: { password: "password", role: "admin", description: "Full system access" },
    sales: { password: "password", role: "sales", description: "Sales dashboard and customer management" },
    manager: { password: "password", role: "manager", description: "Team management and analytics" },
    staff: { password: "password", role: "staff", description: "Daily operations and bookings" },
  };

  const handleLogin = async () => {
    setError("");
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));

    if (users[username] && users[username].password === password) {
      const userRole = users[username].role;
      console.log(`Logging in as ${userRole}`);
      
      // Store user session
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('username', username);
      
      setUserRole(userRole);
      console.log("User role set in Login component:", userRole);
    } else {
      setError("Invalid username or password");
    }
    
    setIsLoading(false);
  };

  const quickLogin = (user: string) => {
    setUsername(user);
    setPassword("password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="text-center">
          <img
            src="/lovable-uploads/45a6c1e6-0d2a-4f3d-a7c2-4bf645cac881.png"
            alt="Dilaara Logo"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Dilaara CRM</h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5" />
              Sign In
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <Button 
              onClick={handleLogin} 
              className="w-full" 
              disabled={isLoading || !username || !password}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Demo Accounts</CardTitle>
            <CardDescription>
              Click any role below to auto-fill credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(users).map(([user, info]) => (
                <Button
                  key={user}
                  variant="outline"
                  size="sm"
                  onClick={() => quickLogin(user)}
                  className="flex flex-col items-start p-3 h-auto"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Badge variant={user === 'admin' ? 'default' : 'secondary'}>
                      {user}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {info.description}
                  </span>
                </Button>
              ))}
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-600">
                <strong>Password for all accounts:</strong> password
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
