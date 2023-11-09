let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    // Generate a random number between 0 and one
    const randomDecimal = Math.random();
    // Scale random number to be between 0 and 9
    const randomInteger = Math.floor(randomDecimal * 10);
    return randomInteger;
}

const compareGuesses = (human, computer, secretTarget) => {
    const humanDifference = Math.abs(human - secretTarget);
    const computerDifference = Math.abs(computer - secretTarget);

    if (humanDifference <= computerDifference) {
        // The Human wins
        return true;
    } else {
        // The computer wins
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++
    }
}

const advanceRound = currentRoundNumber => {
    currentRoundNumber++;
}