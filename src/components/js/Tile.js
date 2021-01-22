import '../css/Tile.css';

export default function Tile(props) {
    return (
        <div className="tile" style={{ ...props.style, backgroundColor: props.dark ? "black" : "gray" }}></div>
    );
}