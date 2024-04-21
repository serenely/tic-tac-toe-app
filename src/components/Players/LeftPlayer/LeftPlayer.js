import TicTacToeStore from "../../../store/TicTacToeStore";
import Messanger from "../../Messanger/Messanger";
import TicTacToe from "../../TicTacToe/TicTacToe";
import { GameContainer, GameLabel, GameLabelText, LeftPlayerContainer } from "./styles";

import { observer } from "mobx-react"

const LeftPlayer = observer(() => {
  const { currentPlayer, winner, O, X, board, canMoveLeft} = TicTacToeStore

  const gameLabel = () => {
    switch (winner) {
      case O:
        return <GameLabelText style={{color: 'red'}}>You lost!</GameLabelText>
      case X:
        return <GameLabelText style={{color: 'green'}}>You win!</GameLabelText>
      case 'Draw':
        return <GameLabelText style={{color: '#ee9919'}}>Draw </GameLabelText>
      default:
        return currentPlayer === X ? 'Your turn:' : 'Wait your opponent.'
    }
  }

  return (
    <LeftPlayerContainer>
      <GameContainer canMove={canMoveLeft}>
        <GameLabel>
          <GameLabelText>
          {board.filter(el => el===null).length < 9 ? gameLabel() : 'Game started! Yout turn.'}
          </GameLabelText>
        </GameLabel>
        
        <TicTacToe />
      </GameContainer>

      <Messanger />
    </LeftPlayerContainer>
  )
})

export default LeftPlayer;