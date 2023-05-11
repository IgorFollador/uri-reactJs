export default function ScoreRow({score, index}) {
return (
    <>
        <tr>
            <td>{index+1}°</td>
            <td>{score.userName}</td>
            <td>{score.score}</td>
        </tr>
    </>
)}