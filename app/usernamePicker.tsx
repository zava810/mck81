"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usernames } from "@/lib/username";
import { useState } from "react";
import { toast } from "sonner";
import { useUserContext } from "./UserProvider";

export default function UsernamePicker() {
  const { setUsername } = useUserContext();

  const [currentUsername, setCurrentUsername] = useState<string>("");

  const handleChangeUsername = (event: any) => {
    setCurrentUsername(event.target.value);
  };

  const generateUsername = () => {
    const newUsername = usernames[Math.floor(Math.random() * usernames.length)];
    setCurrentUsername(newUsername);
  };

  const handleSubmit = () => {
    if (currentUsername.trim().length > 0) {
      setUsername(currentUsername);
    } else {
      toast("Chose an username", {
        action: {
          label: "Generate",
          onClick: generateUsername,
        },
      });
    }
  };

  return (
    <div className="m-auto">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Username"
          value={currentUsername}
          onChange={handleChangeUsername}
        />
        <Button type="submit" onClick={handleSubmit}>
          Enter
        </Button>
      </div>
    </div>
  );
}
