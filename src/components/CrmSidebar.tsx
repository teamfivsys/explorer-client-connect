
import { useState } from "react";
import { 
  Home, 
  Users, 
  Calendar, 
  MapPin, 
  CreditCard, 
  BarChart3, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Customers" },
  { icon: Calendar, label: "Bookings" },
  { icon: MapPin, label: "Destinations" },
  { icon: CreditCard, label: "Payments" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export function CrmSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 z-40 h-full w-64 transform bg-white border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-border">
          <img 
            src="/lovable-uploads/45a6c1e6-0d2a-4f3d-a7c2-4bf645cac881.png" 
            alt="Dilaara Logo" 
            className="h-10 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button className={cn(
                  "w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200",
                  item.active 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" 
                    : "text-gray-700 hover:bg-gray-100"
                )}>
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
