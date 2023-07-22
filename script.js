


const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const imageContainer = document.querySelector('#image-container');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log('Humano: ' + human + ' Maquina: ' + machine);

  const existingImage = imageContainer.querySelector('img');
  if (existingImage) {
    imageContainer.removeChild(existingImage);
  }

  if (human === machine) {
    result.innerHTML = 'Deu empate!';
    const image = document.createElement('img');
    image.src = 'assets/img/Empate.png';
    image.style.width = '100px';
    image.style.height = '100px';
    imageContainer.appendChild(image);
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = 'Você ganhou!';
    const image = document.createElement('img');
    image.src = 'assets/img/Você-Ganhou-Luidi.png';
    image.style.width = '100px';
    image.style.height = '100px';
    imageContainer.appendChild(image);
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = 'Mario Ganhou!';
    const image = document.createElement('img');
    image.src = 'assets/img/Mario-Ganhou.png';
    image.style.width = '70px';
    image.style.height = '90px';
    imageContainer.appendChild(image);
  }
};