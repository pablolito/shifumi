import { getHumanResult } from "../libs/game";
import { Action, Round } from "../types/game";
import { FaHandRock, FaLeaf, FaHandScissors } from "react-icons/fa";

function ResultRound({
    userAction,
    computerAction,
    result,
    nbRound,
}: Round & { nbRound: number }) {
    const getIcon = (action: Action) => {
        switch (action) {
            case 1:
                return <FaHandRock className="m-auto" />;
            case 2:
                return <FaLeaf className="m-auto" />;
            case 3:
                return <FaHandScissors className="m-auto" />;
            default:
                return null;
        }
    };
    return (
        <div className="flex justify-center text-white">
            <div className="border p-6 text-center">
                <h2 className="text-2xl mb-3">ROUND {nbRound}</h2>
                <div className="flex justify-center text-2xl mb-3">
                    <div className="p-2">Joueur {getIcon(userAction)}</div>
                    <div className="p-2">|</div>
                    <div className="p-2">
                        Ordinateur {getIcon(computerAction)}
                    </div>
                </div>
                {result && (
                    <p className="text-4xl font-bold">
                        {getHumanResult(result)}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ResultRound;
