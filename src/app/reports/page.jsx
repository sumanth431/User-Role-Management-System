import { Card, CardHeader, CardTitle, CardContent } from "D:/Project/my-dashboard-app/src/components/ui/card.jsx";
import { BarChart } from "D:/Project/my-dashboard-app/src/components/ui/bar-chart.jsx"; // You'll need to create this

const reportData = [
  { month: "Jan", users: 100, sessions: 500 },
  { month: "Feb", users: 120, sessions: 600 },
  { month: "Mar", users: 150, sessions: 750 },
];

export default function ReportsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Users</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={reportData} xAxis="month" yAxis="users" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={reportData} xAxis="month" yAxis="sessions" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}