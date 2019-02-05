function displayPress(press) {
  // Random number representing the opponent's selection
  // 1 - Rock
  // 2 - Paper
  // 3 - Scissors
  var matchup = Math.floor((Math.random() * 3) + 1);
  // String representation of the opponent's selection
  var opponent;                                      

  switch (matchup) {
    case 1:
      opponent = "Rock";
      break;
    case 2:
      opponent = "Paper";
      break;
    default:
      opponent = "Scissors";
  }

  document.getElementById("matchups").innerHTML = "<h2 id='matchup'>" + press 
                                                  + " vs " + opponent + "</h2>";
  displayResult(press, opponent);
}

function displayResult(press, opponent) {
  var result;

  switch (press) {
    case "Rock":
      if (opponent == "Rock") {
        result = "Tie!";
      }
      else if (opponent == "Paper") {
        result = "You Lose!";
      }
      else {
        result = "You Win!";
      }
      break;
    case "Paper":
      if (opponent == "Rock") {
        result = "You Win!";
      }
      else if (opponent == "Paper") {
        result = "Tie!";
      }
      else {
        result = "You Lose!";
      }
      break;
    case "Scissors":
      if (opponent == "Rock") {
        result = "You Lose!";
      }
      else if (opponent == "Paper") {
        result = "You Win!";
      }
      else {
        result = "Tie!";
      }
      break;
    default:
  }

  document.getElementById("result-wrap").innerHTML = "<h2 id='result'>" + result + "</h2>";
}
