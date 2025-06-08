
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, FileText, Send } from "lucide-react";

export function QuickActions() {
  const actions = [
    { icon: Plus, label: "New Booking", primary: true, gradient: "from-blue-500 to-blue-600" },
    { icon: UserPlus, label: "Add Customer", gradient: "from-emerald-500 to-emerald-600" },
    { icon: FileText, label: "Generate Quote", gradient: "from-purple-500 to-purple-600" },
    { icon: Send, label: "Send Itinerary", gradient: "from-orange-500 to-orange-600" }
  ];

  return (
    <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                className={`group relative h-auto flex-col gap-3 p-6 border-0 overflow-hidden ${
                  action.primary 
                    ? `bg-gradient-to-r ${action.gradient} text-white shadow-lg hover:shadow-xl` 
                    : "bg-white/80 backdrop-blur-sm text-gray-700 shadow-md hover:shadow-lg border border-gray-200/50"
                } transition-all duration-300 hover:scale-105 hover:-translate-y-1`}
              >
                {/* Animated background for non-primary buttons */}
                {!action.primary && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                )}
                
                {/* Icon with glow effect */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm`} />
                  <Icon className="relative h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                </div>
                
                <span className="text-sm font-semibold relative z-10">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
