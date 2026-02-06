import ChartCard from "../../components/ui/ChartCard";
import useAi from "../../hooks/useAi";
import { useEffect } from "react";
function AiInsights() {
  const {
    insights,
    forecast,
    anomalies,
    loading,
    error,
    fetchAiForecast,
    fetchAiInsights,
    fetchAiAnomalies,
  } = useAi();

  useEffect(() => {
    fetchAiForecast();
  }, []);

  useEffect(() => {
    fetchAiInsights();
  }, []);

  useEffect(() => {
    fetchAiAnomalies();
  }, []);

  console.log("AI Insights:", insights);
  console.log("AI Forecast:", forecast);
  console.log("AI Anomalies:", anomalies);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 dark:bg-background dark:text-primary min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-text-primary text-text-primary">Chart</h1>
        </div>
        <ChartCard title="Predicted Sales" data={forecast} chartType="line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div>
          <h1 className="text-2xl font-bold dark:text-text-primary text-text-primary">Anomalies</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-gray-700 dark:text-gray-300">
            <thead>
              <tr className="dark:bg-primary bg-primary" >
                <th className="border dark:border-primary border-primary p-2 text-left">Type</th>
                <th className="border dark:border-primary border-primary p-2 text-left">Product ID</th>
                <th className="border dark:border-primary border-primary p-2 text-left">Quantity</th>
                <th className="border dark:border-primary border-primary p-2 text-left">Sale Date</th>
                <th className="border dark:border-primary border-primary p-2 text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              {anomalies?.map((anomaly, index) => (
                <tr key={index} className="dark:hover:bg-secondary hover:bg-primary transition text-text-primary dark:text-text-primary">
                  <td className="border dark:border-primary border-primary p-2">{anomaly.type}</td>
                  <td className="border dark:border-primary border-primary p-2">{anomaly.product_id}</td>
                  <td className="border dark:border-primary border-primary p-2">{anomaly.quantity}</td>
                  <td className="border dark:border-primary border-primary p-2">{anomaly.sale_date}</td>
                  <td className="border dark:border-primary border-primary p-2">{anomaly.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-6">
        <div>
          <h1 className="text-2xl font-bold dark:text-text-primary text-text-primary">Insights</h1>
        </div>
        <div className="p-4 border rounded mb-4 dark:border-gray-700 dark:bg-background/20">
          <h2 className="text-lg font-semibold mb-2 dark:text-text-primary text-text-primary">
            Key Insights
          </h2>
          <ul className="list-disc list-inside dark:text-text-primary text-text-primary">
            {insights?.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AiInsights;
