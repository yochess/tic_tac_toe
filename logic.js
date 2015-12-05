var tableElem = document.getElementById('board');
var gridElem = tableElem.getElementsByTagName('td');

var gridClicked = [];
var gridValue = [];

var counter = 0;
var endGame = false;

for(var i = 0; i < 9; i++) { 
  gridClicked[i] = false; 
  gridValue[i] = '';
}

var processMove = function(i) {

  if(!gridClicked[i]) { 

    if(counter !== 9 && !endGame) {
      humanTurn(i);
      checkGame('X');

    }
    if(counter !== 9 && !endGame) {
      computerTurn()
      checkGame('O');
    }
  }

};

var checkGame = function(letter) {
  var gameOver = false;
  var goal = '';
  for(var i = 0; i < 3; i++) { goal += letter }

  if( (gridValue[0] + gridValue[1] + gridValue[2] === goal) || 
      (gridValue[3] + gridValue[4] + gridValue[5] === goal) || 
      (gridValue[6] + gridValue[7] + gridValue[8] === goal) ||

      (gridValue[0] + gridValue[3] + gridValue[6] === goal) ||
      (gridValue[1] + gridValue[4] + gridValue[7] === goal) ||
      (gridValue[2] + gridValue[5] + gridValue[8] === goal) ||

      (gridValue[0] + gridValue[4] + gridValue[8] === goal) ||
      (gridValue[2] + gridValue[4] + gridValue[6] === goal)  )
  { gameOver = true; }

  if(gameOver) {
    letter === 'X' ? alert('You win!') : alert('You lose!');
    endGame = true;
  }
  if(counter === 9 && !gameOver) {
    gameOver = true;
    alert('PUSH!');
  }
  
};

var humanTurn = function(i) {
  counter++;
  gridClicked[i] = true;
  gridValue[i] = 'X';
  gridElem[i].innerHTML = 'X';
  return i;
};

var computerTurn = function() {
  if(counter === 9) { return false; }

  var ply_0 = levelZero();
  var ply_1 = levelOne();
  var ply_2 = levelTwo();

  // stupid bug that consted me a LONG time since 0 == false
  var g = ply_1+1 || ply_2+1 || ply_0+1;
  g -= 1;

  counter++;
  gridClicked[g] = true;
  gridValue[g] = 'O';
  gridElem[g].innerHTML = 'O';
  return g;
};


var levelZero = function() {
  var r;
  do {
    r = Math.floor(Math.random() * 8 + 1);
  } while(gridClicked[r]);

  return r;
}

var levelOne = function() {

  for(var i = 0; i < 9; i += 3) {
    // checking 3 rows
    if(gridValue[i] + gridValue[i+1] + gridValue[i+2] === 'OO') {
      for(var j = i; j < i + 3; j++) { if(gridValue[j] === '') return j; }
    }
    // checking 3 columns
    if(gridValue[i/3] + gridValue[i/3+3] + gridValue[i/3+6] === 'OO') {
      for(var j = i/3; j < 9; j += 3) { if(gridValue[j] === '') return j; }
    }
  }
  // manually checking diagonals
  if(gridValue[0] + gridValue[4] + gridValue[8] === 'OO') {
    for(var j = 0; j <= 8; j += 4) { if(gridValue[j] === '') return j; }
  }
  if(gridValue[2] + gridValue[4] + gridValue[6] === 'OO') {
    for(var j = 2; j <= 6; j += 2) { if(gridValue[j] === '') return j; }
  }

};

var levelTwo = function() {

  for(var i = 0; i < 9; i += 3) {
    // checking 3 rows
    if(gridValue[i] + gridValue[i+1] + gridValue[i+2] === 'XX') {
      for(var j = i; j < i + 3; j++) { if(gridValue[j] === '') return j; }
    }
    // checking 3 columns
    if(gridValue[i/3] + gridValue[i/3+3] + gridValue[i/3+6] === 'XX') {
      for(var j = i/3; j < 9; j += 3) { if(gridValue[j] === '') return j; }
    }
  }
  // manually checking diagonals
  if(gridValue[0] + gridValue[4] + gridValue[8] === 'XX') {
    for(var j = 0; j <= 8; j += 4) { if(gridValue[j] === '') return j; }
  }
  if(gridValue[2] + gridValue[4] + gridValue[6] === 'XX') {
    for(var j = 2; j <= 6; j += 2) { if(gridValue[j] === '') return j; }
  }

};


