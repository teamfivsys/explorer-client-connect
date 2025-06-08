
import { CrmSidebar } from "@/components/CrmSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { RecentBookings } from "@/components/RecentBookings";
import { QuickActions } from "@/components/QuickActions";
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Bell,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CrmSidebar />
      
      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your travel business.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search customers, bookings..." 
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              value="$245,670"
              change="+23% from last month"
              icon={DollarSign}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
