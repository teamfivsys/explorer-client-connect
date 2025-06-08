
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User, TrendingUp } from "lucide-react";

const recentBookings = [
  {
    id: "BK-001",
    customer: "John Smith",
    destination: "Bali, Indonesia",
    date: "2024-07-15",
    status: "confirmed",
    amount: "$2,450",
    avatar: "JS"
  },
  {
    id: "BK-002",
    customer: "Sarah Johnson",
    destination: "Tokyo, Japan", 
    date: "2024-08-02",
    status: "pending",
    amount: "$3,200",
    avatar: "SJ"
  },
  {
    id: "BK-003",
    customer: "Mike Davis",
    destination: "Paris, France",
    date: "2024-07-28",
    status: "confirmed",
    amount: "$1,890",
    avatar: "MD"
  },
  {
    id: "BK-004",
    customer: "Emma Wilson",
    destination: "Dubai, UAE",
    date: "2024-08-20",
    status: "quote",
    amount: "$2,750",
    avatar: "EW"
  }
];

export function RecentBookings() {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 border-emerald-200";
      case "pending":
        return "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 border-amber-200";
      case "quote":
        return "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-sm" />
            <Calendar className="relative h-6 w-6 text-blue-600" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Recent Bookings
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentBookings.map((booking, index) => (
            <div 
              key={booking.id} 
              className="group relative p-4 rounded-xl bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Customer avatar */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {booking.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
                  </div>
                  
                  {/* Booking details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold text-gray-900 truncate">{booking.customer}</span>
                      <span className="text-xs text-gray-400">#{booking.id}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-blue-500" />
                        <span className="truncate">{booking.destination}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-purple-500" />
                        <span>{booking.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Status and amount */}
                <div className="flex items-center gap-4">
                  <Badge className={`border ${getStatusStyle(booking.status)} font-medium`}>
                    {booking.status}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-900">{booking.amount}</div>
                    <div className="flex items-center gap-1 text-xs text-emerald-600">
                      <TrendingUp className="h-3 w-3" />
                      <span>+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
