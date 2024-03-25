"use client";

import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  username?: string;
  setUsername: (username: string) => void;
  quizCompleted: boolean;
}

const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [username, setUsername] = useState<string>();
  const [quizCompleted] = useState<boolean>(false);

  const value = { username, setUsername, quizCompleted };

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
