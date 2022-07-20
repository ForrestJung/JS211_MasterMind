'use strict';

const assert = require('assert');
const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  // for (let i = 0; i < 4; i++) {
  //   const randomIndex = getRandomInt(0, letters.length);
  //   solution += letters[randomIndex];
  // }
  while ()
  if (!solution.includes(letters[randomIndex])) {
    solution.push
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {

  // Splits the string into an array called guessArray
  let guessArray = guess.split('');
  // Split the solution string into an array called solutionArray
  let solutionArray = solution.split('');
  // Create a correctLetterLocations variable and set it to 0
  let correctLetterLocations = 0;


  // Loop through each item in the solutionArray and compare them guessArray in the same index position
  solutionArray.forEach((letter, index) => {
    if (letter === guessArray[index]) {
      // If the two arrays have the same value in the same index, add 1 to correctLetterLocations
      // Also set solutionArray[i] to null
      correctLetterLocations++; 
      index = null;
    }
  });
  
  let correctLetters = 0;
  
  solutionArray.forEach((letter, index) => {
    let targetIndex = solutionArray.indexOf(guessArray[index]);
    if (targetIndex > -1) {
      correctLetters++;
      letter = null;
    }
  });
    // console.log(guessArray)
    // console.log(solutionArray)
    console.log("Correct Letter Locations: " + correctLetterLocations)
    console.log("Correct Letters: " + correctLetters)
    return correctLetterLocations + "-" + correctLetters;
  }



const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution

  // Tests to see if the guess is correct, if not generates a hint
  if (guess == solution) {
    return 'You guessed it!'
  } else {
    generateHint(guess);
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}