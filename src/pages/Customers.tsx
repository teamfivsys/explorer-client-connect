import { useState } from "react";
import { CrmSidebar } from "@/components/CrmSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { mockCustomers } from "@/data/mockData";
import { formatINR } from "@/utils/currency";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <CrmSidebar />

      <div className="lg:ml-64">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Customers
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your customer database
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </header>

        <main className="p-6">
          {/* Filters and Search */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200/50"
              />
            </div>
            <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Customer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCustomers.map((customer) => (
              <Card
                key={customer.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {customer.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {customer.name}
                        </CardTitle>
                        <Badge
                          variant={
                            customer.status === "active"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {customer.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{customer.address}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Bookings:</span>
                      <span className="font-semibold">
                        {customer.totalBookings}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600">Total Spent:</span>
                      <span className="font-semibold text-green-600">
                        {formatINR(customer.totalSpent)}
                      </span>
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

export default Customers;
