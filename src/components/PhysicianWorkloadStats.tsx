import { StatCard } from "@/components/StatCard";
import { physicianBurnoutStats } from "@/data/physicianData";

export const PhysicianWorkloadStats = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Physicians Overburdened by EMR"
        value="64.3%"
        subtitle="Report excessive or moderately high after-hours EMR work"
        variant="destructive"
      />
      <StatCard
        title="Family Physicians Under Stress"
        value="39.2%"
        subtitle="Experience excessive EMR burden (vs 25.1% specialists)"
        variant="warning"
      />
      <StatCard
        title="AI Tool Adoption"
        value="6.6%"
        subtitle="Using AI to reduce administrative burden - massive untapped potential"
        variant="success"
      />
    </div>
  );
};
