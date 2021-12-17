
import './App.css';
import { Game } from './components/game.component';
// TODO:
// add header with:
//    start button
//    fields for grid size
//    dropdown for square size (small, med, large) which changes square width as a function of vw


const gameContainerStyle = {
  width: '75vw',
  alignItems: 'center',
  margin: 'auto',
  border: '1px solid lightgrey',
  borderRadius: '15px',
  padding: '15px'
}

function App() {


  // on pause: save gameState to localStorage and allow changing settings
  // on resume, rehydrate it and block off settings again


  return (
    <div className="App">
      <div>
        <h1>
          Game of Life Gaming
        </h1>
      </div>
      <div style={gameContainerStyle}>
        <Game />
      </div>
    </div>
  );
}

export default App;
