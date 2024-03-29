"use client";

import axios from "axios";
import { useUserContext } from "@/components/providers/userProvider";
import React, { useEffect, useState } from "react";
import { IQuiz } from "@/lib/quiz";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { HomeIcon, PaperPlaneIcon } from "@radix-ui/react-icons"

export default function QuizDisplayer(props: { id: number }) {
    const { id } = props;

    const { setQuizSelected, addQuizScore } = useUserContext();

    const [quiz, setQuiz] = useState<IQuiz>();
    const [error, setError] = useState<boolean>(false);

    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [correctedAnswers, setCorrectedAnswers] = useState<Record<string, boolean>>()

    const calculatePercentage = (values: Record<number, boolean>, numberQuestion: number) => {
        var correct = 0;
        for (const key in values) {
            values[key] && correct++
        }

        return (correct / numberQuestion) * 100
    }

    const handleAnswerChange = (questionId: string, value: string) => {
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


    return (quiz ?

        <div>
            <h3 className="my-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                <Button onClick={handleGoBack} className="text-gray-600 dark:text-gray-400 cursor-pointer" variant="outline"><HomeIcon /> </Button>
                {" "}/ {quiz.title}</h3>
            {quiz.questions.map((question, index) => (
                <div key={index} className="mb-4">
                    <p className="font-semibold mb-1">{index + 1}. {question.title} {correctedAnswers && (correctedAnswers[question.guid] ? <span className="text-green-500">✓</span> : <span className="text-red-500">⨯</span>)}</p>
                    <RadioGroup value={selectedAnswers[index]} onValueChange={(value: string) => handleAnswerChange(question.guid, value)}>
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
            ))}
            {correctedAnswers && <p className="text-green-500">{`Your answers are correct at ${calculatePercentage(correctedAnswers, quiz.questions.length)} %`}</p>}
            <Button onClick={handleSubmit} className="w-full my-8">Submit <PaperPlaneIcon className="ml-2 h-4 w-4" /></Button>
        </div>

        :
        <div className="flex flex-col space-x-4 w-full">
            <Skeleton className="h-12 w-full my-8" />
            {
                Array(10).fill(null).map((_, index) => {
                    return (
                        <div key={index} className="mb-2 w-full">
                            <Skeleton className="h-6 w-3/4 my-2" />
                            <Skeleton className="h-4 w-3/5 my-1" />
                            <Skeleton className="h-4 w-3/5 my-1" />
                        </div>
                    )
                })
            }
        </div>


    );
}