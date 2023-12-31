let displayValue = ''; // Variável para armazenar o valor do campo de exibição

function addToDisplay(value) {
    displayValue += value; // Adiciona o valor do botão ao campo de exibição
    updateDisplay(); // Atualiza o campo de exibição
}

function updateDisplay() {
    document.getElementById('resultado').innerText = displayValue; // Atualiza o conteúdo do campo de exibição
}

function clearDisplay() {
    displayValue = ''; // Limpa o campo de exibição
    updateDisplay(); // Atualiza o campo de exibição
}

function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove o último caractere do campo de exibição
    updateDisplay(); // Atualiza o campo de exibição
}

function addToDisplay(value) {
    // Verifica se a vírgula já está presente na expressão
    if (value === '.' && displayValue.includes('.')) {
      return; // Se já tiver uma vírgula, não adiciona outra
    }
    displayValue += value; // Adiciona o valor do botão ao campo de exibição
    updateDisplay(); // Atualiza o campo de exibição
  }

function calculate() {
    let result;
    try { // Cria uma função anônima com a expressão matemática e a executa
        result = Function('"use strict"; return (' + displayValue + ')')();
        displayValue = result.toString(); // Converte o resultado em uma string
        updateDisplay(); // Atualiza o campo de exibição
    } catch (error) {
        displayValue = ''; // Em caso de erro, limpa o campo de exibição
        updateDisplay(); // Atualiza o campo de exibição
        alert('Erro na expressão!'); // Exibe um alerta de erro
    }
}