
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, FileText, Send } from "lucide-react";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-auto flex-col gap-2 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            <Plus className="h-5 w-5" />
            <span className="text-sm">New Booking</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 hover:bg-gray-50">
            <UserPlus className="h-5 w-5" />
            <span className="text-sm">Add Customer</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 hover:bg-gray-50">
            <FileText className="h-5 w-5" />
            <span className="text-sm">Generate Quote</span>
          </Button>
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 hover:bg-gray-50">
            <Send className="h-5 w-5" />
            <span className="text-sm">Send Itinerary</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
