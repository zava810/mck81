"use client";

import axios from "axios";
import { useUserContext } from "./UserProvider";
import { useEffect, useState } from "react";
import { IQuiz } from "@/lib/quiz";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function QuizDisplayer(props: { id: number }) {
    const { id } = props;

    const { setQuizSelected, addQuizScore } = useUserContext();

    const [quiz, setQuiz] = useState<IQuiz>();
    const [error, setError] = useState<boolean>(false);

    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [correctedAnswers, setCorrectedAnswers] = useState<Record<number, boolean>>()

    const calculatePercentage = (values: Record<number, boolean>, numberQuestion: number) => {
        var correct = 0;
        for (const key in values) {
            values[key] && correct++
        }

        return (correct / numberQuestion) * 100
    }

    const handleAnswerChange = (questionId: number, value: string) => {
        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: value
        }));
    };


    const handleSubmit = async () => {
        const fetchData = async () => {
            try {
                const response = await axios.post<Record<number, boolean>>(
                    `/api/quiz/${id}`,
                    { answers: selectedAnswers }
                );

                setCorrectedAnswers(response.data)


                if (quiz) {
                    const percentage = calculatePercentage(response.data, quiz.questions.length);
                    toast(`Your answers are correct at ${percentage} %`);

                    addQuizScore(quiz.id, percentage)
                }

            } catch (error) {
                setError(true);
            }
        };

        fetchData()
    };

    const handleGoBack = () => {
        setQuizSelected(undefined)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ quiz: IQuiz }>(`/api/quiz/${id}`);
                setQuiz(response.data.quiz)
            } catch (error) {
                setError(true);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            {quiz && <div>
                <h3 className="my-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                    <a onClick={handleGoBack} className="text-gray-600 dark:text-gray-400 cursor-pointer">Quizzes / </a>
                    {quiz.title}</h3>
                {quiz.questions.map((question, index) => (
                    <div key={index} className="mb-4">
                        <p className="font-semibold mb-1">{index + 1}. {question.title} {correctedAnswers && (correctedAnswers[question.id] ? <span className="text-green-500">✓</span> : <span className="text-red-500">⨯</span>)}</p>
                        <RadioGroup value={selectedAnswers[index]} onValueChange={(value: string) => handleAnswerChange(question.id, value)}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question.answerAlpha} id={`r1-${index}`} />
                                <Label htmlFor={`r1-${index}`}>{question.answerAlpha}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={question.answerBeta} id={`r2-${index}`} />
                                <Label htmlFor={`r2-${index}`}>{question.answerBeta}</Label>
                            </div>
                            {question.answerCharlie && (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={question.answerCharlie} id={`r3-${index}`} />
                                    <Label htmlFor={`r3-${index}`}>{question.answerCharlie}</Label>
                                </div>
                            )}
                            {question.answerDelta && (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={question.answerDelta} id={`r4-${index}`} />
                                    <Label htmlFor={`r4-${index}`}>{question.answerDelta}</Label>
                                </div>
                            )}
                        </RadioGroup>
                    </div>
                ))}</div>}
            {quiz && correctedAnswers && <p className="text-green-500">{`Your answers are correct at ${calculatePercentage(correctedAnswers, quiz.questions.length)} %`}</p>}
            <Button onClick={handleSubmit} className="w-full my-8">Submit</Button>
        </div>
    );
}