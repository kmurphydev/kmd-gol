import React from 'react';

// Square: an individual square component to be rendered
const Square = ({ color,
    squareSize = "20px" }) => {

    const style = {
        backgroundColor: color,
        height: squareSize,
        width: squareSize
    };

    return (
        <div style={style} />

    );

};

export default Square;