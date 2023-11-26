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


// Gráfico 4: Gráfico de Rosca
var ctx4 = document.getElementById("chart1").getContext("2d");
var chart4 = new Chart(ctx4, {
    type: "doughnut",
    data: {
        labels: ["SEG", "TER", "QUAR", "QUIN", "SEX"],
        datasets: [
            {
                label: "Gráfico de Rosca",
                data: [20, 35, 50, 28, 53],
                backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
                borderColor: "#FFFFFF",
                borderWidth: 2,
            },
        ],
    },
});

// Gráfico 4: Gráfico de Rosca
var ctx4 = document.getElementById("chart2").getContext("2d");
var chart4 = new Chart(ctx4, {
    type: "doughnut",
    data: {
        labels: ["SEG", "TER", "QUAR", "QUIN", "SEX"],
        datasets: [
            {
                label: "Gráfico de Rosca",
                data: [20, 35, 50, 28, 53],
                backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
                borderColor: "#FFFFFF",
                borderWidth: 2,
            },
        ],
    },
});

// Gráfico 4: Gráfico de Rosca
var ctx4 = document.getElementById("chart3").getContext("2d");
var chart4 = new Chart(ctx4, {
    type: "doughnut",
    data: {
        labels: ["SEG", "TER", "QUAR", "QUIN", "SEX"],
        datasets: [
            {
                label: "Gráfico de Rosca",
                data: [20, 35, 50, 28, 53],
                backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
                borderColor: "#FFFFFF",
                borderWidth: 2,
            },
        ],
    },
});

// Gráfico 1: Gráfico de Barras
var ctx1 = document.getElementById("chart4").getContext("2d");
var chart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["DOM", "SEG", "TER", "QUAR", "QUIN", "SEX", "SÁB"],
        datasets: [
            {
                label: "Gráfico de Barras",
                data: [250, 150, 300, 190, 175, 310, 350],
                backgroundColor: ["#6C57F1", "#6C57F1", "#6C57F1", "#6C57F1", "#6C57F1"],
            },
        ],
    },
});

// Gráfico 2: Gráfico de Pizza
var ctx2 = document.getElementById("chart5").getContext("2d");
var chart2 = new Chart(ctx2, {
    type: "pie",
    data: {
        labels: ["JAN", "FEV", "MAR"],
        datasets: [
            {
                data: [25, 12, 15,],
                backgroundColor: ["#5056BF", "#76A7E6", "#9B57CC"],
            },
        ],
    },
});

// Gráfico 3: Gráfico de Linha
var ctx3 = document.getElementById("chart6").getContext("2d");
var chart3 = new Chart(ctx3, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
        datasets: [
            {
                label: "Gráfico de Linha",
                data: [100, 150, 250, 200, 235, 300, 400],
                borderColor: "#F3926F",
                fill: false,
            },
        ],
    },
});

var ctx5 = document.getElementById("chart7").getContext("2d");
var chart5 = new Chart(ctx5, {
    type: 'bar',
    label: 'Bar Dataset',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "Fluxo de 2019",
            data: [10, 15, 8, 5, 6, 9, 10, 7, 8, 11, 4, 5],
            borderWidth: 3,
            borderColor: '#6D74F2'
        }]

    }
});