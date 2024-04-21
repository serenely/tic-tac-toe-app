import { Background } from './AppStyles';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
  return (
    <Background>
      <Header/>
       <Players/>
    </Background>
  );
}

export default App;
