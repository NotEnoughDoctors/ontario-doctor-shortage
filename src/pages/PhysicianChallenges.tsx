import { Navigation } from "@/components/Navigation";
import { PhysicianWorkloadStats } from "@/components/PhysicianWorkloadStats";
import { EMRWorkloadChart } from "@/components/EMRWorkloadChart";
import { PracticeToolsChart } from "@/components/PracticeToolsChart";
import { CareDeliveryInsight } from "@/components/CareDeliveryInsight";

const PhysicianChallenges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Why Existing Doctors Can't Take More Patients
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Administrative burden, outdated tools, and burnout limit physician capacity
          </p>
        </div>

        {/* EMR Definition */}
        <div className="max-w-2xl mx-auto mb-12 p-4 bg-muted/50 rounded-lg border -mt-4">
          <p className="text-sm text-center">
            <strong>EMR</strong> (Electronic Medical Record) is the digital system physicians use to document patient encounters, 
            order tests, prescribe medications, and manage clinical information.
          </p>
        </div>

        {/* Key Stats */}
        <PhysicianWorkloadStats />

        {/* Main Content */}
        <div className="space-y-8">
          <EMRWorkloadChart />
          
          <div className="grid md:grid-cols-2 gap-6">
            <PracticeToolsChart />
            <CareDeliveryInsight />
          </div>

          {/* Context Section */}
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-3xl font-bold mb-6">The Capacity Paradox</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                While <strong className="text-foreground">1.8 million Ontarians lack a family doctor</strong>, 
                existing physicians are stretched beyond capacity. The 2024 CMA survey reveals systemic issues:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">64% of physicians</strong> report excessive or moderately 
                  high time spent on EMR after hours, contributing to burnout
                </li>
                <li>
                  <strong className="text-foreground">Family physicians</strong> bear the heaviest burden with 
                  39% reporting excessive EMR work
                </li>
                <li>
                  <strong className="text-foreground">Low adoption</strong> of efficiency tools: only 25% offer 
                  online booking, 37% secure messaging
                </li>
                <li>
                  <strong className="text-foreground">Minimal AI use</strong> (6.6%) despite potential to 
                  dramatically reduce administrative burden
                </li>
              </ul>
              <p className="pt-4">
                Without addressing physician workload and investing in modern practice tools, we cannot solve 
                the access crisis - even with more doctors.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Data sources: 2024 CMA National Physician Survey | Ontario Attachment Data (Sept 2023)</p>
        </div>
      </footer>
    </div>
  );
};

export default PhysicianChallenges;
