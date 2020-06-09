import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import getMaterialsCount from "../../functions/getMaterialsCount";
import ChartsConfig from "./ChartsConfig";
import { presetColors, presetColorHighlights} from "../../functions/colorsGenerator";
import {filterIsSet, setFeaturesFilter} from '../../redux/actions'
import {ClearFeatureFilter} from "../ClearFeatureFilter";

export const ChartsContainer = () => {
  const dispatch = useDispatch();
  const features = useSelector(state=> state.features);
  const isFiltered = useSelector(state => state.isFiltered);

  const dataCount = features.length;
  const data = getMaterialsCount(features);
  const materialsData = {
    labels:Object.keys(data.materialsCount),
    datasets:[
      {
        label: 'Material',
        backgroundColor: presetColors,
        hoverBackgroundColor: presetColorHighlights,
        data: Object.values(data.materialsCount)
      }
    ]
  };

  const areasData = {
    labels:data.sizeOfRampCount.map(element=>Object.keys(element)),
    datasets:[
      {
        label: 'Size',
        backgroundColor: presetColors,
        hoverBackgroundColor: presetColorHighlights,
        data: data.sizeOfRampCount.map(element=>Object.values(element))
      }
    ]
  };

  const handleMaterialChartClick = (elems)=>{
    const index = elems[0]?._index;
    const label = elems[0]?._chart.config.data.labels[index];

    if(label){
      const restrictedFeatures = features.filter(({properties})=>
        properties.material === label
      );
      dispatch(filterIsSet(true));
      dispatch(setFeaturesFilter(restrictedFeatures))
    }
  };

  const handleAreaChartClick = (elems)=>{
    const index = elems[0]?._index;
    const label = elems[0]?._chart.config.data.labels[index][0];

    if(label){
      const restrictedFeatures = features.filter(({properties})=>{
        switch(label){
          case '<50':
              return properties.area_ < 50;
          case '50-200':
              return properties.area_ > 50 && properties.area_ < 200;
          case '>200':
              return properties.area_ >= 200
        }
      });
      dispatch(filterIsSet(true));
      dispatch(setFeaturesFilter(restrictedFeatures))
    }
  };

  return (
    <>
      <div className={'contentSection charts'}>
        {isFiltered && <ClearFeatureFilter />}
        <div className={'chart'}>
          <Doughnut
            data={materialsData}
            options={ChartsConfig('Construction material (' + dataCount + ' items)')}
            onElementsClick={(elems)=>handleMaterialChartClick(elems)}
          />
        </div>
        <div className={'chart'}>
          <Doughnut
            data={areasData}
            options={ChartsConfig('Surface area(' + dataCount + ' items)')}
            onElementsClick={(elems)=>handleAreaChartClick(elems)}
          />
        </div>
      </div>
    </>
  )
};