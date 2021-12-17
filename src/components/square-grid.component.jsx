import React from 'react';
import Square from './square.component';

import * as TILES from '../constants/tiles.constants';



const gridTableStyle = {
    border: '2px solid black',
    borderSpacing: '0px',
    margin: 'auto'
};

const gridRowStyle = {
    padding: '0px',
    margin: '0px',
};

const gridDataStyle = {
    padding: '0px',
    margin: '0px'
};



// SquareGrid: handles rendering a given board based on tiles and config supplied as props
const SquareGrid = (props) => {
    const {
        gridWidth = 20,
        gridHeight = 20,
        config = {
            aliveColor: 'blue',
            emptyColor: 'white',
            gridSizeVh: 50
        },
        tiles
    } = props;


    const squareSize = `${config.gridSizeVh / Math.max(gridWidth, gridHeight)}vh`;

    return (

        <table style={gridTableStyle}>
            <tbody>

                {tiles.map((cols, rowIdx) => {
                    return (
                        <tr key={rowIdx} style={gridRowStyle}>
                            {

                                cols.map((tile, colIdx) => {
                                    const color = tile === TILES.STATES.ALIVE ? config.aliveColor : config.emptyColor;
                                    return (
                                        <td style={gridDataStyle} key={gridWidth * rowIdx + colIdx}>
                                            <Square key={gridWidth * rowIdx + colIdx} color={color} squareSize={squareSize} />
                                        </td>
                                    )
                                })

                            }
                        </tr>
                    )
                })}

            </tbody>
        </table>

    );
}

export default SquareGrid;