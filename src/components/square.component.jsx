import React from 'react';


const Square = ({ color,
    squareSize = "20px" }) => {
    const style = {
        backgroundColor: color,
        height: squareSize,
        width: squareSize
    }
    return (
        <div style={style} />





    );
};

export default Square;