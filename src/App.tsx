
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Customers from "./pages/Customers";
import Bookings from "./pages/Bookings";
import Packages from "./pages/Packages";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Staff from "./pages/Staff";
import Admin from "./pages/Admin";
import Sales from "./pages/Sales";
import Login from "./components/Login";
import { useState, useEffect, createContext, useContext } from "react";

const queryClient = new QueryClient();

// User Context for managing user state
interface UserContextType {
  userRole: string | null;
  username: string | null;
  setUserRole: (role: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const AppContent = () => {
  console.log("AppContent component rendered");
  const [userRole, setUserRoleState] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  // Load user session on app start
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    const savedUsername = localStorage.getItem('username');
    
    if (savedRole && savedUsername) {
      setUserRoleState(savedRole);
      setUsername(savedUsername);
      console.log("Session restored:", savedRole);
    }
  }, []);

  const setUserRole = (role: string) => {
    setUserRoleState(role);
    const savedUsername = localStorage.getItem('username');
    setUsername(savedUsername);
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('username');
    setUserRoleState(null);
    setUsername(null);
    navigate('/');
    console.log("User logged out");
  };

  useEffect(() => {
    if (userRole) {
      // Redirect to the appropriate page after login
      if (userRole === "admin") {
        navigate("/admin");
      } else if (userRole === "sales") {
        navigate("/sales");
      } else if (userRole === "manager" || userRole === "staff") {
        navigate("/staff");
      } else {
        navigate("/"); // Redirect to home if role is unknown
      }
    }
    console.log("User role changed in AppContent component:", userRole);
  }, [userRole, navigate]);

  const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) => {
    if (!userRole) {
      return <Navigate to="/" />;
    }

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" />;
    }

    return <>{children}</>;
  };

  const userContextValue: UserContextType = {
    userRole,
    username,
    setUserRole,
    logout,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
        <Route path="/" element={<Login setUserRole={setUserRole} />} />
        <Route
          path="/customers"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "sales", "manager", "staff"]}
            >
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "sales", "manager", "staff"]}
            >
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/packages"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "sales", "manager", "staff"]}
            >
              <Packages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute allowedRoles={["admin", "manager"]}>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff"
          element={
            <ProtectedRoute allowedRoles={["admin", "manager", "staff"]}>
              <Staff />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute allowedRoles={["admin", "sales", "manager"]}>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
};

const App = () => {
  console.log("App component rendered");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
