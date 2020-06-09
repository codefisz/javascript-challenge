export default (text) => (
  {
    legend: {
      position: 'right',
      onClick: (e) => e.stopPropagation(),
      fontFamily: 'Coda',
      align: 'end',
      labels: {
        fontColor: '#a64a38',
      }
    },
    cutoutPercentage: 30,
    rotation: -1.5 * Math.PI,
    title: {
      display: true,
      fontColor: '#a64a38',
      position: 'top',
      fontSize: 18,
      fontFamily: 'Coda',
      text
    }
  })