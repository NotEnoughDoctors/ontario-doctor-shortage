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
import { ageGroupData } from "@/data/attachmentData";

export const AgeDistributionChart = () => {
  const chartData = ageGroupData.map((item) => ({
    age: item.age,
    "Attached": item.attached,
    "Uncertainly Attached": item.uncertainly,
  }));

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">Attachment Status by Age Group</h3>
      <p className="text-muted-foreground mb-6">
        Young adults (18-34) face the highest rates of uncertain attachment
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="age" 
            className="text-xs"
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis className="text-xs" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem'
            }}
          />
          <Legend />
          <Bar dataKey="Attached" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Uncertainly Attached" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
