import { Action } from "../types/game";
import ShifumiPicto from "./ShifumiPicto";

export interface CardI {
    action: Action;
    name: string;
}

function Card({
    action,
    name,
    onUserAction,
}: CardI & { onUserAction: (action: Action) => void }) {
    return (
        <div className="mr-6">
            <button
                onClick={() => onUserAction(action)}
                className="text-center rounded-md bg-white text-black text-2xl p-6"
            >
                <ShifumiPicto action={action} />
                {name}
            </button>
        </div>
    );
}

export default Card;
