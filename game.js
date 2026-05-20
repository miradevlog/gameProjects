
// Program takes the player's move as input from process.argv

const playerMove = process.argv[2]?.toLowerCase();

// Valid moves
const moves = ["rock", "paper", "scissors"];

// Is the player's move valid?
if (!moves.includes(playerMove)) {
  console.log("Please choose: rock, paper, or scissors.");
  process.exit(1);
}

// A random move for the computer
const computerMove = moves[Math.floor(Math.random() * moves.length)];

// Determine the winner
let result;

if (playerMove === computerMove) {
  result = "It's a draw!";
} else if (
  (playerMove === "rock" && computerMove === "scissors") ||
  (playerMove === "paper" && computerMove === "rock") ||
  (playerMove === "scissors" && computerMove === "paper")
) {
  result = "You win!";
} else {
  result = "You lose!";
}

// Output the result
console.log(
  `You chose ${playerMove}. Computer chose ${computerMove}. ${result}`
);