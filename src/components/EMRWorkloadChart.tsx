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
import { emrWorkloadData } from "@/data/physicianData";

export const EMRWorkloadChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">After-Hours EMR Work Burden</h3>
      <p className="text-muted-foreground mb-6">
        64% of physicians report excessive or moderately high time spent on EMR after hours
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={emrWorkloadData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="category" 
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
          <Bar dataKey="gp" name="Family Physicians" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="specialist" name="Specialists" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-sm">
          <strong>Key Finding:</strong> Family physicians report 39.2% excessive EMR burden compared to 25.1% for specialists, 
          contributing to burnout and reduced capacity to accept new patients.
        </p>
      </div>
    </Card>
  );
};
