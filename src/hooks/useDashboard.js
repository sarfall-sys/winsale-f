import dashboardApi from "../api/dashboardApi";

import { useState } from "react";
const useDashboard = () => {
    const [stats, setStats] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchDashboardStats() {
        setLoading(true);
        setError(null);
        try {
            const data = await dashboardApi.getDashboardStats();
            setStats(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }

    }

    async function fetchDashboardChart() {
        setLoading(true);
        setError(null);
        try {
            const data = await dashboardApi.getDashboardChart();
            setChartData({
                salesOverTime: data.salesOverTime?.map(item => ({ name: item.month, value: item.total_sales } )),
                topSellingProducts: data.topSellingProducts?.map(item => ({ name: item.name, value: item.total_quantity })),
                inventoryLevels: data.inventoryLevels?.map(item => ({ name: item.name, value: item.stock }))
            });
        } catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }
    }

    return {
        stats,
        chartData,
        loading,
        error,
        fetchDashboardStats,
        fetchDashboardChart
    }

}
export default useDashboard;