// =====================================
// =============== IIFEs ===============
// =====================================

const GameBoard = (
  () => {
    this.board = [];

    const markSpace = (Player, space) => {
      board[space] = Player.symbol;
    }

    return {board};
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
    

  }
)()

// =====================================
// ============= FACTORIES =============
// =====================================

const Player = (name, symbol) => {
  return {name, symbol}
}









