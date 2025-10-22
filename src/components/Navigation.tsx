import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Not Enough Doctors
          </Link>
          <div className="flex gap-2">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
              >
                Patient Access Crisis
              </Button>
            </Link>
            <Link to="/physician-challenges">
              <Button 
                variant={location.pathname === "/physician-challenges" ? "default" : "ghost"}
                size="sm"
              >
                Physician Workload
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
