import React, { useEffect, useState } from "react";
import Score from "./components/Score";
import ResultRound from "./components/ResultRound";
import { cards } from "./libs/game";
import Card, { CardI } from "./components/Card";
import useRound from "./hooks/useRound";

function App() {
    const { rounds, onUserAction } = useRound();
    const [score, setScore] = useState([0, 0]);
    useEffect(() => {
        if (rounds.length > 0) {
            const lastUserResult = rounds[0].result;
            setScore([
                lastUserResult === "WON" ? score[0] + 1 : score[0],
                lastUserResult === "LOST" ? score[1] + 1 : score[1],
            ]);
        }
    }, [rounds]);
    return (
        <div className="bg-slate-700 p-6 h-screen flex flex-col justify-between">
            <div>
                <header className="mb-3">
                    <h1 className="text-white text-center text-3xl">
                        Shifumi App
                    </h1>
                </header>
                <Score score={score} />
            </div>

            {rounds.length > 0 && (
                <ResultRound nbRound={rounds.length} {...rounds[0]} />
            )}
            <div className="flex justify-center mt-12">
                {(cards as CardI[]).map((card, i) => (
                    <Card key={i} {...card} onUserAction={onUserAction} />
                ))}
            </div>
        </div>
    );
}

export default App;
