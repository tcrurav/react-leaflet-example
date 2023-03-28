import './App.css';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';



function App() {
  const positions = [
    {
      latitude: 28.0033198,
      longitude: -15.4163828
    }, {
      latitude: 27.9831833,
      longitude: -15.3870108
    }, {
      latitude: 27.996469,
      longitude: -15.3797842
    }
  ];

  return (
      <MapContainer center={[28.0033198, -15.4163828]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((p, index) =>
          <Marker key={index} position={[p.latitude, p.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
  );
}

export default App;
