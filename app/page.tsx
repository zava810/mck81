"use client";

import { useUserContext } from "./UserProvider";
import QuizDisplayer from "./quizDisplayer";
import QuizList from "./quizList";
import UsernamePicker from "./usernamePicker";

export default function Home() {
  const { username, quizSelected } = useUserContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        !username ? <UsernamePicker /> :
          !quizSelected ? <QuizList /> :
            <QuizDisplayer id={quizSelected} />

      }
    </main>
  );
}