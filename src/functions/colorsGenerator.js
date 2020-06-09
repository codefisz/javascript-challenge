export const randomColorsArray = (length= 0) => {
  const hexSymbol = '#';
  const chars = '0123456789ABCDEF';
  const colors= new Array(length);

  while (length) {
    let i = 0;
    colors[colors.length-length]=hexSymbol;
    while(i < 6){
      colors[colors.length-length] += chars[(Math.floor(Math.random()*16))];
      i++
    }
    length--
  }
  return colors
};

export const presetColors = [
  '#a64a38',
  '#d65f48',
  '#ee6a50',
  '#f18772',
  '#f4a596',
  '#f6b4a7',
  '#f8c3b9',
  '#f9d2ca'
];

export const presetColorHighlights = [
  '#b25838',
  '#e57248',
  '#ff7f50',
  '#ff9872',
  '#ffb296',
  '#ffbfa7',
  '#ffcbb9',
  '#ffd8ca',
];