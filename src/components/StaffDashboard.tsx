
import React from "react";
import { CheckCircle, Clock, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StaffDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your daily tasks and customer requests.</p>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Great progress!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Queries</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 need urgent response</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookings to Process</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Due by end of day</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Tasks</CardTitle>
            <CardDescription>Your priority items for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Confirm hotel booking - Goa</p>
                  <p className="text-sm text-gray-600">Customer: Mr. Patel</p>
                </div>
                <span className="text-red-600 font-medium">High</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Send itinerary - Kerala tour</p>
                  <p className="text-sm text-gray-600">Customer: Ms. Reddy</p>
                </div>
                <span className="text-orange-600 font-medium">Medium</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Process refund request</p>
                  <p className="text-sm text-gray-600">Booking ID: #12345</p>
                </div>
                <span className="text-yellow-600 font-medium">Low</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest customer communications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment received</p>
                  <p className="text-sm text-gray-600">Booking #67890 - ₹25,000</p>
                </div>
                <span className="text-green-600 font-medium">Paid</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Visa application submitted</p>
                  <p className="text-sm text-gray-600">Customer: John Smith</p>
                </div>
                <span className="text-blue-600 font-medium">Processing</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StaffDashboard;
