
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User } from "lucide-react";

const recentBookings = [
  {
    id: "BK-001",
    customer: "John Smith",
    destination: "Bali, Indonesia",
    date: "2024-07-15",
    status: "confirmed",
    amount: "$2,450"
  },
  {
    id: "BK-002",
    customer: "Sarah Johnson",
    destination: "Tokyo, Japan",
    date: "2024-08-02",
    status: "pending",
    amount: "$3,200"
  },
  {
    id: "BK-003",
    customer: "Mike Davis",
    destination: "Paris, France",
    date: "2024-07-28",
    status: "confirmed",
    amount: "$1,890"
  },
  {
    id: "BK-004",
    customer: "Emma Wilson",
    destination: "Dubai, UAE",
    date: "2024-08-20",
    status: "quote",
    amount: "$2,750"
  }
];

export function RecentBookings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "quote":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Recent Bookings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentBookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">{booking.customer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-3 w-3" />
                  <span>{booking.destination}</span>
                  <span className="text-gray-400">•</span>
                  <span>{booking.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={getStatusColor(booking.status)}>
                  {booking.status}
                </Badge>
                <span className="font-semibold text-gray-900">{booking.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
