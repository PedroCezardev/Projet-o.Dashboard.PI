// interface do dashboard
// Função para verificar e aplicar o estado do modo escuro
function checkDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const darkModeToggle = document.querySelector('.dark-mode');
    
    // Verifica se o modo escuro está ativado
    if (isDarkMode) {
        enableDarkMode();
        darkModeToggle.classList.add('dark-mode-hover'); // Adiciona a classe quando estiver escuro
    } else {
        disableDarkMode();
        darkModeToggle.classList.remove('dark-mode-hover'); // Remove a classe quando não estiver escuro
    }
}

// Função para ativar o modo escuro
function enableDarkMode() {
    // Adicionar classe de modo escuro ao corpo
    document.body.classList.add('dark-mode-variables');
    
    // Ativar os ícones do botão darkMode
    const darkModeToggle = document.querySelector('.dark-mode');
    darkModeToggle.querySelector('span:nth-child(1)').classList.add('active');
    darkModeToggle.querySelector('span:nth-child(2)').classList.remove('active');
}

// Função para desativar o modo escuro
function disableDarkMode() {
    // Remover classe de modo escuro do corpo
    document.body.classList.remove('dark-mode-variables');
    
    // Desativar os ícones do botão darkMode
    const darkModeToggle = document.querySelector('.dark-mode');
    darkModeToggle.querySelector('span:nth-child(1)').classList.remove('active');
    darkModeToggle.querySelector('span:nth-child(2)').classList.add('active');
}

// Event listener para o botão darkMode
document.querySelector('.dark-mode').addEventListener('click', () => {
    // Alternar o estado do modo escuro
    toggleDarkMode();
});

// Função para alternar o estado do modo escuro
function toggleDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Alternar o estado do modo escuro
    if (isDarkMode) {
        localStorage.setItem('darkMode', 'false');
    } else {
        localStorage.setItem('darkMode', 'true');
    }
    
    // Verificar e aplicar o estado atualizado do modo escuro
    checkDarkMode();
}

// Verificar e aplicar o estado do modo escuro ao carregar a página
window.addEventListener('load', () => {
    checkDarkMode();
});
// fim da função
window.addEventListener('beforeunload', function () {
    document.body.style.transition = 'none'; // Remove todas as transições ao trocar de página
});


// função para exportar o gráfico
function exportarGrafico(download) {
    if (chartInstances.hasOwnProperty(id)) {
      const chartCanvas = chartInstances[id].canvas;
      const imagem = chartCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imagem;
      link.download = 'grafico.png';
      link.click();
    } else {
      alert('O gráfico não existe.');
    }
  }
