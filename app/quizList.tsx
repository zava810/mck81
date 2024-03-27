"use client";

import axios from "axios";
import { useUserContext } from "./UserProvider";
import { useEffect, useState } from "react";
import { IQuiz } from "@/lib/quiz";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function QuizList() {
  const { username, setQuizSelected, quizzesCompletion } = useUserContext();

  const [quizzes, setQuizzes] = useState<IQuiz[]>();
  const [error, setError] = useState<boolean>(false);

  const handlSelectQuiz = (id: number) => {
    setQuizSelected(id)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ quizzes: IQuiz[] }>('/api/quiz');
        setQuizzes(response.data.quizzes);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);


  return <div className="m-auto">
    <h3 className="m-8 scroll-m-20 text-2xl font-semibold tracking-tight text-center">
      Hey {username}
    </h3>
    <div className="flex flex-col gap-2">
      {quizzes ? quizzes.map((quiz, index) => {
        return <Button variant="outline" key={index} onClick={() => handlSelectQuiz(quiz.id)}>
          {quiz.title} {quizzesCompletion[quiz.id] && <span className="mx-2 p-1 text-gray-600 dark:text-gray-400 text-xs border rounded">{quizzesCompletion[quiz.id]} %</span>}
        </Button>
      }) :
        Array(3).fill(null).map((_, index) => {
          return (
            <div key={index} className="w-full">
              <Skeleton className="h-6 w-full my-2" />
            </div>)
        })
      }
    </div>
  </div>;
}
