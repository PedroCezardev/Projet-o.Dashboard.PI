// customização menu hamburguer
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})
// fim


import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('grafico'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
 

var DATA_CSV = {};

// Função para criar um gráfico com base nos dados fornecidos
function criarGrafico(tipo, data, canvasId) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chartOptions = {
    type: tipo,
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Valores',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  if (window.myChart) {
    window.myChart.destroy();
  }

  window.myChart = new Chart(ctx, chartOptions);
}

// Função para ler e adicionar o selecionar series 
const addSelectOptions = (options) => {
    options.forEach(option => {
      const htmlOption = document.createElement('option');
      htmlOption.value = option;
      htmlOption.innerHTML = option;
      document.getElementById('series').appendChild(htmlOption);
    });
  }
  

// Função para analisar o arquivo CSV
function analisarCSV(file) {
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function (results) {
      const raw_data = results.data;
      data_csv = raw_data;

      const labels = Object.keys(raw_data[0]);
      const values = Object.values(raw_data[0]);

      DATA_CSV.labels = labels;
      DATA_CSV.values = values.slice(1); // Remover a primeira coluna que contém as labels

      // Padrão: gráfico de barras
      criarGrafico('bar', DATA_CSV, 'chart1');
    }
  });
}

// Evento de seleção de arquivo CSV
document.getElementById('csvFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) analisarCSV(file);
});

// Evento para atualizar o tipo de gráfico
document.getElementById('chartType').addEventListener('change', function (event) {
  const selectedValue = event.target.value;
  criarGrafico(selectedValue, DATA_CSV, 'chart1');
});
