import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
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
    } catch (error: any) {
      toast({
        title: "Error loading doctors",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Center on Ontario
  const center: [number, number] = [44.5, -79.5];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Ontario Doctors Map</h1>
          <p className="text-muted-foreground">
            Interactive map showing doctor locations across Ontario
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {loading ? "Loading..." : `${doctors.length} Doctors Found`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] rounded-lg overflow-hidden">
              <MapContainer
                center={center}
                zoom={7}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {doctors.map((doctor) => {
                  if (!doctor.latitude || !doctor.longitude) return null;
                  
                  return (
                    <Marker
                      key={doctor.id}
                      position={[doctor.latitude, doctor.longitude]}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold">
                            Dr. {doctor.first_name} {doctor.last_name}
                          </h3>
                          {doctor.specialty && (
                            <p className="text-sm">{doctor.specialty}</p>
                          )}
                          {doctor.address && (
                            <p className="text-sm mt-1">{doctor.address}</p>
                          )}
                          {doctor.city && (
                            <p className="text-sm">
                              {doctor.city} {doctor.postal_code}
                            </p>
                          )}
                          {doctor.phone && (
                            <p className="text-sm mt-1">📞 {doctor.phone}</p>
                          )}
                          {doctor.accepting_patients && (
                            <p className="text-sm text-green-600 mt-1">
                              ✓ Accepting new patients
                            </p>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
            
            {!loading && doctors.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No doctor data available yet. Please import doctor data to see locations on the map.
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorMap;
