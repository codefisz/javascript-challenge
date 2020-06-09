
export default (features) => {
  const materialsCount = {};
  const sizeOfRampCount = [
    {'<50':0}, {'50-200':0}, {'>200':0}
  ];

  features.forEach(({properties}) => {
    const material = properties.material;
    const area = properties.area_;
    //get material names and count them
    if(materialsCount.hasOwnProperty(material)){
      materialsCount[material]++
    } else {
      materialsCount[material] = 1
    }

    switch(true) {
      case area<50:
        sizeOfRampCount[0]['<50']++;
        break;
      case 50<=area && area<200:
        sizeOfRampCount[1]['50-200']++;
        break;
      case area>=200:
        sizeOfRampCount[2]['>200']++;
        break;
    }
  });

  return {
    materialsCount: sortObject(materialsCount),
    sizeOfRampCount
  }
}

const sortObject = (obj) => {
  const keys = Object.keys(obj);
  const sorted = {};
  keys.sort((a,b) => obj[b] - obj[a]);

  keys.forEach(key=>{
    sorted[key] = obj[key]
  });
  return sorted
};