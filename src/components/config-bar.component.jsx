

import * as GAME from '../constants/game.constants';

export const ConfigBar = (props) => {

    const { config, setConfig } = props;


    return (
        <form>
            <label for="alive-color">Color for live tiles</label>
            <select name="alive-color" defaultValue={config.aliveColor} onChange={e => {
                setConfig({
                    ...config,
                    aliveColor: e.target.value,
                });
            }}>
                <option value="red">red </option>
                <option value='blue'>blue</option>
            </select>
            <label for="empty-color">Color for empty tiles</label>
            <select name="empty-color" defaultValue={config.emptyColor} onChange={e => {
                setConfig({
                    ...config,
                    emptyColor: e.target.value
                });
            }}>
                <option value="white">white</option>
                <option value="lightgrey">light grey</option>
                <option value="grey">grey</option>
            </select>

            <label for="game-speed">Game speed modifier</label>
            <select name="game-speed" defaultValue={config.frameSpeed} onChange={e => {
                setConfig({
                    ...config,
                    frameSpeed: e.target.value
                });
            }}>
                <option value={GAME.GAME_SPEED.SLOW}>0.5x</option>
                <option value={GAME.GAME_SPEED.NORMAL}>1x</option>
                <option value={GAME.GAME_SPEED.FAST}>2x</option>
            </select>
            <label for="grid-size">Game size</label>
            <select name="grid-size" defaultValue={GAME.GRID_SIZE.MEDIUM} onChange={e => {
                setConfig({
                    ...config,
                    gridSizeVh: e.target.value
                });
            }}
            >
                <option value={GAME.GRID_SIZE.SMALL}>Small</option>
                <option value={GAME.GRID_SIZE.MEDIUM}>Medium</option>
                <option value={GAME.GRID_SIZE.LARGE}>Large</option>
            </select>

        </form>
    );
}