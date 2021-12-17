import SquareGrid from "./square-grid.component";
import { useEffect, useState } from "react";
import { generateTiles } from "../helpers/generateTiles";
import { updateTiles } from "../helpers/updateTiles";

import * as GAME from '../constants/game.constants';

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

    const { time } = props;

    const { gameState } = props;

    const [tiles, setTiles] = useState([]);

    const { gridHeight, gridWidth } = boardSettings;

    useEffect(() => {
        if (tiles.length === 0) {
            const newTiles = generateTiles(boardSettings);
            setTiles(newTiles);
        }
        else if (gameState === GAME.STATES.PLAY) {
            const newTiles = updateTiles(tiles, boardSettings);
            setTiles(newTiles);
        }
    }, [time])

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