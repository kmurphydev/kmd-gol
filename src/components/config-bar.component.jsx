



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
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={2}>2x</option>
            </select>

        </form>
    );
}