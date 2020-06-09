import { Marker } from 'react-map-gl';
import React from 'react';
import getMaterialsCount from '../../functions/getMaterialsCount';
import { presetColors } from "../../functions/colorsGenerator";

export const MapMarkers = ({ data }) => {

  const {materialsCount, sizeOfRampCount} = getMaterialsCount(data);

  return (
    <>
      {data.map(({ id, geometry, properties }) =>
        {
          const i = Object.keys(materialsCount).indexOf(properties.material);
          let j =0;
          switch (true) {
            case properties.area_< 50:
              j=0;
              break;
            case properties.area_>=50 && properties.area_<=200:
              j=1
              break;
            case properties.area_>200:
              j=2;
              break;
          }

          return <Marker
            key={id}
            captureClick={true}
            latitude={geometry.coordinates[0][0][0][1]}
            longitude={geometry.coordinates[0][0][0][0]}
          >
            <div style={{
              borderRadius: '50%',
              background: 'linear-gradient(90deg, '+ presetColors[i] +' 0%, '+ presetColors[i] +' 50%, '+ presetColors[j] +' 50%, '+ presetColors[j] +' 100%)',
              width: '15px',
              height: '15px'}}></div>
          </Marker>
        }
      )}
    </>
  );
};