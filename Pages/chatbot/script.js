
// Enviar mensagem
function sendMessage() {
    var messageInput = document.getElementById('message-input');
    if (!messageInput.value) {
        messageInput.style.border = '1px solid red';
        return;
    }
    messageInput.style.border = 'none';

    // Obter o valor da mensagem
    var messageText = messageInput.value;

    // Limpar o campo de entrada
    messageInput.value = '';

    // Exibir a mensagem no histórico
    showHistory(messageText);
}

// Exibir histórico
function showHistory(message) {
    var historyBox = document.getElementById('history');

    // Criar um elemento de mensagem
    var messageBox = document.createElement('div');
    messageBox.className = 'message-box';

    var messageElement = document.createElement('p');
    messageElement.className = 'message';
    messageElement.innerHTML = message;

    messageBox.appendChild(messageElement);
    historyBox.appendChild(messageBox);
}
