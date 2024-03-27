"use client";

import axios from "axios";
import { useUserContext } from "./UserProvider";
import { useEffect, useState } from "react";
import { IQuiz } from "@/lib/quiz";
import { Button } from "@/components/ui/button";

export default function QuizList() {
  const { username, setQuizSelected } = useUserContext();

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
      Welcome {username}
    </h3>
    <div className="flex flex-col gap-2">
      {quizzes && quizzes.map((quiz, index) => {
        return <Button variant="outline" key={index} onClick={() => handlSelectQuiz(quiz.id)}>
          {quiz.title}
        </Button>
      })}
    </div>
  </div>;
}
