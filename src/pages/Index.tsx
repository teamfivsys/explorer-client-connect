
import { CrmSidebar } from "@/components/CrmSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { RecentBookings } from "@/components/RecentBookings";
import { QuickActions } from "@/components/QuickActions";
import { 
  Users, 
  Calendar, 
  BadgeIndianRupee, 
  TrendingUp,
  Bell,
  Search,
  Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <CrmSidebar />
      
      {/* Main content */}
      <div className="lg:ml-64 relative z-10">
        {/* Enhanced header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
              </div>
              <p className="text-gray-600 font-medium">Welcome back! Here's what's happening with your travel business.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                <Input 
                  placeholder="Search customers, bookings..." 
                  className="relative pl-11 w-80 bg-white/80 backdrop-blur-sm border-gray-200/50 focus:border-blue-300 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg"></span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 space-y-8">
          {/* Enhanced stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              title="Total Customers"
              value="2,847"
              change="+12% from last month"
              icon={Users}
              trend="up"
            />
            <DashboardCard
              title="Active Bookings"
              value="156"
              change="+8% from last month"
              icon={Calendar}
              trend="up"
            />
            <DashboardCard
              title="Revenue This Month"
              value="₹20,50,580"
              change="+23% from last month"
              icon={BadgeIndianRupee}
              trend="up"
            />
            <DashboardCard
              title="Conversion Rate"
              value="68%"
              change="+5% from last month"
              icon={TrendingUp}
              trend="up"
            />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent bookings - takes 2 columns */}
            <div className="lg:col-span-2">
              <RecentBookings />
            </div>
            
            {/* Quick actions - takes 1 column */}
            <div>
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
