
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

export function DashboardCard({ title, value, change, icon: Icon, trend = "neutral" }: DashboardCardProps) {
  const trendColor = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-red-500" : "text-gray-600";
  const trendBg = trend === "up" ? "bg-emerald-50" : trend === "down" ? "bg-red-50" : "bg-gray-50";
  
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-sm font-semibold text-gray-600 tracking-wide uppercase">{title}</CardTitle>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <Icon className="relative h-5 w-5 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          {value}
        </div>
        {change && (
          <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${trendBg} ${trendColor}`}>
            {change}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
