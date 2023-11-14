import { Action, Result } from "../types/game";

export const cards = [
    {
        action: 1,
        name: "Pierre"
    },
    {
        action: 2,
        name: "Feuille"
    },
    {
        action: 3,
        name: "Ciseaux"
    }
]

export const getResult = (userAction: Action, computerAction: Action) => {
    const win = "WON";
    const loose = "LOST";
    const draw = "DRAW";
    switch (userAction) {
        case 1:
            if (computerAction === 3) {
                return win
            } else if (userAction === computerAction) {
                return draw
            } else {
                return loose
            }
        case 2:
            if (computerAction === 1) {
                return win
            } else if (userAction === computerAction) {
                return draw
            } else {
                return loose
            }
        case 3:
            if (computerAction === 2) {
                return win
            } else if (userAction === computerAction) {
                return draw
            } else {
                return loose
            }
        default:
            return null
    }
}

export const getHumanResult = (result: Result) => {
    if (result === "WON") {
        return "Gagné ! 🎉"
    } else if(result === "LOST") {
        return "Aïe, perdu ! 😭"
    } else {
        return "Egalité 😮‍💨"
    }
}