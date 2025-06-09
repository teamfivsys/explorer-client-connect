
import React from "react";
import { CrmSidebar } from "./CrmSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <CrmSidebar />
      <main className="flex-1 ml-64 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
