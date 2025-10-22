import { Card } from "@/components/ui/card";
import { visitDeliveryData } from "@/data/physicianData";

export const CareDeliveryInsight = () => {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-4">How Care is Delivered</h3>
      <div className="space-y-6">
        {visitDeliveryData.map((item) => (
          <div key={item.method} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.method}</span>
              <span className="text-2xl font-bold text-primary">
                {item.percentage}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-4">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-1000"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-muted rounded-lg space-y-2">
        <p className="text-sm font-medium">Why This Matters</p>
        <p className="text-sm text-muted-foreground">
          Despite virtual care's potential to increase capacity, 81% of visits remain in-person. 
          This limits how many patients a physician can see per day and contributes to access challenges.
        </p>
      </div>
    </Card>
  );
};
