import { CrmSidebar } from "@/components/CrmSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp, Users, BadgeIndianRupee, Calendar } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 850000 },
  { month: "Feb", revenue: 920000 },
  { month: "Mar", revenue: 780000 },
  { month: "Apr", revenue: 1200000 },
  { month: "May", revenue: 1450000 },
  { month: "Jun", revenue: 1680000 },
];

const bookingData = [
  { month: "Jan", bookings: 45 },
  { month: "Feb", bookings: 52 },
  { month: "Mar", bookings: 38 },
  { month: "Apr", bookings: 68 },
  { month: "May", bookings: 82 },
  { month: "Jun", bookings: 95 },
];

const destinationData = [
  { name: "Goa", bookings: 35, color: "#3B82F6" },
  { name: "Kerala", bookings: 28, color: "#8B5CF6" },
  { name: "Dubai", bookings: 22, color: "#10B981" },
  { name: "Maldives", bookings: 18, color: "#F59E0B" },
  { name: "Others", bookings: 12, color: "#EF4444" },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <CrmSidebar />

      <div className="lg:ml-64">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Analytics & Reports
            </h1>
            <p className="text-gray-600 mt-1">
              Track your business performance and insights
            </p>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-full">
                    <BadgeIndianRupee className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold">₹68.8L</p>
                    <p className="text-xs text-green-600">
                      +23.5% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500 rounded-full">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold">380</p>
                    <p className="text-xs text-green-600">
                      +18.2% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">New Customers</p>
                    <p className="text-2xl font-bold">127</p>
                    <p className="text-xs text-green-600">
                      +12.8% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-amber-50 to-amber-100/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                    <p className="text-2xl font-bold">68.5%</p>
                    <p className="text-xs text-green-600">
                      +5.2% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [
                        `₹${((value as number) / 100000).toFixed(1)}L`,
                        "Revenue",
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3B82F6"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Monthly Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Top Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={destinationData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="bookings"
                      label={({ name, bookings }) => `${name}: ${bookings}`}
                    >
                      {destinationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Recent Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <div>
                    <p className="font-semibold">Best Month</p>
                    <p className="text-sm text-gray-600">June 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">₹16.8L</p>
                    <p className="text-sm text-gray-600">95 bookings</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg">
                  <div>
                    <p className="font-semibold">Average Booking Value</p>
                    <p className="text-sm text-gray-600">This quarter</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-600">₹1.81L</p>
                    <p className="text-sm text-gray-600">+15.2% growth</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-lg">
                  <div>
                    <p className="font-semibold">Customer Retention</p>
                    <p className="text-sm text-gray-600">Repeat customers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-purple-600">78%</p>
                    <p className="text-sm text-gray-600">+8% increase</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
