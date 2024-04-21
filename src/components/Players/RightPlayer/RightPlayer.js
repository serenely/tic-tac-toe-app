import TicTacToeStore from "../../../store/TicTacToeStore";
import Messanger from "../../Messanger/Messanger";
import TicTacToe from "../../TicTacToe/TicTacToe";
import { GameContainer, GameLabel, GameLabelText, RightPlayerContainer } from "./styles";

import { observer } from "mobx-react";

const RightPlayer = observer(() => {
  const { currentPlayer, winner, O, X, board, canMoveRight } = TicTacToeStore

  const gameLabel = () => {
    switch (winner) {
      case O:
        return <GameLabelText style={{ color: 'green' }}>You win!</GameLabelText>
      case X:
        return <GameLabelText style={{ color: 'red' }}>You lost!</GameLabelText>
      case 'Draw':
        return <GameLabelText style={{ color: '#ee9919' }}>Draw </GameLabelText>
      default:
        return currentPlayer === O ? 'Your turn:' : 'Wait your opponent.'
    }
  }

  return (
    <RightPlayerContainer>
      <GameContainer canMove={canMoveRight}>
        <GameLabel>
          <GameLabelText>
            {board.filter(el => el === null).length < 9 ? gameLabel() : 'Game started! Wait your opponent.'}
          </GameLabelText>
        </GameLabel>

        <TicTacToe /> 
      </GameContainer>

      <Messanger />
    </RightPlayerContainer>
  )
})

export default RightPlayer;