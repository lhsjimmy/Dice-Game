/*Instructions: As long as there is money, play the game.
Each round, the program rolls a virtual pair of dice for the user.
If the sum of the 2 dice is equal to 7, the player wins $4
Otherwise, the player loses $1.*/
//-----DEFINING VARIABLES AND FUNCTIONS-----//

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
};

var gameMoney;
var firstDice;
var secondDice;
var dieSum;
var betsArray =[];
var highestWin;
var totalRolls;
var rollCount;

function showResults() {
document.getElementById("results").style.display = "block";
document.getElementById("playButton").innerHTML = "Play Again";
document.getElementById("startingBet").innerHTML = "$" + startingBet +".00";
document.getElementById("totalRolls").innerHTML = totalRolls;
document.getElementById("highestWin").innerHTML = "$" + highestWin + ".00";
document.getElementById("rollCount").innerHTML = rollCount;
};

//-------GAME STARTS-------//
function start(){
  startingBet = Number(document.forms["luckySevens"]["startingBet"].value)
  if (startingBet <=0) {
  alert("Starting bet needs to be greater than $0.00!");
}
  else gameMoney = startingBet;

  while (gameMoney > 0){
    firstDice = rollDice();
    secondDice = rollDice();
    dieSum = firstDice + secondDice;
    if(dieSum != 7) {
      gameMoney--;
      console.log("lose 1");
  }
      else{
    gameMoney += 4;
    console.log("Win 4")
    }
  betsArray.push(gameMoney)
  highestWin = Math.max.apply(Math, betsArray);
  totalRolls= betsArray.length
  rollCount = 1 + betsArray.indexOf(highestWin);
  }
  showResults();
  }
