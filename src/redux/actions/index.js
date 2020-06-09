import geoJsonData from "../../apis/geoJsonData";
import {filterData} from "../../functions";

export const setViewport = (viewport) => {
  return {
    type: 'SET_VIEWPORT',
    payload: viewport
  }
};

export const fetchData = (mapRef) => async dispatch => {

  const {_sw, _ne } = mapRef.current.getMap().getBounds();
  const response = await geoJsonData.get();

  const data = filterData(response.data, _ne, _sw);

  dispatch({
    type: 'FETCH_DATA',
    payload: data
  })
};

export const filterIsSet = (bool) => {
  return {
    type: 'FILTER_IS_SET',
    payload: bool
  }
};

export const setFeaturesFilter = (features) => {
  return {
    type: 'SET_FEATURES_FILTER',
    payload: features
  }
};