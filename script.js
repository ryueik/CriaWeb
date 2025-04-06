document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por entrar em contato! Em breve, entraremos em contato com você.');
});

 // Função para alternar o tema
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggleButton.textContent = '🌙';  // Ícone para tema claro
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleButton.textContent = '☀️';  // Ícone para tema escuro
    }
});

// Função para abrir o chat
document.getElementById('btn-assistente').addEventListener('click', function() {
    document.getElementById('chat-container').style.display = 'flex';
});

// Função para fechar o chat
document.getElementById('fechar-chat').addEventListener('click', function() {
    document.getElementById('chat-container').style.display = 'none';
});

// Função para enviar mensagens
document.getElementById('enviar-msg').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage('Você: ' + userInput, 'user');
        document.getElementById('user-input').value = '';

        // Simula a resposta do assistente
        setTimeout(function() {
            addMessage('Assistente: ' + responderAssistente(userInput), 'assistente');
        }, 1000);
    }
});

// Função para adicionar mensagens no chat
function addMessage(message, type) {
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(type);
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight; // Rolagem automática
}

// Função para simular as respostas do assistente
function responderAssistente(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes("preço")) {
        return "O preço varia conforme o tipo de site. Entre em contato para mais detalhes.";
    } else if (userMessage.includes("site")) {
        return "Nós criamos sites personalizados de acordo com suas necessidades!";
    } else {
        return "Desculpe, não entendi. Pode repetir?";
    }
}

