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
 





// Função para adicionar mensagens no chat
function addMessage(message, sender) {
    var messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    document.getElementById('chat-messages').appendChild(messageElement);
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
