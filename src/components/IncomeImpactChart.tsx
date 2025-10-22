import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { incomeQuintileData } from "@/data/attachmentData";

export const IncomeImpactChart = () => {
  const chartData = incomeQuintileData.map((item) => {
    const uncertainlyPercent = ((item.uncertainly / item.total) * 100).toFixed(1);
    const notReceivingPercent = ((item.notReceiving / item.total) * 100).toFixed(1);
    return {
      quintile: item.quintile,
      "Uncertainly Attached (%)": parseFloat(uncertainlyPercent),
      "Not Receiving Care (%)": parseFloat(notReceivingPercent),
    };
  });

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">Healthcare Access by Income Level</h3>
      <p className="text-muted-foreground mb-6">
        Lower income Ontarians face significantly higher barriers to primary care
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="quintile" 
            className="text-xs"
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis 
            className="text-xs"
            label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem'
            }}
          />
          <Legend />
          <Bar dataKey="Uncertainly Attached (%)" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Not Receiving Care (%)" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
