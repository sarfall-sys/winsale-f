import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart,
  LineChart,
  Line
} from "recharts";

function ChartCard({ title, data, chartType }) {
  if (chartType === "pie") {
    return (
      <div>
        <h3 className="mb-6 font-bold text-md text-text-primary dark:text-text-primary">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chartType === "bar") {
    return (
      <div>
        <h3 className="mb-6 font-bold text-md text-text-primary dark:text-text-primary">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#9467cb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chartType === "line") {
    return (
      <div>
        <h3 className="mb-6 font-bold text-md text-text-primary dark:text-text-primary">{title}</h3> 
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#9467cb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}

export default ChartCard;