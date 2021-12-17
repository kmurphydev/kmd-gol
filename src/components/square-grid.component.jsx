import React from 'react';
import Square from './square.component';


// TODO:
// fix table styling so that the spacing between table elements doesn't change as you zoom in
// fix table stylign so that there is less of a (no?) gap between elements

// add app state, logic for handling next generation of GOL

const gridTableStyle = {
    border: '2px solid black',
    borderSpacing: '0px',
};

const gridRowStyle = {
    padding: '0px',
    margin: '0px',
};

const gridDataStyle = {
    padding: '0px',
    margin: '0px'
};

const gridSize = 50; //% of vh

const SquareGrid = (props) => {
    const {
        gridWidth = 20,
        gridHeight = 20,
        // squareSize = "40px"
        // squareSize = "3vw"
    } = props;


    const squareSize = `${gridSize / Math.max(gridWidth, gridHeight)}vh`;

    const rows = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        rows[i] = new Array(gridWidth);
        for (var j = 0; j < gridWidth; j++) {
            rows[i][j] = Math.round(Math.random());
        }
    }


    return (

        <table style={gridTableStyle}>
            <tbody>

                {rows.map((cols, rowIdx) => {
                    return (
                        <tr key={rowIdx} style={gridRowStyle}>
                            {

                                cols.map((tile, colIdx) => {
                                    return (
                                        <td style={gridDataStyle}>
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