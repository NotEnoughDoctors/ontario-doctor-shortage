import { Card } from "@/components/ui/card";
import { genderData, newcomerData } from "@/data/attachmentData";

export const DemographicComparison = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-2xl font-bold mb-4">Gender Disparities</h3>
        <div className="space-y-4">
          {genderData.map((item) => (
            <div key={item.gender} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.gender}</span>
                <span className="text-muted-foreground text-sm">
                  {item.uncertainlyPercent.toFixed(1)}% without consistent care
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div
                  className="bg-warning h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${item.uncertainlyPercent}%` }}
                />
              </div>
              <div className="text-sm text-muted-foreground">
                {item.notReceiving.toLocaleString()} not receiving primary care
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Men are 37% more likely to lack consistent primary care access
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="text-2xl font-bold mb-4">Newcomer Impact</h3>
        <div className="space-y-4">
          {newcomerData.map((item) => (
            <div key={item.status} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{item.status}</span>
                <span className="text-muted-foreground text-sm">
                  {item.uncertainlyPercent.toFixed(1)}% without consistent care
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    item.status.includes("New") ? "bg-destructive" : "bg-warning"
                  }`}
                  style={{ width: `${item.uncertainlyPercent}%` }}
                />
              </div>
              <div className="text-sm text-muted-foreground">
                {item.notReceiving.toLocaleString()} not receiving primary care
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          New arrivals to Ontario are 2.6x more likely to lack primary care
        </p>
      </Card>
    </div>
  );
};
