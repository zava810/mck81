"use client";

import { useUserContext } from "./UserProvider";

export default function QuizList() {
  const { username } = useUserContext();

  return <div className="m-auto">Welcome {username}</div>;
}
