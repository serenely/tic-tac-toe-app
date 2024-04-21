import LeftPlayer from "./LeftPlayer/LeftPlayer";
import RightPlayer from "./RightPlayer/RightPlayer";
import { PlayersContainer } from "./styles";

const Players = () => {
  return (
    <PlayersContainer>
      <LeftPlayer />
      <RightPlayer />
    </PlayersContainer>
  )
}

export default Players;