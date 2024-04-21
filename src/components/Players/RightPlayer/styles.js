import styled from 'styled-components'

export const RightPlayerContainer = styled.div`
  width: 50%;
  height: 900px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #424242;
`

export const GameContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;

  pointer-events: ${props => props.canMove ? 'auto' : 'none'};
`

export const GameLabel = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GameLabelText = styled.span`
  font-size: 35px;
`