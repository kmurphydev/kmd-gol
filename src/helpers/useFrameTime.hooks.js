import React from "react";

export const useFrameTime = (frameLength = 0) => {
    const [frameTime, setFrameTime] = React.useState(0);

    React.useEffect(() => {
        let frameId
        const frame = time => {

            // console.log(time - frameTime);
            if (time - frameTime > frameLength) {
                setFrameTime(time);
            }
            frameId = requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame);
        return () => cancelAnimationFrame(frameId);
    }, [frameTime]);
    return frameTime;
}