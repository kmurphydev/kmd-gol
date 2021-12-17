
import { useState } from 'react';

import { GameBoard } from './game-board.component';

import * as GAME from '../constants/game.constants';

const configBarStyle = {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px'
}

const gameBoardContainerStyle = {
    padding: '10px',
}


//Game: handles game logic for overall game flow. possibly later will break into Game and GameLevel but not sure
export const Game = (props) => {
    const config = {
        aliveColor: 'blue',
        emptyColor: 'white',
        gridSizeVh: 50
    };

    const [gameState, setGameState] = useState(GAME.STATES.PAUSE);


    const renderButton = () => {

        if (gameState === GAME.STATES.PLAY) {

            return (
                <button
                    onClick={(e) => {
                        setGameState(GAME.STATES.PAUSE);
                    }}
                >
                    Pause
                </button>
            )


        } else if (gameState === GAME.STATES.PAUSE) {
            return (
                <button
                    onClick={e => {
                        setGameState(GAME.STATES.PLAY)
                    }}
                >
                    Play
                </button>
            )
        } else {
            return null;
        }

    }


    const boardSettings = {
        gridHeight: 20,
        gridWidth: 20
    }

    return (
        <div>
            <div style={configBarStyle} >
                <div>

                    Play, pause, config buttons will go here
                </div>
                <div>{
                    renderButton()
                }
                </div>
            </div>
            <div style={gameBoardContainerStyle}>
                <GameBoard
                    gameState={gameState}
                    setGameState={setGameState}
                    config={config} boardSettings={boardSettings} />
            </div>
        </div>
    );
};