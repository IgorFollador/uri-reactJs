import ScoreRow from "./components/ScoreRow";

export default function HighScoreTable({scores}) {
    return (
        <>
            <div className="score">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Jogador</th>
                            <th>Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Utiliza Map para chamar uma row para cada score */}
                        {scores.map((score, index) => <ScoreRow key={score.id} score={score} index={index}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}