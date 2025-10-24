import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { DoctorMapView } from "@/components/DoctorMapView";

interface Doctor {
  id: string;
  cpso_number: string | null;
  first_name: string;
  last_name: string;
  specialty: string | null;
  address: string | null;
  city: string | null;
  postal_code: string | null;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  accepting_patients: boolean;
}

const DoctorMap = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapReady, setMapReady] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchDoctors();
    // Delay map rendering to ensure DOM is ready
    const timer = setTimeout(() => setMapReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fetchDoctors = async () => {
    try {
      const { data, error } = await supabase
        .from("doctors")
        .select("*")
        .not("latitude", "is", null)
        .not("longitude", "is", null);

      if (error) throw error;
      setDoctors(data || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast({
        title: "Error loading doctors",
        description: "Could not load doctor locations from the database.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Ontario Doctor Locations</h1>
          <p className="text-muted-foreground">
            Interactive map showing physician practice locations across Ontario
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Doctor Directory Map</CardTitle>
            <CardDescription>
              {loading ? (
                <Skeleton className="h-4 w-48" />
              ) : (
                `Showing ${doctors.length} doctor${doctors.length !== 1 ? "s" : ""} with location data`
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading || !mapReady ? (
              <Skeleton className="h-[600px] w-full" />
            ) : doctors.length === 0 ? (
              <div className="h-[600px] flex items-center justify-center border rounded-lg bg-muted/20">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">No doctor data available</p>
                  <p className="text-sm text-muted-foreground">
                    Import doctor data from CPSO to see locations on the map
                  </p>
                </div>
              </div>
            ) : (
              <DoctorMapView doctors={doctors} />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorMap;
