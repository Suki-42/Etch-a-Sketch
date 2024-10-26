const container = document.querySelector('#container');

function createGrid(squaresBySide) {
    container.innerHTML = '';
    
    for (let i = 0; i < squaresBySide ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    
    container.style.gridTemplateColumns = `repeat(${squaresBySide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresBySide}, 1fr)`;
}

createGrid(16);

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    const userInput = parseInt(prompt('Number of squares per side (up to 100):'), 10);
    if (userInput && userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

