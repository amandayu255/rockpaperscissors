// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

document.querySelector("#shoot").onclick = function() {
  let userChoice = document.querySelector("input").value;
  document.querySelector("#userChoice").innerHTML = userChoice.toLowerCase();
  
  let computerChoice = "";
  let randomNumber = Math.random();
  let winner = "";
  if (randomNumber < 0.33) {
    //document.querySelector("#computerChoice").innerHTML = "rock";
    computerChoice = "rock";
  } else if (randomNumber < 0.66) {
    //document.querySelector("#computerChoice").innerHTML = "paper";
    computerChoice = "paper";
  } else {
    //document.querySelector("#computerChoice").innerHTML = "scissors";
    computerChoice = "scissors";
  }
  document.querySelector("#computerChoice").innerHTML = computerChoice;
  
  console.log(computerChoice)
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    //document.querySelector("#result").innerHTML = "computer wins";
    $("#result").html("Computer wins!");
  } else if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    $(`#result`).html(`${userChoice} vs ${computerChoice}... It's a tie!`);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    $("#result").html("User wins!");
  }
  
  /*
  $("#message").html("<div>hello</div>" +
                     "<div>"
                     + userChoice + " computer choice " + computerChoice +
                     "</div>");
                     */
  //$(`#message`).html(`hello ${userChoice} computer choice ${computerChoice}`);
  /*
  $(`#message`).html(`
    <div>userChoice: ${userChoice}</div>
    <div>computer choice: ${computerChoice}<img src="http://www.coltnews.com/wp-content/uploads/2016/04/RPS.png"></div>
  `);
  */
};
