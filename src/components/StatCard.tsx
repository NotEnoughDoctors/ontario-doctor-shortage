import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  variant?: "default" | "warning" | "destructive" | "success";
  className?: string;
}

export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  variant = "default",
  className 
}: StatCardProps) => {
  const variantStyles = {
    default: "border-primary/20 bg-card",
    warning: "border-warning/30 bg-warning/5",
    destructive: "border-destructive/30 bg-destructive/5",
    success: "border-success/30 bg-success/5",
  };

  const textStyles = {
    default: "text-primary",
    warning: "text-warning",
    destructive: "text-destructive",
    success: "text-success",
  };

  return (
    <Card className={cn("p-6 border-2 transition-all duration-300 hover:shadow-lg", variantStyles[variant], className)}>
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
        {title}
      </h3>
      <div className={cn("text-4xl md:text-5xl font-bold mb-2 tabular-nums", textStyles[variant])}>
        {value}
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Card>
  );
};
