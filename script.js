
function addToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculate() {
    const expression = document.getElementById('display').value;
    try {
        const result = eval(expression);
        if (!isNaN(result)) {
            const historyList = document.getElementById('history-list');
            const listItem = document.createElement('li');
            listItem.textContent = `${expression} = ${result}`;
            historyList.appendChild(listItem);
            // Almacenar el historial en localStorage
            const history = localStorage.getItem('calculatorHistory') || '[]';
            const historyArray = JSON.parse(history);
            historyArray.push(`${expression} = ${result}`);
            localStorage.setItem('calculatorHistory', JSON.stringify(historyArray));
            document.getElementById('display').value = result;
        } else {
            alert('Error en la expresión.');
        }
    } catch (error) {
        alert('Error en la expresión.');
    }
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function clearHistory() {
    localStorage.removeItem('calculatorHistory');
    document.getElementById('history-list').innerHTML = '';
}


window.onload = function () {
    const history = localStorage.getItem('calculatorHistory');
    if (history) {
        const historyArray = JSON.parse(history);
        const historyList = document.getElementById('history-list');
        historyArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            historyList.appendChild(listItem);
        });
    }
};