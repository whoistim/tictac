var turnCount = 0;
var marker = ["X","O"]; //holds the x's and o's in an array.
var filledBoxes = [0,0,0,0,0,0,0,0,0];
var winCombos = [[0,1,2,],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



var enableBoxes = function(){
	var boxItems = document.querySelectorAll("div.box");
	for (var i = boxItems.length - 1; i >= 0; i--) {
	boxItems[i].style.backgroundColor = "yellow";
	boxItems[i].addEventListener("click", clickBox);
		}
};
var enableReset = function (){
	var resetButton = document.querySelector("button");
	resetButton.addEventListener("click", resetGame);
};

var resetGame = function () {
	enableBoxes();
	turnCount = 0;
	filledBoxes = [0,0,0,0,0,0,0,0,0];
	var killWinMess = document.querySelector("h1.winner");
	hi.winner.innerText = "";
};

var disableBoxes = function(){
	var boxItems = document.querySelectorAll("div.box");
	for (var i = boxItems.length - 1; i >= 0; i--) {
	boxItems[i].removeEventListener("click", clickBox);
		}
};


var clickBox = function( event ){
	// console.log("a box was clicked");
	this.style.backgroundColor = "white";
	var b = this.id[1];
	var markerNow = marker[((turnCount+2)%2)]; //The "X" or "O" to put into the grid.
	// console.log("this is the box id " + b +" .");
	filledBoxes[b] = markerNow;//inserts the X or O into an array to track the value of each box.
	this.innerText = markerNow;//inserts either "x" or "o" into the clicked box based on the turnCount.
	turnCount ++; // increments turnCount.
	// console.log(turnCount);
	// console.log(filledBoxes);
	this.removeEventListener("click", clickBox); //turns off listening for a cell after is it clicked.
	var whoWins = function () {
		for (i=0; i< winCombos.length; i++) {
			var boxZero = winCombos[i][0]; //sets up a var for the value of the first position in each win condition
			var boxOne = winCombos[i][1];
			var boxTwo = winCombos[i][2];
			var winMess = document.querySelector("h1.winner");

			if (filledBoxes[boxZero] == markerNow && filledBoxes[boxOne] == markerNow && filledBoxes[boxTwo] == markerNow) {
				// console.log(markerNow + " is the Big Boss!");
			disableBoxes(); //turns of event listening is someone wins.
			winMess.innerText = markerNow + " is the winner!!";
			}
			if (turnCount==9) {
			winMess.innerText = " Cat's Game!!";
			}	

			}

		};


	whoWins();

	};





console.log("Javascript is here");
enableBoxes();