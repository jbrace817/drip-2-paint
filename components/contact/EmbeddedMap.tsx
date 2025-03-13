import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

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

const CENTER = { lat: 40.1166, lng: -75.2166 }; // Chalfont, PA approximate center

const coverageAreas = [
  {
    path: generateCircleCoordinates(CENTER, 12),
    name: "50 Mile Coverage Area",
  },
];

const CoverageOverlay = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const polygon = new google.maps.Polygon({
      paths: coverageAreas[0].path,
      strokeColor: "#810FCB",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      fillColor: "#810FCB",
      fillOpacity: 0.3,
    });

    polygon.setMap(map);

    return () => {
      polygon.setMap(null);
    };
  }, [map]);

  return null;
};

const CoverageMap = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <div style={{ width: "100%", height: "400px" }}>
        <Map
          defaultCenter={CENTER}
          defaultZoom={9.8} // Reduced zoom to show the larger coverage area
          gestureHandling={"cooperative"}
          disableDefaultUI={true}
        >
          <CoverageOverlay />
        </Map>
      </div>
    </APIProvider>
  );
};

export default CoverageMap;
