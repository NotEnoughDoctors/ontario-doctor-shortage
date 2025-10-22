import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { practiceToolsData } from "@/data/physicianData";

export const PracticeToolsChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">Digital Health Tool Adoption</h3>
      <p className="text-muted-foreground mb-6">
        Most physicians lack efficiency tools that could increase capacity
      </p>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={practiceToolsData} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            type="number"
            className="text-xs"
            domain={[0, 100]}
          />
          <YAxis 
            type="category"
            dataKey="tool"
            className="text-xs"
            width={180}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem'
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Bar dataKey="usage" name="Adoption Rate" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-sm">
          <strong>Opportunity:</strong> Only 25% offer online booking and 37% use secure patient messaging. 
          Better tools could reduce administrative burden and increase patient capacity.
        </p>
      </div>
    </Card>
  );
};
