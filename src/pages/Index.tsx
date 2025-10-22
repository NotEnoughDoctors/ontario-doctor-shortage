import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { AgeDistributionChart } from "@/components/AgeDistributionChart";
import { IncomeImpactChart } from "@/components/IncomeImpactChart";
import { DemographicComparison } from "@/components/DemographicComparison";
import { overallStats } from "@/data/attachmentData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-warning/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="mb-6 animate-count-up">
              Not Enough Doctors
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Ontario's Primary Care Crisis in Data
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="stat-number text-destructive mb-4 animate-count-up">
                1.8M
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                Ontarians without primary care
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                As of September 2023, over 1.8 million people in Ontario are not receiving 
                primary care from a family doctor or nurse practitioner
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <StatCard
              title="Total Population"
              value={overallStats.totalPopulation.toLocaleString()}
              subtitle="Ontario residents in study"
              variant="default"
            />
            <StatCard
              title="Have a Family Doctor"
              value={`${overallStats.attachedPercent}%`}
              subtitle={`${overallStats.attached.toLocaleString()} people attached`}
              variant="success"
            />
            <StatCard
              title="Without Consistent Care"
              value={`${overallStats.uncertainlyAttachedPercent}%`}
              subtitle={`${overallStats.uncertainlyAttached.toLocaleString()} people affected`}
              variant="warning"
            />
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center">The Crisis by Numbers</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <StatCard
              title="Not Receiving Any Primary Care"
              value="11.4%"
              subtitle={`${overallStats.notReceivingPrimaryCare.toLocaleString()} people without access`}
              variant="destructive"
            />
            <StatCard
              title="Receiving Some Care"
              value="4.7%"
              subtitle={`${overallStats.receivingPrimaryCare.toLocaleString()} people with uncertain attachment`}
              variant="warning"
            />
          </div>
        </div>
      </section>

      {/* Age Distribution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <AgeDistributionChart />
        </div>
      </section>

      {/* Income Impact */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <IncomeImpactChart />
        </div>
      </section>

      {/* Demographic Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center">Who's Most Affected?</h2>
          <DemographicComparison />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="mb-4">About This Data</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Data source: Ontario attachment rates study, September 2023. This analysis covers 
            15.7 million Ontario residents and their primary care attachment status based on 
            enrollment models, visit patterns, and continuity of care metrics.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Definitions:</strong> "Attached" patients are rostered with a family physician. 
            "Uncertainly Attached" patients lack formal attachment or consistent primary care. 
            "Not Receiving Primary Care" indicates no meaningful primary care access.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
