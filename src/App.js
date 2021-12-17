
import './App.css';
import { Game } from './components/game.component';
// TODO:
// add header with:
//    start button
//    fields for grid size
//    dropdown for square size (small, med, large) which changes square width as a function of vw


function App() {

  const config = {
    aliveColor: 'blue',
    emptyColor: 'white',
    gridSizeVh: 50
  };
  // on pause: save gameState to localStorage and allow changing settings
  // on resume, rehydrate it and block off settings again


  return (
    <div className="App">
      <Game config={config} />
    </div>
  );
}

export default App;
