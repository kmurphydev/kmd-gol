import SquareGrid from "./square-grid.component";


// TODO: add app state to handle simulation of GOL
//  every frame (delay between frames depends on game speed config)
// todo:


// GameBoard: handles game logic and board state for a single board. passes board state down to SquareGrid to actually render the board
export const GameBoard = (props) => {

    const {
        config,
        boardSettings = {
            gridHeight: 20,
            gridWidth: 20,
        }
    } = props;


    const { gridHeight, gridWidth } = boardSettings;

    const tiles = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        tiles[i] = new Array(gridWidth);
        for (var j = 0; j < gridWidth; j++) {
            tiles[i][j] = Math.round(Math.random());
        }
    };


    return (
        <div>
            <SquareGrid tiles={tiles} config={config} gridWidth={gridWidth} gridHeight={gridHeight} />
        </div>
    );

};