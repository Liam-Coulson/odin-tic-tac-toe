const tictactoeContainer = document.getElementById("tictactoe-container")

// =====================================
// =============== EVENTS ==============
// =====================================

tictactoeContainer.addEventListener("click", clickHandler);

function clickHandler(e) {
  if (e.target.matches(".space") && e.target.textContent == "") {
    let spaceIndex = e.target.id.slice(1).split(""); // remove leading char in CSS ID
    GameController.makeMove(spaceIndex);
  }
}

// =====================================
// =============== IIFEs ===============
// =====================================

const GameBoard = (
  () => {
    this.board = [["","",""],
                  ["","",""],
                  ["","",""]];

    const markSpace = (Player, space) => {
      board[parseInt(space[0])][parseInt(space[1])] = Player.symbol;
    }

    return {board, markSpace};
  }
)()

const GameController = (
  (Player1, Player2) => {  
    this.Player1 = Player1; // Player objects
    this.Player2 = Player2;
    this.currentTurn = 1;

    // Called upon page load
    const startGame = () => {

    }
    
    const getCurrentPlayer = () => {
      if (currentTurn % 2 == 1) {
        return Player1;
      } else {
        return Player2;
      }
    }

    const updateHTML = () => {
      for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          let currentSpace = tictactoeContainer.getElementById(`s${row}${col}`)
          currentSpace.textContent = GameBoard.board[row][col];
        }
      }
    }

    const checkForWin = () => {

    }
    
    // Called by click event on a space on the tictactoe board
    const makeMove = (space) => {
      GameBoard.markSpace(getCurrentPlayer(), space);
      currentTurn++;
      updateHTML();
      checkForWin();
    }
    
    return {makeMove}
  }
)()

// =====================================
// ============= FACTORIES =============
// =====================================

const Player = (name, symbol) => {
  return {name, symbol}
}









