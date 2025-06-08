
import { useState } from "react";
import { CrmSidebar } from "@/components/CrmSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Calendar, MapPin, User, BadgeIndianRupee } from "lucide-react";
import { mockBookings } from "@/data/mockData";
import { formatINR } from "@/utils/currency";

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "quoted":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "lead":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "completed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <CrmSidebar />
      
      <div className="lg:ml-64">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Bookings
              </h1>
              <p className="text-gray-600 mt-1">Manage all travel bookings</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Booking
            </Button>
          </div>
        </header>

        <main className="p-6">
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200/50"
              />
            </div>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-200/50 bg-white/80 backdrop-blur-sm"
            >
              <option value="all">All Status</option>
              <option value="lead">Lead</option>
              <option value="quoted">Quoted</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Bookings List */}
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <Card key={booking.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {booking.avatar}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg text-gray-900">{booking.customerName}</h3>
                          <span className="text-sm text-gray-500">#{booking.id}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-500" />
                            <span>{booking.destination}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-purple-500" />
                            <span>{booking.startDate} - {booking.endDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-green-500" />
                            <span>{booking.travelers} traveler{booking.travelers > 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <Badge className={`border font-medium ${getStatusStyle(booking.status)}`}>
                        {booking.status}
                      </Badge>
                      
                      <div className="text-right">
                        <div className="font-bold text-xl text-gray-900">{formatINR(booking.amount)}</div>
                        <div className="text-sm text-gray-600">
                          Paid: {formatINR(booking.paidAmount)}
                        </div>
                        {booking.amount > booking.paidAmount && (
                          <div className="text-sm text-red-600 font-medium">
                            Due: {formatINR(booking.amount - booking.paidAmount)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookings;
