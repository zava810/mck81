"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  username?: string;
  setUsername: (username: string) => void;
  quizSelected: number | undefined;
  setQuizSelected: (quizId: number | undefined) => void;
  quizzesCompletion: Record<number, number>;
  addQuizScore: (quizId: number, score: number) => void;
  clearData: () => void
}

const UserContext = createContext<UserContextType | null>(null);

const LOCAL_STORAGE_USERNAME = "username"
const LOCAL_STORAGE_QUIZZES = "quizzes"

const LOCAL_STORAGE_DATA = [LOCAL_STORAGE_USERNAME, LOCAL_STORAGE_QUIZZES]

const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [quizSelected, setQuizSelected] = useState<number>()
  const [quizzesCompletion, setQuizzesCompletion] = useState<Record<number, number>>(() => {
    if (typeof window !== "undefined") {
      const storedQuizzes = localStorage.getItem(LOCAL_STORAGE_QUIZZES);
      return storedQuizzes ? JSON.parse(storedQuizzes) : {};
    }
    return {}
  })

  const [username, setUsername] = useState<string | undefined>(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem(LOCAL_STORAGE_USERNAME);
      return storedUsername ? JSON.parse(storedUsername) : undefined;
    }
    return undefined
  });

  const addQuizScore = (quizId: number, score: number) => {

    const quizzes = {
      ...quizzesCompletion,
      [quizId]: score,
    }

    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_QUIZZES, JSON.stringify(quizzes));
    }

    setQuizzesCompletion(quizzes);
  }

  const clearData = () => {
    if (typeof window !== "undefined")
      LOCAL_STORAGE_DATA.forEach((data) => {
        localStorage.removeItem(data)
      })

    setQuizzesCompletion({})
    setUsername("")
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (username) {
        localStorage.setItem(LOCAL_STORAGE_USERNAME, JSON.stringify(username));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_USERNAME);
      }
    }
  }, [username]);

  const value = { username, setUsername, quizSelected, setQuizSelected, quizzesCompletion, addQuizScore, clearData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("UserContext not found");
  }

  return context as UserContextType;
};

export default UserContextProvider;
