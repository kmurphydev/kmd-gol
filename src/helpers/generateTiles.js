

export const generateTiles = (boardSettings) => {

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