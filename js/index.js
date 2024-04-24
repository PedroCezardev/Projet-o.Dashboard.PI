// Requisição ao Backend
fetch('https://nodejs-production-d284.up.railway.app/consulta1')
    .then(raw_data => {
        return raw_data.json()
    }).then(data => {
        
        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].nome_materia);
            data_chart.push(parseInt(data[i].numero_de_reprovados));
        }

        var ctx4 = document.getElementById("chart1").getContext("2d");
        var chart4 = new Chart(ctx4, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Gráfico de Rosca",
                        data: data_chart,
                        backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
                        borderColor: "#FFFFFF",
                        borderWidth: 2,
                    },
                ],
            },
        });
    })

fetch('https://nodejs-production-d284.up.railway.app/consulta2')
    .then(promessa => {
        return promessa.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].regiao);
            data_chart.push(parseInt(data[i].quantidade_funcionario));
        }

        var ctx4 = document.getElementById("chart2").getContext("2d");
        var chart4 = new Chart(ctx4, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Gráfico de Rosca",
                        data: data_chart,
                        backgroundColor: ["#5056BF", "#65A6FA", "#6D74F2", "#9B57CC", "#00CADC"],
                        borderColor: "#FFFFFF",
                        borderWidth: 2,
                    },
                ],
            },
        });

    })

fetch('https://nodejs-production-d284.up.railway.app/consulta3')
    .then(promess => {
        return promess.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].nome_cargo);
            data_chart.push(parseInt(data[i].quantidade_funcionario));
        }

        var ctx4 = document.getElementById("chart3").getContext("2d");
        var chart4 = new Chart(ctx4, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Gráfico de Rosca",
                        data: data_chart,
                        backgroundColor: [ "#9B57CC", "#6D74F2", "#65A6FA"],
                        borderColor: "#FFFFFF",
                        borderWidth: 2,
                    },
                ],
            },
        });


    })

fetch('https://nodejs-production-d284.up.railway.app/consulta4')
    .then(promess => {
        return promess.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].regiao);
            data_chart.push(parseFloat(data[i].media_notas));
        }

        var ctx2 = document.getElementById("chart5").getContext("2d");
        var chart2 = new Chart(ctx2, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data_chart,
                        backgroundColor: ["#5056BF", "#76A7E6", "#9B57CC"],
                    },
                ],
            },
        });

    })

fetch('https://nodejs-production-d284.up.railway.app/consulta5')
    .then(promess => {
        return promess.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].nome_avaliacao);
            data_chart.push(parseInt(data[i].media));
        }

        var ctx1 = document.getElementById("chart4").getContext("2d");
        var chart1 = new Chart(ctx1, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Média e o nome da Avaliação do Alunos Aprovados",
                        data: data_chart,
                        backgroundColor: ["#6C57F1", "#6C57F1", "#6C57F1", "#6C57F1", "#6C57F1"],
                    },
                ],
            },
        });

    })

fetch('https://nodejs-production-d284.up.railway.app/consulta6')
    .then(promess => {
        return promess.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            labels.push(data[i].media)
            data_chart.push(parseInt(data[i].media));
        }

        var ctx3 = document.getElementById("chart6").getContext("2d");
        var chart3 = new Chart(ctx3, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Todas as Médias de todos Alunos",
                        data: data_chart,
                        borderColor: "#F3926F",
                        fill: false,
                    },
                ],
            },
        });

    })

fetch('https://nodejs-production-d284.up.railway.app/consulta7')
    .then(promess => {
        return promess.json()
    }).then(data => {

        const labels = [];
        const data_chart = [];

        for (let i = 0; i < data.length; i++) {
            //labels.push(data[i].nome_escola);
            labels.push(data[i].cor);
            data_chart.push(parseInt(data[i].numero_alunos));
        }

        var ctx5 = document.getElementById("chart7").getContext("2d");
        var chart5 = new Chart(ctx5, {
            type: 'bar',
            label: 'Bar Dataset',
            data: {
                labels: labels,
                datasets: [{
                    label: "Quantidade de alunos por cor em cada escola",
                    data: data_chart,
                    borderWidth: 3,
                    borderColor: '#6D74F2'
                }]

            }
        });

    })