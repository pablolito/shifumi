export type Action = 1 | 2 | 3

export type Result = "WON" | "LOST" | "DRAW"

export interface Round {
    userAction: Action;
    computerAction: Action;
    result: Result | null
}