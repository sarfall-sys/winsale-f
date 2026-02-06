import { useEffect } from "react";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import ChartCard from "../components/ui/ChartCard";

import useDashboard from "../hooks/useDashboard";
function Dashboard() {
  const { stats, chartData, fetchDashboardStats, fetchDashboardChart } =
    useDashboard();

  useEffect(() => {
    fetchDashboardStats();
    fetchDashboardChart();
  }, []);

  console.log("Chart Data:", chartData);
  console.log("Stats Data:", stats);

  return (
    <>
      <div className="container mx-auto p-6 bg-bg-light dark:bg-bg-dark min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Here's your analytics summary.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-linear-to-br from-blue-500 to-blue-600 hover:shadow-lg transition-shadow">
            <CardContent className="text-center text-white">
              <h2 className="text-sm font-medium opacity-90 mb-2">
                Total Sales
              </h2>
              <p className="text-3xl font-bold">
                {stats ? stats.totalSales : "—"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-green-500 to-green-600 hover:shadow-lg transition-shadow">
            <CardContent className="text-center text-white">
              <h2 className="text-sm font-medium opacity-90 mb-2">
                Total Transactions
              </h2>
              <p className="text-3xl font-bold">
                {stats ? stats.totalTransactions : "—"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-yellow-500 to-yellow-600 hover:shadow-lg transition-shadow">
            <CardContent className="text-center text-white">
              <h2 className="text-sm font-medium opacity-90 mb-2">
                Total Purchases
              </h2>
              <p className="text-3xl font-bold">
                {stats ? stats.totalPurchases : "—"}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-purple-500 to-purple-600 hover:shadow-lg transition-shadow">
            <CardContent className="text-center text-white">
              <h2 className="text-sm font-medium opacity-90 mb-2">
                Transaction Purchases
              </h2>
              <p className="text-3xl font-bold">
                {stats ? stats.totalTransactionPurchases : "—"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <ChartCard
            title="Sales Over Time"
            data={chartData ? chartData.salesOverTime : []}
            chartType="line"
          />

          <ChartCard
            title="Top Selling Products"
            data={chartData ? chartData.topSellingProducts : []}
            chartType="bar"
          />

          <ChartCard
            title="Inventory Levels"
            data={chartData ? chartData.inventoryLevels : []}
            chartType="pie"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
