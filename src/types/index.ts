export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  passportNumber?: string;
  preferences: string[];
  totalBookings: number;
  totalSpent: number;
  status: "active" | "inactive";
  createdAt: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  customerId: string;
  customerName: string;
  destination: string;
  packageId: string;
  startDate: string;
  endDate: string;
  status: "lead" | "quoted" | "confirmed" | "completed" | "cancelled";
  amount: number;
  paidAmount: number;
  travelers: number;
  notes?: string;
  createdAt: string;
  avatar?: string;
}

export interface Package {
  id: string;
  name: string;
  destination: string;
  duration: number;
  price: number;
  description: string;
  inclusions: string[];
  exclusions: string[];
  category: "domestic" | "international" | "adventure" | "luxury" | "budget";
  isActive: boolean;
  images: string[];
}

export interface Itinerary {
  id: string;
  bookingId: string;
  title: string;
  days: ItineraryDay[];
  status: "draft" | "sent" | "approved";
}

export interface ItineraryDay {
  day: number;
  date: string;
  activities: Activity[];
  accommodation?: string;
  meals: string[];
  transportation?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  time: string;
  location: string;
  cost?: number;
}

export interface Report {
  period: string;
  totalRevenue: number;
  totalBookings: number;
  newCustomers: number;
  conversionRate: number;
  averageBookingValue: number;
  topDestinations: { name: string; bookings: number }[];
}
