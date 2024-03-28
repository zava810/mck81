import { Question, QuestionWithAnswer } from "./answer";

export interface IQuiz {
    id: number,
    title: string;
    questions: Question[]
}

export class QuizWithAnswer implements IQuiz {
    id: number;
    title: string;
    questions: QuestionWithAnswer[];

    constructor(
        id: number,
        title: string,
        questions: QuestionWithAnswer[]) {
        this.id = id;
        this.title = title;
        this.questions = questions
    }
}

export const quizzes: QuizWithAnswer[] = [
    {
        id: 1,
        title: "Astronomy",
        questions: [
            {
                guid: "02a87b19-9035-47d1-8d0e-9bd5f3e074e1",
                title: "Who was the first human to set foot on the moon?",
                validAnswer: "Neil Armstrong",
                answerAlpha: "Neil Armstrong",
                answerBeta: "Youri Gargarine"
            },
            {
                guid: "1b7c8693-4cfc-497b-9230-cb72a55a41dc",
                title: "What is the closest planet to the Sun?",
                validAnswer: "Mercury",
                answerAlpha: "Mercury",
                answerBeta: "Venus"
            },
            {
                guid: "2f682b5d-9e2e-4d96-af11-f65e697e73bc",
                title: "What is the largest planet in our solar system?",
                validAnswer: "Jupiter",
                answerAlpha: "Jupiter",
                answerBeta: "Saturn"
            },
            {
                guid: "3d9cb0c4-153f-4856-bf43-63fb08953c78",
                title: "What is the smallest planet in our solar system?",
                validAnswer: "Mercury",
                answerAlpha: "Mercury",
                answerBeta: "Pluto"
            },
            {
                guid: "4e3f251f-8a7e-4d29-ae25-5f18a4e9e9d1",
                title: "What is the name of the galaxy that contains the Solar System?",
                validAnswer: "Milky Way",
                answerAlpha: "Milky Way",
                answerBeta: "Andromeda"
            },
            {
                guid: "5c8ae201-888d-4e6b-9e5d-15df67cc727f",
                title: "What is the phenomenon where the moon passes between the sun and the earth?",
                validAnswer: "Solar eclipse",
                answerAlpha: "Solar eclipse",
                answerBeta: "Lunar eclipse"
            },
            {
                guid: "6d7a57a5-d78f-4c91-8bb5-3e9f35a87ff1",
                title: "Which planet is known as the Red Planet?",
                validAnswer: "Mars",
                answerAlpha: "Mars",
                answerBeta: "Venus",
                answerCharlie: "Saturn"
            },
            {
                guid: "7b2e5569-ba27-4a29-9e9d-ba588c49f744",
                title: "What is the name of the brightest star in the night sky?",
                validAnswer: "Sirius",
                answerAlpha: "Sirius",
                answerBeta: "Betelgeuse"
            },
            {
                guid: "8a4dc0a7-906a-4a49-94dc-9e201b0c9bb1",
                title: "What is the term for a group of stars forming a recognizable pattern?",
                validAnswer: "Constellation",
                answerAlpha: "Constellation",
                answerBeta: "Nebula"
            },
            {
                guid: "9e7cb98a-8642-4a2c-a7cb-7dade5a2f41f",
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
        questions: [
            {
                guid: "a32c6a14-b2cc-4f88-9f59-d50b43c2d13b",
                title: "What is the capital of Japan?",
                validAnswer: "Tokyo",
                answerAlpha: "Tokyo",
                answerBeta: "Beijing"
            },
            {
                guid: "b0e667dc-5d28-4b4a-89db-6934ed9c587e",
                title: "What is the capital of Brazil?",
                validAnswer: "Brasília",
                answerAlpha: "Brasília",
                answerBeta: "Buenos Aires"
            },
            {
                guid: "c6da61e2-6f8b-4ebc-8f97-97764b5d0ae7",
                title: "What is the capital of Australia?",
                validAnswer: "Canberra",
                answerAlpha: "Canberra",
                answerBeta: "Sydney"
            },
            {
                guid: "d0bfb7ed-dcb4-4bfb-8205-4095bfbc56f0",
                title: "What is the capital of Canada?",
                validAnswer: "Ottawa",
                answerAlpha: "Ottawa",
                answerBeta: "Toronto"
            },
            {
                guid: "e22e215b-cacf-4b25-bf3b-b7b9d25f4c57",
                title: "What is the capital of South Africa?",
                validAnswer: "Pretoria",
                answerAlpha: "Pretoria",
                answerBeta: "Cape Town"
            },
            {
                guid: "f6a2dd37-8a8f-4e46-8853-9e14b0bf471d",
                title: "What is the capital of Italy?",
                validAnswer: "Rome",
                answerAlpha: "Rome",
                answerBeta: "Milan"
            },
            {
                guid: "081bfa8d-0e07-4142-80d7-777f015784d4",
                title: "What is the capital of Russia?",
                validAnswer: "Moscow",
                answerAlpha: "Moscow",
                answerBeta: "Saint Petersburg"
            },
            {
                guid: "197f02ae-4b0c-44ae-9fd2-52e4d2967f59",
                title: "What is the capital of Egypt?",
                validAnswer: "Cairo",
                answerAlpha: "Cairo",
                answerBeta: "Alexandria"
            },
            {
                guid: "2a502df8-30e3-4a37-b949-f4c1d16542d5",
                title: "What is the capital of Argentina?",
                validAnswer: "Buenos Aires",
                answerAlpha: "Buenos Aires",
                answerBeta: "Santiago"
            },
            {
                guid: "3f8d693d-d06b-4e8d-91d2-94b776a77508",
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
        questions: [
            {
                guid: "4d87e32a-c0c3-46e8-99e4-ae29be2c07fc",
                title: "Who was the first President of the United States?",
                validAnswer: "George Washington",
                answerAlpha: "George Washington",
                answerBeta: "Thomas Jefferson"
            },
            {
                guid: "5a79c10d-c44b-4b8a-a66d-1c6d1db3a97b",
                title: "In which year did World War I begin?",
                validAnswer: "1914",
                answerAlpha: "1914",
                answerBeta: "1918"
            },
            {
                guid: "6c92e16b-11a1-4e16-9a7e-dbc21c5cdd52",
                title: "Who painted the Mona Lisa?",
                validAnswer: "Leonardo da Vinci",
                answerAlpha: "Leonardo da Vinci",
                answerBeta: "Pablo Picasso"
            },
            {
                guid: "7bcbcb56-9277-4fa3-8f8a-b28df9145cb7",
                title: "What event marked the end of the Middle Ages?",
                validAnswer: "The Fall of Constantinople",
                answerAlpha: "The Fall of Constantinople",
                answerBeta: "The Renaissance"
            },
            {
                guid: "8df07e8f-3729-4872-8289-9f2e2c927e6d",
                title: "Who was the first Emperor of Rome?",
                validAnswer: "Augustus",
                answerAlpha: "Augustus",
                answerBeta: "Julius Caesar"
            },
            {
                guid: "9db6569f-4720-4d65-8a0e-9379647e084d",
                title: "Which civilization built the Great Wall of China?",
                validAnswer: "Ancient China",
                answerAlpha: "Ancient China",
                answerBeta: "Ancient Egypt"
            },
            {
                guid: "afa75cb7-fb93-415e-af19-74e7c7f2b1df",
                title: "Who wrote 'The Communist Manifesto'?",
                validAnswer: "Karl Marx",
                answerAlpha: "Karl Marx",
                answerBeta: "Vladimir Lenin"
            },
            {
                guid: "bcc91562-dc56-4d53-9826-6c83573a1781",
                title: "Which war is also known as the Great War?",
                validAnswer: "World War I",
                answerAlpha: "World War I",
                answerBeta: "World War II"
            },
            {
                guid: "c9e9de51-2e11-4cf3-aa82-9ab1f8be45f2",
                title: "Who discovered America?",
                validAnswer: "Christopher Columbus",
                answerAlpha: "Christopher Columbus",
                answerBeta: "Amerigo Vespucci"
            },
            {
                guid: "d7b86e8b-7685-4572-8205-0255e4f7a4e6",
                title: "In which year did the French Revolution begin?",
                validAnswer: "1789",
                answerAlpha: "1789",
                answerBeta: "1791"
            }
        ]
    },
    {
        id: 4,
        title: "World History",
        questions: [
            {
                guid: "88b34237-e4d2-4f11-93bc-990f40cb0475",
                title: "Who was the first emperor of Rome?",
                validAnswer: "Augustus",
                answerAlpha: "Augustus",
                answerBeta: "Julius Caesar"
            },
            {
                guid: "9cd96cd2-1e9e-41ad-80f6-c5b3c204e024",
                title: "Which empire was ruled by King Hammurabi and known for its Code of Laws?",
                validAnswer: "Babylonian Empire",
                answerAlpha: "Babylonian Empire",
                answerBeta: "Assyrian Empire"
            },
            {
                guid: "7d0c17f3-c363-4cc3-a028-c0b0f94e50a4",
                title: "Who was the first female Prime Minister of the United Kingdom?",
                validAnswer: "Margaret Thatcher",
                answerAlpha: "Margaret Thatcher",
                answerBeta: "Queen Elizabeth I"
            },
            {
                guid: "5f36e39e-9334-448e-af15-5d77edbf9ec4",
                title: "What event marked the beginning of World War II?",
                validAnswer: "Invasion of Poland",
                answerAlpha: "Invasion of Poland",
                answerBeta: "Bombing of Pearl Harbor"
            },
            {
                guid: "c3a5bfc5-b2ec-41d7-936d-02ddc1aa4b51",
                title: "Who led the Bolshevik Revolution in Russia?",
                validAnswer: "Vladimir Lenin",
                answerAlpha: "Vladimir Lenin",
                answerBeta: "Joseph Stalin"
            },
            {
                guid: "803b44d7-c40f-4046-bc6f-af22c573bc4f",
                title: "What ancient civilization built the Great Pyramids of Giza?",
                validAnswer: "Ancient Egyptians",
                answerAlpha: "Ancient Egyptians",
                answerBeta: "Mesopotamians"
            },
            {
                guid: "a8a74b26-dedd-48a2-8492-3a1d13767c8a",
                title: "Who was the founder of the Mongol Empire?",
                validAnswer: "Genghis Khan",
                answerAlpha: "Genghis Khan",
                answerBeta: "Kublai Khan"
            },
            {
                guid: "e5d8885d-8c1a-4d51-b4a9-950625d9c4f7",
                title: "What was the name of the ship on which Charles Darwin sailed during his voyage?",
                validAnswer: "HMS Beagle",
                answerAlpha: "HMS Beagle",
                answerBeta: "Endeavour"
            }
        ]
    },
    {
        id: 5,
        title: "Literature",
        questions: [
            {
                guid: "3e6a5d9c-8863-4e8d-9aa7-aaad0b835ee3",
                title: "Who wrote the novel 'To Kill a Mockingbird'?",
                validAnswer: "Harper Lee",
                answerAlpha: "Harper Lee",
                answerBeta: "Mark Twain"
            },
            {
                guid: "ee14a9f4-5f9f-45a3-8ef4-55d9d60ed473",
                title: "Which Shakespearean play features the characters Romeo and Juliet?",
                validAnswer: "Romeo and Juliet",
                answerAlpha: "Romeo and Juliet",
                answerBeta: "Macbeth"
            },
            {
                guid: "b8f72fd1-1c67-4a09-924b-0ae3c7563b3e",
                title: "Who wrote the epic poem 'The Iliad'?",
                validAnswer: "Homer",
                answerAlpha: "Homer",
                answerBeta: "Virgil"
            },
            {
                guid: "2d0770f0-cb26-4e91-b4a1-f8a725848f0b",
                title: "Which novel by Jane Austen begins with the famous line 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife'?",
                validAnswer: "Pride and Prejudice",
                answerAlpha: "Pride and Prejudice",
                answerBeta: "Sense and Sensibility"
            },
            {
                guid: "2d96a0b1-2fb7-4a3b-8155-82eb49a36eb3",
                title: "Who is the author of '1984'?",
                validAnswer: "George Orwell",
                answerAlpha: "George Orwell",
                answerBeta: "Aldous Huxley"
            },
            {
                guid: "458f79b1-68cc-4f4b-8a9d-605ee2710b62",
                title: "What is the name of the fictional detective created by Sir Arthur Conan Doyle?",
                validAnswer: "Sherlock Holmes",
                answerAlpha: "Sherlock Holmes",
                answerBeta: "Hercule Poirot"
            },
            {
                guid: "3c0f3500-82a1-4cb4-8545-0fb60ff94b08",
                title: "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
                validAnswer: "A Tale of Two Cities",
                answerAlpha: "A Tale of Two Cities",
                answerBeta: "Great Expectations"
            },
            {
                guid: "43d3f065-6a2f-4e0a-af21-5aa6a2d4d193",
                title: "Who wrote 'The Great Gatsby'?",
                validAnswer: "F. Scott Fitzgerald",
                answerAlpha: "F. Scott Fitzgerald",
                answerBeta: "Ernest Hemingway"
            },
            {
                guid: "5939d745-cb21-4e0f-8de3-0ef953197c89",
                title: "Which novel features the character Huckleberry Finn?",
                validAnswer: "Adventures of Huckleberry Finn",
                answerAlpha: "Adventures of Huckleberry Finn",
                answerBeta: "Tom Sawyer"
            },
            {
                guid: "a2746b23-5e58-4cd8-9929-c8f8d571f8f0",
                title: "Who wrote the play 'Hamlet'?",
                validAnswer: "William Shakespeare",
                answerAlpha: "William Shakespeare",
                answerBeta: "Christopher Marlowe"
            }
        ]
    }
];