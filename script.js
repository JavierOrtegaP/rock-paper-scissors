function getComputerChoice() {
  /**
   * getComputerChoice takes no argument.
   * The return value is "Rock" OR "Paper" OR "Scissors" in all cases (randomly).
   */
  var random_number = Math.random() * 100;

  let random_choice =
    random_number <= 33 ? "Rock" : random_number <= 66 ? "Paper" : "Scissors";
  return random_choice;
}

function playRound(playerSelection, computerSelection) {
  /**
   * This function plays a round of Rock, Paper and Scissors
   * @param {string} playerSelection - Player choice for the round
   * @param {string} computerSelection - Computer choice for the round
   * @return {string} Returns a message stating the outcome of the round
   */
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return (
      "You Tie! You chose the same as the computer (" + computerSelection + ")"
    );
  }
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection == "Paper") return "You Lose! Paper beats Rock";
      else return "You Win! Rock beats Scissors";
    case "paper":
      if (computerSelection == "Scissors")
        return "You Lose! Scissors beats Paper";
      else return "You Win! Paper beats Rock";
    case "scissors":
      if (computerSelection == "Rock") return "You Lose! Rock beats Scissors";
      else return "You Win! Scissors beats Paper";
    default:
      return "There was an error on playRound";
  }
}

var computerSelection = getComputerChoice();

function game() {
  var game_completed = false;
  var round_number = 0;
  var rounds_player_won = 0;
  var rounds_computer_won = 0;
  // play consecutive rounds until 5 rounds have been played
  while (!game_completed) {
    // check if 5 rounds have been played; if so end the game. increment round count
    round_number++;
    if (round_number >= 5) {
      game_completed = true;
    }

    // ask the user for a choice
    player_choice_round = prompt(
      "Please input your choice: Rock, Paper or scissor?",
    );
    // get the choice of the computer
    computer_choice_round = getComputerChoice();
    // play a round and show the outcomes in the console
    console.log(playRound(player_choice_round, computer_choice_round));
    // keep count of the score
    if (
      playRound(player_choice_round, computer_choice_round)
        .toLowerCase()
        .includes("win")
    ) {
      rounds_player_won++;
    } else if (
      playRound(player_choice_round, computer_choice_round)
        .toLowerCase()
        .includes("lose")
    ) {
      rounds_computer_won++;
    }
  }
  // decide on a winner or if it was a tie
  if (rounds_player_won > rounds_computer_won) {
    console.log(
      "You won! (" +
        rounds_player_won +
        " rounds won by you vs " +
        rounds_computer_won +
        " rounds won by the Computer)",
    );
  } else if (rounds_computer_won > rounds_player_won) {
    console.log(
      "You lost! (" +
        rounds_player_won +
        " rounds won by you vs " +
        rounds_computer_won +
        " rounds won by the Computer)",
    );
  } else
    console.log(
      "It's a tie! (" +
        rounds_player_won +
        " rounds won by you vs " +
        rounds_computer_won +
        " rounds won by the Computer)",
    );
}

game();
