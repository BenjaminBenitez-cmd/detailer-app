import React from 'react';
import config from '../config';
import ReactMapGL from 'react-mapbox-gl';

const maptoken = config.mapboxBoxToken;
function Map(props){
  const [viewPort, setViewPort] = useState(
    {
        viewport: {
          width: 400,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }
      }
  );

  return(
    <ReactMapGL
        width={viewPort.width}
        height={viewPort.height}
        latitude={viewPort.latitude}
        longitude={viewPort.longitude}
        zoom={viewPort.zoom}
        
        
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={(viewPort) => setViewPort({viewPort})}
        mapboxApiAccessToken={maptoken}
    />
  )
};

export default Map;
