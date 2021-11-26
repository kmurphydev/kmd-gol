import React from 'react';
import Square from './square.component';


// TODO:
// fix table styling so that the spacing between table elements doesn't change as you zoom in
// fix table stylign so that there is less of a (no?) gap between elements

// add app state, logic for handling next generation of GOL

const SquareGrid = (props) => {
    const {
        gridWidth = 10,
        gridHeight = 10,
        // squareSize = "40px"
        squareSize = "1vw"
    } = props;

    const rows = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        rows[i] = new Array(gridWidth);
        for (var j = 0; j < gridWidth; j++) {
            rows[i][j] = Math.round(Math.random());
        }
    }


    return (

        <table>
            <tbody>

                {rows.map((cols, rowIdx) => {
                    return (
                        <tr key={rowIdx}>
                            {

                                cols.map((tile, colIdx) => {
                                    return (
                                        <td>
                                            <Square key={gridWidth * rowIdx + colIdx} on={tile} squareSize={squareSize} />
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