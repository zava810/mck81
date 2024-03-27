export class Question {
    guid: string;
    title: string;
    answerAlpha: string;
    answerBeta: string;
    answerCharlie?: string;
    answerDelta?: string;

    constructor(
        guid: string,
        title: string,
        answerAlpha: string,
        answerBeta: string,
        answerCharlie?: string,
        answerDelta?: string,
    ) {
        this.guid = guid;
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
        guid: string,
        title: string,
        validAnswer: string,
        answerAlpha: string,
        answerBeta: string,
        answerCharlie?: string,
        answerDelta?: string,
    ) {
        super(guid, title, answerAlpha, answerBeta, answerCharlie, answerDelta)
        this.validAnswer = validAnswer
    }
}