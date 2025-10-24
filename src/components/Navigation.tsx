import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Patient Access Crisis" },
    { path: "/physician-challenges", label: "Physician Workload" },
    { path: "/workforce-training", label: "Workforce Training" },
    { path: "/doctor-map", label: "Doctor Map" },
  ];

  const getCurrentLabel = () => {
    const current = navItems.find(item => item.path === location.pathname);
    return current?.label || "Menu";
  };
  
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Not Enough Doctors
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4 mr-2" />
                  {getCurrentLabel()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-background z-50">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link 
                      to={item.path} 
                      className="w-full cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
