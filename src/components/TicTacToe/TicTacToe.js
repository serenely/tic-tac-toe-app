import React, { useEffect, useRef } from "react";
import TicTacToeStore from "../../store/TicTacToeStore";
import { TicTacToeButton, TicTacToeContainer, TicTacToeImg, TicTacToeText } from "./styles";
import { observer } from "mobx-react";

const TicTacToe = observer(() => {
  const { board } = TicTacToeStore;

  const handleButtonClick = (index) => {
    TicTacToeStore.makeMove(index);
  };

  return (
    <TicTacToeContainer>
      {board.map((value, index) => (
        <TicTacToeButton key={index} onClick={() => handleButtonClick(index)}>
          {value ? <TicTacToeImg src={value} /> : <TicTacToeText />}
        </TicTacToeButton>
      ))}
    </TicTacToeContainer>
  );
});

export default TicTacToe;
