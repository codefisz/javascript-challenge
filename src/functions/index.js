
export const filterData = (data, uBound, lBound) => {
  let features = [...data.features];

  data.features = features.filter(({geometry})=> {
    return geometry.coordinates[0][0][0][0] < uBound.lng &&
      geometry.coordinates[0][0][0][1] < uBound.lat &&
      geometry.coordinates[0][0][0][0] > lBound.lng &&
      geometry.coordinates[0][0][0][1] > lBound.lat
  });

  return data
};