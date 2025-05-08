const ctx = document.getElementById('marsChart').getContext('2d');

const marsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sol 1', 'Sol 2', 'Sol 3', 'Sol 4', 'Sol 5'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [-60, -63, -64, -62, -61],
        borderColor: 'orange',
        backgroundColor: 'rgba(255,165,0,0.2)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Wind Speed (km/h)',
        data: [20, 25, 30, 22, 18],
        borderColor: 'lightblue',
        backgroundColor: 'rgba(173,216,230,0.2)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Dust Storm Probability (%)',
        data: [15, 30, 50, 40, 25],
        borderColor: 'yellow',
        backgroundColor: 'rgba(255,255,0,0.2)',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Precipitation (%)',
        data: [0, 0, 1, 0, 0],
        borderColor: 'lightgreen',
        backgroundColor: 'rgba(144,238,144,0.2)',
        tension: 0.4,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    plugins: {
      legend: {
        display: true,
        onClick: (e, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          const meta = ci.getDatasetMeta(index);
          meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
          ci.update();
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Value'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mars Sols'
        }
      }
    }
  }
});
