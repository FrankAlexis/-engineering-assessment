import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FoodTruck } from '../types/foodTruck';

interface MapProps {
  foodTrucks: FoodTruck[];
}

const MapComponent: FC<MapProps> = ({ foodTrucks }) => {
  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={12} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {foodTrucks.map(truck => (
        <Marker key={truck.id} position={[truck.latitude, truck.longitude]}>
          <Popup>
            <strong>{truck.name}</strong><br />
            {truck.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
