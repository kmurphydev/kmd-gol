import React from 'react';


const Square = ({ on, 
squareSize = "20px" }) => {
    const style = {
        backgroundColor: on ? "red" : "blue",
        height: squareSize,
        width: squareSize
    }
    return (
        on ?
            <div style={style}>
                
            </div>

            :

            <div style={style}>
                
            </div>

    );
};

export default Square;