import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { workforceGapsData } from "@/data/workforceTrainingData";

export const GapToGraduateChart = () => {
  const chartConfig = {
    currentGap: {
      label: "Current Workforce Gap",
      color: "hsl(var(--destructive))",
    },
    graduates: {
      label: "Annual Graduates",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Current Workforce Gap vs. Annual Graduates</h3>
      <p className="text-sm text-muted-foreground mb-6">
        This chart shows the massive gap between current workforce shortages and the number of graduates we're producing annually
      </p>
      <ChartContainer config={chartConfig} className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={workforceGapsData} layout="vertical" margin={{ left: 180, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="profession" type="category" width={180} />
            <Tooltip 
              formatter={(value: number) => value.toLocaleString()}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Bar dataKey="currentGap" fill="var(--color-currentGap)" name="Current Gap" radius={[0, 4, 4, 0]} />
            <Bar dataKey="graduates" fill="var(--color-graduates)" name="Annual Graduates" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
