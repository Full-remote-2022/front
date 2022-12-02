
export interface Answer {
    questionID: number,
    answerID: number,
    answerText: string,
}

export interface Question {
    questionID: number,
    questionText: string,
    answers: Answer[],
}

export interface Card {
    cardText: string,
    cardTitle: string,
    cardImage: string,
    cardExpirationDate: Date,
    cardRarity: Rarity,
}

export enum Rarity {
    Common = "common",
    Uncommon = "uncommon",
    Rare = "rare",
    Epic = "epic",
    Legendary = "legendary",
}

export interface Theme {
    nomTheme : string,
    nombreQuestions : number,
}