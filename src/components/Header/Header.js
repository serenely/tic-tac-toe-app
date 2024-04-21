import TicTacToeStore from "../../store/TicTacToeStore";
import { HeaderContainer, NameLabel, ResetButton, ScoreContainer } from "./styles";

import { observer } from "mobx-react";


const Header = observer(() => {
  const { leftWin, rightWin } = TicTacToeStore
  return (
    <HeaderContainer>
      <NameLabel>Player X </NameLabel>
      <ScoreContainer>
        Score:
        <> {leftWin}</> : <> {rightWin}</>
        <ResetButton onClick={TicTacToeStore.resetGame}>Reset</ResetButton>
      </ScoreContainer>
      <NameLabel>Player O</NameLabel>
    </HeaderContainer>
  )
})

export default Header;