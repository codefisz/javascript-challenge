import React from "react";
import {useDispatch} from "react-redux";
import {filterIsSet} from "../redux/actions";

export const ClearFeatureFilter = () => {
  const dispatch = useDispatch();

  return(
      <button className={'span-width'}
        onClick={() =>
          dispatch(filterIsSet(false))
        }
      >Remove Filters</button>
  )
};