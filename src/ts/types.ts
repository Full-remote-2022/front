
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