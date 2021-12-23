

// updateTiles: given oldTiles and board settings, simulates the next frame of game of life
// IMPORTANT: updateTiles must return oldTiles if none of the values change, to allow for shallow array comparison
export const updateTiles = (oldTiles, boardSettings) => {

    //do simple logic for now, optimize algorithm later


    var changed = false;

    const { gridWidth, gridHeight } = boardSettings;

    const tiles = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        tiles[i] = new Array(gridWidth);
    };

    for (var i = 0; i < gridHeight; i++) {
        for (var j = 0; j < gridWidth; j++) {
            const sum = sumNeighbors(i, j, oldTiles, boardSettings);
            tiles[i][j] = sum === 3 || (sum === 4) * oldTiles[i][j];
            if (!changed && tiles[i][j] !== oldTiles[i][j]) changed = true;
        }
    };

    if (!changed) {
        return oldTiles;
    }
    else {
        return tiles;
    }

}

const sumNeighbors = (row, col, oldTiles, boardSettings) => {

    const { gridWidth, gridHeight } = boardSettings;

    let sum = 0;

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