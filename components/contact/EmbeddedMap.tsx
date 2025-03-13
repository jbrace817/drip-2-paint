import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";
import { useMemo } from "react";

const CENTER = { lat: 40.1166, lng: -75.2166 }; // Chalfont, PA approximate center

// Function to generate circle coordinates
const generateCircleCoordinates = (
  center: { lat: number; lng: number },
  radiusMiles: number,
) => {
  const points = [];
  const lat = center.lat;
  const lng = center.lng;

  // Convert miles to degrees (approximate)
  // 1 degree of latitude = ~69 miles
  // 1 degree of longitude = ~69 miles * cos(latitude)
  const latRadius = radiusMiles / 69;
  const lngRadius = radiusMiles / (69 * Math.cos((lat * Math.PI) / 180));

  // Generate points in a circle
  for (let i = 0; i < 64; i++) {
    const angle = (i / 64) * 2 * Math.PI;
    points.push({
      lat: lat + latRadius * Math.sin(angle),
      lng: lng + lngRadius * Math.cos(angle),
    });
  }

  return points;
};

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const options = {
  disableDefaultUI: true,
  gestureHandling: "cooperative" as const,
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const polygonOptions = {
  fillColor: "#810FCB",
  fillOpacity: 0.3,
  strokeColor: "#810FCB",
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const CoverageMap = () => {
  // Memoize the coverage area to prevent unnecessary recalculations
  const coverageArea = useMemo(() => generateCircleCoordinates(CENTER, 12), []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={CENTER}
        zoom={9.8}
        options={options}
      >
        <Polygon paths={coverageArea} options={polygonOptions} />
      </GoogleMap>
    </LoadScript>
  );
};

export default CoverageMap;
