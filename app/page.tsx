"use client";

import { useUserContext } from "@/components/providers/userProvider";
import QuizDisplayer from "@/components/pages/quizDisplayer";
import QuizList from "@/components/pages/quizList";
import UsernamePicker from "@/components/pages/usernamePicker";

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