import { useEffect, useState } from "react";
import HighScoreTable from "../HighScoreTable"
import RegisterHighScore from "../RegisterHighScore/RegisterHighScore"

export default function GameInfo() {
    // Scores sera utilizado para renderizar as informacoes
    const [scores, setScore] = useState([]);
    
    const fetchScores = () => {
        const fetchScores = async () => {
            const serverScores = await (
                await fetch('http://localhost:3008/scores', { 
                    headers: {
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Origin":"*"
                    }
                })
            ).json();
            console.log(serverScores);
            setScore(serverScores);
        }

        fetchScores();
    }

    useEffect(fetchScores, [scores.length]);
    // Mock Data
    // const scores = [
    //     { 
    //         "id": 1,
    //         "userName": "Emerson",
    //         "score": 9900
    //     },
    //     { 
    //         "id": 2,
    //         "userName": "Igor",
    //         "score": 11000
    //     },
    //     { 
    //         "id": 3,
    //         "userName": "Jaisson",
    //         "score": 11002
    //     }
    // ]

    return (
        <>
            <div>
                <h2>Lista de melhores pontuações do Jogo Super Mario World</h2>
                <p>Jogo de aventura de plataforma onde um encanador bate com a cabeça em blocos de tijolo, amassa cogumelos castanhos e se pendura em um poste para içar bandeira para passar de fase</p>
            </div>
            <HighScoreTable scores={scores} />
            {/* <RegisterHighScore fetchScores={fetchScores} /> */}
        </>
    )
}