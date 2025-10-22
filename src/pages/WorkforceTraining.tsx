import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { GapToGraduateChart } from "@/components/GapToGraduateChart";
import { TrainingGrowthRateChart } from "@/components/TrainingGrowthRateChart";
import { InternationalComparisonChart } from "@/components/InternationalComparisonChart";
import { TrainingLocationChart } from "@/components/TrainingLocationChart";
import { AlertCircle } from "lucide-react";

const WorkforceTraining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
            We're Not Training Enough Healthcare Workers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Canada's healthcare workforce crisis isn't just about current shortages - we're failing to train enough new professionals to meet future needs
          </p>
        </div>

        {/* Key Insight Box */}
        <div className="max-w-3xl mx-auto mb-12 p-6 bg-destructive/10 border-2 border-destructive/30 rounded-lg">
          <div className="flex gap-4">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold mb-2">Critical Finding:</p>
              <p className="text-sm">
                For family physicians, we currently need <strong>22,823 more doctors</strong> but we're only graduating <strong>1,362 per year</strong>. 
                At this rate, it would take over 16 years of graduates just to fill today's gap - and demand continues to grow.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title="Medical Graduates Per 100k"
            value="7.5"
            subtitle="Canada vs. 14.2 OECD average"
            variant="destructive"
          />
          <StatCard
            title="Years to Fill Current Gap"
            value="16.7"
            subtitle="For family physicians at current graduation rates"
            variant="destructive"
          />
          <StatCard
            title="Average Growth Rate"
            value="1.8%"
            subtitle="Too slow to address shortages"
            variant="warning"
          />
        </div>

        {/* Charts Grid */}
        <div className="space-y-8">
          <GapToGraduateChart />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TrainingGrowthRateChart />
            <InternationalComparisonChart />
          </div>

          <TrainingLocationChart />

          {/* Key Issues Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-card border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Limited Training Capacity</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• MD programs capped at 3,005 spots nationally</li>
                <li>• Only 1,557 family medicine residency positions</li>
                <li>• Insufficient faculty and clinical placement resources</li>
                <li>• High student withdrawal rates (8-9% for some programs)</li>
              </ul>
            </div>

            <div className="p-6 bg-card border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Urban-Rural Imbalance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zero rural MD programs or pharmacy programs</li>
                <li>• Most training happens in urban centers</li>
                <li>• Limited rural preceptors and placement opportunities</li>
                <li>• Rural workforce gaps proportionally higher</li>
              </ul>
            </div>

            <div className="p-6 bg-card border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Slow Growth Trajectory</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Registered nurses growing at only 1.3% annually</li>
                <li>• Pharmacists at 1.1% - the slowest rate</li>
                <li>• Growth rates far below what's needed</li>
                <li>• Gaps will worsen over the next decade</li>
              </ul>
            </div>

            <div className="p-6 bg-card border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">International Lagging</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Canada: 7.5 graduates per 100k population</li>
                <li>• Denmark: 22.0 graduates per 100k</li>
                <li>• Need to double or triple graduate production</li>
                <li>• Underproducing for decades</li>
              </ul>
            </div>
          </div>

          {/* Data Source */}
          <div className="mt-12 p-4 bg-muted/50 rounded-lg border text-sm text-center">
            <p className="text-muted-foreground">
              <strong>Data Source:</strong> Health Canada - "Caring for Canadians: Canada's Future Health Workforce – 
              The Canadian Health Workforce Education, Training and Distribution Study" (January 2025)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkforceTraining;
