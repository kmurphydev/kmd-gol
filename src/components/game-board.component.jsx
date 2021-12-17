import SquareGrid from "./square-grid.component";
import { useEffect, useState } from "react";
import { generateTiles } from "../helpers/generateTiles";
import { updateTiles } from "../helpers/updateTiles";

import * as GAME from '../constants/game.constants';

// TODO: add app state to handle simulation of GOL
//  every frame (delay between frames depends on game speed config)
// todo:


// BUG... OR FEATURE? : pausing only stops the game on the next frame 

// GameBoard: handles game logic and board state for a single board. passes board state down to SquareGrid to actually render the board
export const GameBoard = (props) => {

    const {
        config,
        boardSettings = {
            gridHeight: 20,
            gridWidth: 20,
        }
    } = props;

    const { frameTime } = config;

    const { gameState } = props;

    const [tiles, setTiles] = useState([]);

    const { gridHeight, gridWidth } = boardSettings;

    useEffect(() => {
        if (tiles === []) {
            const newTiles = generateTiles(boardSettings);
            setTiles(newTiles);
        }
        else if (gameState === GAME.STATES.PLAY) {
            const newTiles = updateTiles(tiles, boardSettings);
            setTimeout(() => {
                //check after the timer if the gamestate is still in play
                if (gameState === GAME.STATES.PLAY) {
                    setTiles(newTiles);
                }
            }, frameTime);
        }
    }, [tiles, gameState])


    if (tiles === []) {
        return null;
    } else {
        return (
            <div>
                <SquareGrid tiles={tiles} config={config} gridWidth={gridWidth} gridHeight={gridHeight} />
            </div>
        );
    }

};