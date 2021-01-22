import "../css/Chessboard.css";
import Tile from './Tile';

export default function ChessBoard() {
    const board = [];

    for (let i = 0; i < 8; i++) {
        let elems = []

        for (let j = 0; j < 8; j++) {
            if ((j % 2 === 0 && i % 2 === 0) || (i + j) % 2 === 0) {
                console.log(i, j)
                elems.push(<Tile />)
            }
            else
                elems.push(<Tile dark />)
        }
        board.push(<div className="row">
            {elems}
        </div>);
    }

    return (
        <div className="chessboard">
            {board}
        </div>
    );
}