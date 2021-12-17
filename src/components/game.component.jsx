
import { GameBoard } from './game-board.component';

//Game: handles game logic for overall game flow. possibly later will break into Game and GameLevel but not sure
export const Game = (props) => {

    const { config } = props;

    const boardSettings = {
        gridHeight: 20,
        gridWidth: 20
    }

    return (
        <div>
            <GameBoard config={config} boardSettings={boardSettings} />
        </div>
    );
};