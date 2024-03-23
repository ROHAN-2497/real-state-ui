import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <div className="map">
      {" "}
      <MapContainer
        center={(52.4797, -1.90269)}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={(52.4797, -1.90269)}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
