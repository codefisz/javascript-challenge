import React, {useEffect, useRef} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
import {useDispatch, useSelector} from "react-redux";

import {MapMarkers} from "./MapMarkers";
import {setViewport, fetchData} from "../../redux/actions";

export const MapContainer = () => {
  const dispatch = useDispatch();
  const features = useSelector(state => state.features);
  const isFiltered = useSelector(state => state.isFiltered);
  const viewport = useSelector(state => state.viewport);

  const mapRef = useRef(null);

  useEffect(()=>{
    if(mapRef !== null && !isFiltered) dispatch(fetchData(mapRef))
  },[viewport, isFiltered, dispatch]);


  return <div className={'contentSection'}>
    <MapGL
      ref={mapRef}
      {...viewport}
      width={'100%'}
      height={'100%'}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => dispatch(setViewport(viewport))}
    >
      <div style={{ position: 'absolute', right: 10, top: 10 }}>
        <NavigationControl
          onViewportChange={(viewport) =>
            dispatch(setViewport(viewport))
          }
        />
      </div>
      <MapMarkers data={features} />
    </MapGL>
  </div>
};