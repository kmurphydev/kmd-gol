

// updateTiles: given oldTiles and board settings, simulates the next frame of game of life
export const updateTiles = (oldTiles, boardSettings) => {

    //placeholder logic copied from generateTiles.js

    const { gridWidth, gridHeight } = boardSettings;

    const tiles = new Array(gridHeight);
    for (var i = 0; i < gridHeight; i++) {
        tiles[i] = new Array(gridWidth);
        for (var j = 0; j < gridWidth; j++) {
            tiles[i][j] = Math.round(Math.random());
        }
    };

    return tiles;

}