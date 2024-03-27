import { Question, QuestionWithAnswer } from "./answer";

export interface IQuiz {
    id: number,
    title: string;
    done: number;
    questions: Question[]
}

export class QuizWithAnswer implements IQuiz {
    id: number;
    title: string;
    done: number;
    questions: QuestionWithAnswer[];

    constructor(
        id: number,
        title: string,
        done: number,
        questions: QuestionWithAnswer[]) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.questions = questions
    }
}

export const quizzes: QuizWithAnswer[] = [
    {
        id: 1,
        title: "Astronomy",
        done: 0,
        questions: [
            {
                id: 1,
                title: "Who was the first human to set foot on the moon?",
                validAnswer: "Neil Armstrong",
                answerAlpha: "Neil Armstrong",
                answerBeta: "Youri Gargarine"
            },
            {
                id: 2,
                title: "What is the closest planet to the Sun?",
                validAnswer: "Mercury",
                answerAlpha: "Mercury",
                answerBeta: "Venus"
            },
            {
                id: 3,
                title: "What is the largest planet in our solar system?",
                validAnswer: "Jupiter",
                answerAlpha: "Jupiter",
                answerBeta: "Saturn"
            },
            {
                id: 4,
                title: "What is the smallest planet in our solar system?",
                validAnswer: "Mercury",
                answerAlpha: "Mercury",
                answerBeta: "Pluto"
            },
            {
                id: 5,
                title: "What is the name of the galaxy that contains the Solar System?",
                validAnswer: "Milky Way",
                answerAlpha: "Milky Way",
                answerBeta: "Andromeda"
            },
            {
                id: 6,
                title: "What is the phenomenon where the moon passes between the sun and the earth?",
                validAnswer: "Solar eclipse",
                answerAlpha: "Solar eclipse",
                answerBeta: "Lunar eclipse"
            },
            {
                id: 7,
                title: "Which planet is known as the Red Planet?",
                validAnswer: "Mars",
                answerAlpha: "Mars",
                answerBeta: "Venus",
                answerCharlie: "Saturn"
            },
            {
                id: 8,
                title: "What is the name of the brightest star in the night sky?",
                validAnswer: "Sirius",
                answerAlpha: "Sirius",
                answerBeta: "Betelgeuse"
            },
            {
                id: 9,
                title: "What is the term for a group of stars forming a recognizable pattern?",
                validAnswer: "Constellation",
                answerAlpha: "Constellation",
                answerBeta: "Nebula"
            },
            {
                id: 10,
                title: "What is the process by which a star converts hydrogen into helium?",
                validAnswer: "Nuclear fusion",
                answerAlpha: "Nuclear fusion",
                answerBeta: "Nuclear fission"
            }
        ]
    },
    {
        id: 2,
        title: "World Capitals",
        done: 0,
        questions: [
            {
                id: 11,
                title: "What is the capital of Japan?",
                validAnswer: "Tokyo",
                answerAlpha: "Tokyo",
                answerBeta: "Beijing"
            },
            {
                id: 12,
                title: "What is the capital of Brazil?",
                validAnswer: "Brasília",
                answerAlpha: "Brasília",
                answerBeta: "Buenos Aires"
            },
            {
                id: 13,
                title: "What is the capital of Australia?",
                validAnswer: "Canberra",
                answerAlpha: "Canberra",
                answerBeta: "Sydney"
            },
            {
                id: 14,
                title: "What is the capital of Canada?",
                validAnswer: "Ottawa",
                answerAlpha: "Ottawa",
                answerBeta: "Toronto"
            },
            {
                id: 15,
                title: "What is the capital of South Africa?",
                validAnswer: "Pretoria",
                answerAlpha: "Pretoria",
                answerBeta: "Cape Town"
            },
            {
                id: 16,
                title: "What is the capital of Italy?",
                validAnswer: "Rome",
                answerAlpha: "Rome",
                answerBeta: "Milan"
            },
            {
                id: 17,
                title: "What is the capital of Russia?",
                validAnswer: "Moscow",
                answerAlpha: "Moscow",
                answerBeta: "Saint Petersburg"
            },
            {
                id: 18,
                title: "What is the capital of Egypt?",
                validAnswer: "Cairo",
                answerAlpha: "Cairo",
                answerBeta: "Alexandria"
            },
            {
                id: 19,
                title: "What is the capital of Argentina?",
                validAnswer: "Buenos Aires",
                answerAlpha: "Buenos Aires",
                answerBeta: "Santiago"
            },
            {
                id: 20,
                title: "What is the capital of Germany?",
                validAnswer: "Berlin",
                answerAlpha: "Berlin",
                answerBeta: "Munich"
            }
        ]
    },
    {
        id: 3,
        title: "History",
        done: 0,
        questions: [
            {
                id: 21,
                title: "Who was the first President of the United States?",
                validAnswer: "George Washington",
                answerAlpha: "George Washington",
                answerBeta: "Thomas Jefferson"
            },
            {
                id: 22,
                title: "In which year did World War I begin?",
                validAnswer: "1914",
                answerAlpha: "1914",
                answerBeta: "1918"
            },
            {
                id: 23,
                title: "Who painted the Mona Lisa?",
                validAnswer: "Leonardo da Vinci",
                answerAlpha: "Leonardo da Vinci",
                answerBeta: "Pablo Picasso"
            },
            {
                id: 24,
                title: "What event marked the end of the Middle Ages?",
                validAnswer: "The Fall of Constantinople",
                answerAlpha: "The Fall of Constantinople",
                answerBeta: "The Renaissance"
            },
            {
                id: 25,
                title: "Who was the first Emperor of Rome?",
                validAnswer: "Augustus",
                answerAlpha: "Augustus",
                answerBeta: "Julius Caesar"
            },
            {
                id: 26,
                title: "Which civilization built the Great Wall of China?",
                validAnswer: "Ancient China",
                answerAlpha: "Ancient China",
                answerBeta: "Ancient Egypt"
            },
            {
                id: 27,
                title: "Who wrote 'The Communist Manifesto'?",
                validAnswer: "Karl Marx",
                answerAlpha: "Karl Marx",
                answerBeta: "Vladimir Lenin"
            },
            {
                id: 28,
                title: "Which war is also known as the Great War?",
                validAnswer: "World War I",
                answerAlpha: "World War I",
                answerBeta: "World War II"
            },
            {
                id: 29,
                title: "Who discovered America?",
                validAnswer: "Christopher Columbus",
                answerAlpha: "Christopher Columbus",
                answerBeta: "Amerigo Vespucci"
            },
            {
                id: 30,
                title: "In which year did the French Revolution begin?",
                validAnswer: "1789",
                answerAlpha: "1789",
                answerBeta: "1791"
            }
        ]
    }
];