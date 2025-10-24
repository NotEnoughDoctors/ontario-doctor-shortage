import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Badge } from "@/components/ui/badge";
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

interface DoctorMapViewProps {
  doctors: Doctor[];
}

export const DoctorMapView = ({ doctors }: DoctorMapViewProps) => {
  const ontarioCenter: [number, number] = [44.5, -79.5];

  return (
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
  );
};
