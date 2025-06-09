import { useState } from "react";
import { CrmSidebar } from "@/components/CrmSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MapPin, Clock, BadgeIndianRupee } from "lucide-react";
import { mockPackages } from "@/data/mockData";
import { formatINR } from "@/utils/currency";

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPackages = mockPackages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "domestic":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "international":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "luxury":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "adventure":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
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
                Travel Packages
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your travel packages and destinations
              </p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Package
            </Button>
          </div>
        </header>

        <main className="p-6">
          {/* Search */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200/50"
              />
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.destination}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`border font-medium ${getCategoryColor(pkg.category)}`}
                    >
                      {pkg.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration} days</span>
                    </div>
                    <div className="flex items-center gap-1 text-2xl font-bold text-gray-900">
                      <BadgeIndianRupee className="h-6 w-6" />
                      <span>{formatINR(pkg.price).replace("₹", "")}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">
                      Inclusions:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {inclusion}
                        </Badge>
                      ))}
                      {pkg.inclusions.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{pkg.inclusions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1" size="sm">
                      Edit Package
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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

export default Packages;
