
import './App.css';
import SquareGrid from './components/square-grid.component';

// TODO:
// add header with:
//    start button
//    fields for grid size
//    dropdown for square size (small, med, large) which changes square width as a function of vw


function App() {
  return (
    <div className="App">
      <SquareGrid/>
    </div>
  );
}

export default App;
