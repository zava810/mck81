export class Question {
    id: number;
    title: string;
    answerAlpha: string;
    answerBeta: string;
    answerCharlie?: string;
    answerDelta?: string;

    constructor(
        id: number,
        title: string,
        answerAlpha: string,
        answerBeta: string,
        answerCharlie?: string,
        answerDelta?: string,
    ) {
        this.id = id;
        this.title = title;
        this.answerAlpha = answerAlpha;
        this.answerBeta = answerBeta;
        this.answerCharlie = answerCharlie;
        this.answerDelta = answerDelta;
    }
}

export class QuestionWithAnswer extends Question {
    validAnswer: string;

    constructor(
        id: number,
        title: string,
        validAnswer: string,
        answerAlpha: string,
        answerBeta: string,
        answerCharlie?: string,
        answerDelta?: string,
    ) {
        super(id, title, answerAlpha, answerBeta, answerCharlie, answerDelta)
        this.validAnswer = validAnswer
    }
}