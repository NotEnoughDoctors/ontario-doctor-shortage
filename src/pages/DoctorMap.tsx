import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

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
  const { toast } = useToast();

  useEffect(() => {
    fetchDoctors();
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

  const ontarioCenter: [number, number] = [44.5, -79.5];

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
            {loading ? (
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
              <MapContainer
                center={ontarioCenter}
                zoom={6}
                style={{ height: "600px", width: "100%" }}
                className="rounded-lg"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {doctors.map((doctor) => (
                  <Marker
                    key={doctor.id}
                    position={[doctor.latitude!, doctor.longitude!]}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold text-base mb-1">
                          Dr. {doctor.first_name} {doctor.last_name}
                        </h3>
                        {doctor.specialty && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {doctor.specialty}
                          </p>
                        )}
                        {doctor.address && (
                          <p className="text-sm mb-1">{doctor.address}</p>
                        )}
                        {doctor.city && (
                          <p className="text-sm mb-1">
                            {doctor.city}
                            {doctor.postal_code && `, ${doctor.postal_code}`}
                          </p>
                        )}
                        {doctor.phone && (
                          <p className="text-sm mb-2">📞 {doctor.phone}</p>
                        )}
                        {doctor.accepting_patients && (
                          <Badge variant="default" className="mt-1">
                            Accepting Patients
                          </Badge>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorMap;
