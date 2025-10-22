import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { internationalComparisonData } from "@/data/workforceTrainingData";

export const InternationalComparisonChart = () => {
  const chartConfig = {
    graduatesPer100k: {
      label: "Medical Graduates per 100,000",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Canada Lags Behind in Medical Graduate Production</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Canada produces only 7.5 medical graduates per 100,000 population - nearly half the OECD average of 14.2
      </p>
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={internationalComparisonData} margin={{ bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" angle={-15} textAnchor="end" height={60} />
            <YAxis label={{ value: 'Graduates per 100,000 population', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value: number) => value.toFixed(1)}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Bar dataKey="graduatesPer100k" fill="var(--color-graduatesPer100k)" name="Graduates per 100k" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};
