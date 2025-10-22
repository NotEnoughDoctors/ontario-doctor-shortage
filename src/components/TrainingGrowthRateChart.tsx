import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { growthRatesData } from "@/data/workforceTrainingData";

export const TrainingGrowthRateChart = () => {
  const chartConfig = {
    growthRate: {
      label: "Annual Growth Rate",
      color: "hsl(var(--primary))",
    },
  };

  const getBarColor = (rate: number) => {
    if (rate >= 3) return "hsl(var(--success))";
    if (rate >= 2) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Projected Workforce Supply Growth Rates (2022-2034)</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Average annual growth rates are far too slow to address the current shortages. Most professions growing at less than 2% annually.
      </p>
      <ChartContainer config={chartConfig} className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={growthRatesData} layout="vertical" margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 5]} tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="profession" type="category" width={160} />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Bar dataKey="growthRate" radius={[0, 4, 4, 0]}>
              {growthRatesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.growthRate)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="mt-4 flex gap-4 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "hsl(var(--success))" }}></div>
          <span>≥3% (Adequate)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "hsl(var(--warning))" }}></div>
          <span>2-3% (Slow)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded" style={{ backgroundColor: "hsl(var(--destructive))" }}></div>
          <span>&lt;2% (Insufficient)</span>
        </div>
      </div>
    </Card>
  );
};
