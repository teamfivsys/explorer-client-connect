import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Login = ({ setUserRole }) => {
  console.log("Login component rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = {
    admin: { password: "password", role: "admin" },
    sales: { password: "password", role: "sales" },
    manager: { password: "password", role: "manager" },
    staff: { password: "password", role: "staff" },
  };

  const handleLogin = () => {
    setError("");
    if (users[username] && users[username].password === password) {
      const userRole = users[username].role;
      console.log(`Logging in as ${userRole}`);
      setUserRole(userRole);
      console.log("User role set in Login component:", userRole);

    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
