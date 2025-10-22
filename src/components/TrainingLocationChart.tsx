import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { trainingLocationData } from "@/data/workforceTrainingData";

export const TrainingLocationChart = () => {
  const chartConfig = {
    urban: {
      label: "Urban Programs",
      color: "hsl(var(--primary))",
    },
    rural: {
      label: "Rural/Remote Programs",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Training Programs by Location</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Most healthcare training programs are concentrated in urban areas, limiting rural workforce development
      </p>
      <ChartContainer config={chartConfig} className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trainingLocationData} layout="vertical" margin={{ left: 180, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="profession" type="category" width={180} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Bar dataKey="urban" stackId="a" fill="var(--color-urban)" name="Urban" radius={[0, 0, 0, 0]} />
            <Bar dataKey="rural" stackId="a" fill="var(--color-rural)" name="Rural/Remote" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
