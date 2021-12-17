
import { useState } from 'react';

import { GameBoard } from './game-board.component';

import * as GAME from '../constants/game.constants';

//Game: handles game logic for overall game flow. possibly later will break into Game and GameLevel but not sure
export const Game = (props) => {

    const { config } = props;

    const [gameState, setGameState] = useState(GAME.STATES.PAUSE);

    const boardSettings = {
        gridHeight: 20,
        gridWidth: 20
    }

    return (
        <div>
            <div>
                Play, pause buttons will go here
            </div>
            <div>
                <GameBoard
                    gameState={gameState}
                    setGameState={setGameState}
                    config={config} boardSettings={boardSettings} />
            </div>
        </div>
    );
};