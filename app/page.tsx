"use client";

import { useUserContext } from "./UserProvider";
import QuizList from "./quizList";
import UsernamePicker from "./usernamePicker";
import { notFound } from "next/navigation";

export default function Home() {
  const { username, quizCompleted } = useUserContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
       !username ? <UsernamePicker /> : 
       !quizCompleted ? <QuizList/> :
       notFound()
       
      }
    </main>
  );
}