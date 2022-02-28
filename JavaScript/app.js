//Accedemos a los span respectivos de cada h2
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// Se crea una NodeList con las unicas 3 opciones que vamos a crear, solo agregaremos 3 botones en el index
const possibleChoices = document.querySelectorAll('button');

//iteramos por la NodeList, por cada posible acción la función tendra un listener (click) a cada boton
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    
    //accedemos al id del boton al que se hizo click
    userChoice = e.target.id;

    // mostramos en el span de elección del usuario, la elección seleccionada
    userChoiceDisplay.innerHTML = userChoice;

    //Por cada elección que hagamos, la computadora elegira una opción de manera aleatoria
    generateComputerChoice();

    //mostramos el resultado
    getResult();
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    switch (randomNumber) {
        case(1):
            computerChoice = 'rock';
            break;
        case(2):
            computerChoice = 'paper';
            break;
        case(3):
            computerChoice = 'scissors';
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if ( computerChoice === userChoice) {
        result = 'Its a Draw!';
    }
    if ( computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!';
    }
    if ( computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!';
    }
    if ( computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!';
    }
    if ( computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!';
    }
    if ( computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!';
    }
    if ( computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!';
    }

    resultDisplay.innerHTML = result;
}