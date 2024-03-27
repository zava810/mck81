"use client";

import { useUserContext } from "./UserProvider";
import QuizDisplayer from "./quizDisplayer";
import QuizList from "./quizList";
import UsernamePicker from "./usernamePicker";
import { notFound } from "next/navigation";

export default function Home() {
  const { username, quizCompleted, quizSelected } = useUserContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        !username ? <UsernamePicker /> :
          !quizSelected ? <QuizList /> :
            !quizCompleted ? <QuizDisplayer id={quizSelected} /> :
              notFound()

      }
    </main>
  );
}