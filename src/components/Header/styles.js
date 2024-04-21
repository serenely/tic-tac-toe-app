import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 40px;
  width: 1720px;

  display: flex;
  align-items: center;
  justify-content:space-evenly ;

  color: white;

  border-bottom: 1px solid #424242;
`

export const NameLabel = styled.span`
  font-size: 21px;
  font-weight: 200;
`

export const ScoreContainer = styled.div`
  margin-left: 40px;
  font-size: 28px;
  `

const blinkAnimation = keyframes`
  0% {
    background-color: red;
  }
  20% {
    background-color: #ffffff; // Меняем цвет на белый на полпути анимации
  }
  100% {
    background-color: #02ad1a; // Возвращаем исходный цвет
  }
`;

export const ResetButton = styled.button`
  margin-left: 40px;
  width: 60px;
  height: 30px;

  background-color: #02ad1a;
  border-radius: 8px;
  border: none;
  color: white;

  cursor: pointer;

  transition: background-color 0.3s ease; // Плавное изменение цвета фона

  &:hover {
    background-color: #c9a455; // Новый цвет при наведении курсора
  }

`;