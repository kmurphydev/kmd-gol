import * as TILES from '../constants/tiles.constants.js';

// updateTiles: given oldTiles and board settings, simulates the next frame of game of life
// IMPORTANT: updateTiles must return oldTiles if none of the values change, to allow for shallow array comparison
export const updateTiles = (oldTiles, boardSettings) => {

    //do simple logic for now, optimize algorithm later


    var changed = false;

    const { gridWidth, gridHeight } = boardSettings;

    const tiles = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        tiles[i] = new Array(gridWidth);
        for (var j = 0; j < gridWidth; j++) {
            const sum = sumNeighbors(i, j, oldTiles, boardSettings);
            const oldTile = oldTiles[i][j];
            if (sum === 4) tiles[i][j] = oldTile;
            else {
                const newTile = (sum === 3) * TILES.STATES.ALIVE;
                tiles[i][j] = newTile;
                if (!changed && newTile !== oldTile) changed = true;

            }
        };
    };

    if (!changed) {
        console.log('unchanged')
        return oldTiles;
    }
    else {
        return tiles;
    }

}

const sumNeighbors = (row, col, oldTiles, boardSettings) => {

    const { gridWidth, gridHeight } = boardSettings;

    let sum = 0;

    // let minRow = row - 1;
    // if (minRow < 0) minRow = gridHeight - 1;
    // let maxRow = row + 1;
    // if (maxRow > gridHeight - 1) maxRow = 0;
    // let minCol = col - 1;
    // if (minCol < 0) minCol = gridWidth - 1;
    // let maxCol = col + 1;
    // if (maxCol > gridWidth - 1) maxCol = 0;

    // sum += oldTiles[minRow][minCol];
    // sum += oldTiles[minRow][col];
    // sum += oldTiles[minRow][maxCol];
    // sum+= oldTiles[row][minCol];
    // sum += oldTiles[row][col];
    // sum+= oldTiles[row][maxCol];
    // sum+= oldTiles[maxRow][minCol];
    // sum+= oldTiles[maxRow][minCol];

    let rows = new Array(3);
    let cols = new Array(3);

    rows[1] = row;
    //wrap

    if (row > 0) {
        rows[0] = row - 1;
    } else {
        rows[0] = gridHeight - 1;
    }

    if (row < gridHeight - 1) {
        rows[2] = row + 1;
    } else {
        rows[2] = 0;
    }

    cols[1] = col;

    if (col > 0) {
        cols[0] = col - 1;
    } else {
        cols[0] = gridWidth - 1;
    }

    if (col < gridWidth - 1) {
        cols[2] = col + 1;
    } else {
        cols[2] = 0;
    }

    rows.forEach(i => {
        cols.forEach(j => {
            sum += oldTiles[i][j];
        })
    })

    return sum;
}