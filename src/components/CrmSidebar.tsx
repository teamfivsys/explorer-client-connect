
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
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  count?: number;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Customers", count: 2847 },
  { icon: Calendar, label: "Bookings", count: 156 },
  { icon: MapPin, label: "Destinations", count: 45 },
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
        className="fixed top-4 left-4 z-50 lg:hidden bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 z-40 h-full w-64 transform transition-all duration-500 ease-out lg:translate-x-0",
        "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo section with enhanced styling */}
        <div className="relative flex items-center justify-center h-20 border-b border-gray-200/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
          <img 
            src="/lovable-uploads/45a6c1e6-0d2a-4f3d-a7c2-4bf645cac881.png" 
            alt="Dilaara Logo" 
            className="h-12 object-contain relative z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation with enhanced styling */}
        <nav className="mt-8 px-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button className={cn(
                "relative w-full flex items-center justify-between px-4 py-3.5 text-left rounded-xl transition-all duration-300 overflow-hidden",
                item.active 
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-[1.02]" 
                  : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:scale-[1.01] hover:shadow-md"
              )}>
                {/* Animated background for active state */}
                {item.active && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                
                <div className="flex items-center relative z-10">
                  <item.icon className={cn(
                    "h-5 w-5 mr-3 transition-all duration-300",
                    item.active ? "text-white" : "text-gray-600 group-hover:text-blue-600"
                  )} />
                  <span className="font-medium">{item.label}</span>
                </div>
                
                <div className="flex items-center gap-2 relative z-10">
                  {item.count && (
                    <span className={cn(
                      "px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-300",
                      item.active 
                        ? "bg-white/20 text-white" 
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
                    )}>
                      {item.count}
                    </span>
                  )}
                  {!item.active && (
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-6 left-4 right-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                AD
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Admin User</div>
                <div className="text-xs text-gray-600">admin@dilaara.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
