
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
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  console.log("AppContent component rendered");
  const [userRole, setUserRole] = useState<string | null>(null);
  const navigate = useNavigate();

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

  return (
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
