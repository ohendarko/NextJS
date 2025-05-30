
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalyticsDashboardProps {
  adminUser: any;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ adminUser }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Client Distribution by Country</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>India</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span>Philippines</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between">
                <span>Nigeria</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="flex justify-between">
                <span>Others</span>
                <span className="font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">$45,600</div>
            <p className="text-sm text-gray-600">This month</p>
            <p className="text-sm text-green-600">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">87%</div>
            <p className="text-sm text-gray-600">FPGEE Pass Rate</p>
            <p className="text-sm text-blue-600">Above industry average</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
