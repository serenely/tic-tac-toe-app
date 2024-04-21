import { makeObservable, observable, action, computed } from 'mobx';

class TicTacToeStore {
  X = require('../assets/x.png');
  O = require('../assets/o.png');
  
  currentPlayer = this.X;
  board = Array(9).fill(null);
  winner = null;
  leftWin = 0;
  rightWin = 0;

  constructor() {
    makeObservable(this, {
      board: observable,
      currentPlayer: observable,
      winner: observable,
      leftWin: observable,
      rightWin: observable,
      makeMove: action,
      resetGame: action,
      checkWinner: action,
      whoWinner: action,
      canMoveLeft: computed,
      canMoveRight: computed,
    });
  }

  whoWinner = () => {
    if (this.winner === this.X) {
      this.leftWin++;
    } else if (this.winner === this.O) {
      this.rightWin++;
    }
  };

  togglePlayer = () => {
    this.currentPlayer = this.currentPlayer === this.X ? this.O : this.X;
  };

  makeMove = (i) => {
    if (!this.board[i] && !this.winner) {
      this.board[i] = this.currentPlayer;
      this.checkWinner();
      this.togglePlayer();
      this.whoWinner();
    }
  };

  checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        setTimeout(() => {
          this.resetGame(); 
        }, 5000);
        return;
      }
    }

    if (!this.board.includes(null)) {
      this.winner = 'Draw';
      setTimeout(() => {
        this.resetGame(); 
      }, 5000);
    }
  };

  resetGame = () => {
    this.board = Array(9).fill(null);
    this.currentPlayer = this.X;
    this.winner = null;
  };

  get canMoveLeft() {
    return this.currentPlayer === this.X;
  }

  get canMoveRight() {
    return this.currentPlayer === this.O;
  }
}

export default new TicTacToeStore();
