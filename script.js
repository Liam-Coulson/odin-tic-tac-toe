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
  () => {  
    this.currentTurn = 1;

    const setPlayers = (Player1, Player2) => {
      this.Player1 = Player1;
      this.Player2 = Player2;
    }

    // Called upon page load
    const startGame = () => {

    }
    
    const getCurrentPlayer = () => {
      if (currentTurn % 2 == 1) {
        return this.Player1;
      } else {
        return this.Player2;
      }
    }

    const updateHTML = () => {
      for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 2; col++) {
          let currentSpace = document.getElementById(`s${row}${col}`)
          currentSpace.textContent = GameBoard.board[row][col];
        }
      }
    }

    const checkForWin = () => {
      for (let row = 0; row < 2; row++){
        console.log(GameBoard.board);
        if (GameBoard.board[row][0] == GameBoard.board[row][1] && GameBoard.board[row][1] == GameBoard.board[row][2] && GameBoard.board[row][0] != "") {
          return GameBoard.board[row][0];
        }
      }
      for (let col = 0; col < 2; col++){
        if (GameBoard.board[0][col] == GameBoard.board[1][col] && GameBoard.board[1][col] == GameBoard.board[2][col] && GameBoard.board[0][col] != "") {
          return GameBoard.board[0][col];
        }
      }
      if (GameBoard.board[0][0] == GameBoard.board[1][1] && GameBoard.board[1][1] == GameBoard.board[2][2] && GameBoard.board[0][0] != "") {
        return GameBoard.board[0][0];
      }
      if (GameBoard.board[2][0] == GameBoard.board[1][1] && GameBoard.board[1][1] == GameBoard.board[0][2] && GameBoard.board[2][0] != "") {
        return GameBoard.board[2][0];
      }
    }

    const endGame = (winningSymbol) => {
      tictactoeContainer.removeEventListener("click", clickHandler);
      if (Player1.symbol == winningSymbol) {
        console.log(`The winner is ${Player1.name} using ${Player1.symbol}s`)
      } else {
        console.log(`The winner is ${Player2.name} using ${Player2.symbol}s`)
      }
    }
    
    // Called by click event on a space on the tictactoe board
    const makeMove = (space) => {
      GameBoard.markSpace(getCurrentPlayer(), space);
      currentTurn++;
      updateHTML();
      let winner = checkForWin();
      if (winner == "X" || winner == "O") {
        endGame(winner);
      }
    }
    
    return {makeMove, setPlayers}
  }
)()

// =====================================
// ============= FACTORIES =============
// =====================================

const Player = (name, symbol) => {
  return {name, symbol}
}

const Player1 = Player(prompt("Enter a name for player 1 (playing with X)"), "X")
const Player2 = Player(prompt("Enter a name for player 2 (playing with O)"), "O")

GameController.setPlayers(Player1, Player2);






