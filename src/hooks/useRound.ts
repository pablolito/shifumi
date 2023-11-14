import { useState } from "react";
import { Action, Round } from "../types/game";
import { getResult } from "../libs/game";

const useRound = () => {
    const [rounds, setRounds] = useState<Round[]>([])
    
    const onUserAction = (userAction: Action) => {
        const generateComputerAction = Math.floor(Math.random() * 3) + 1 as Action
        const result = getResult(userAction, generateComputerAction)
        setRounds([{userAction: userAction, computerAction: generateComputerAction, result: result }, ...rounds])
    }
    
    return {rounds, onUserAction}
}


export default useRound
