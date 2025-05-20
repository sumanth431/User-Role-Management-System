'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, BarChart2, Users, DollarSign } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        {/* Add 3 more metric cards here */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* Chart placeholder */}
            <div className="flex items-center justify-center h-full">
              <BarChart2 className="h-8 w-8 mr-2" />
              <span>Revenue chart will appear here</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* Chart placeholder */}
            <div className="flex items-center justify-center h-full">
              <Activity className="h-8 w-8 mr-2" />
              <span>Activity chart will appear here</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage; // Must be the last line