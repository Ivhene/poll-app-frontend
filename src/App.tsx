import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { CreatePoll } from "./components/CreatePoll";
import { VoteOnPoll } from "./components/VoteOnPoll";
import { CreateUser } from "./components/CreateUser";
import { User } from "./lib/types";

function App() {
  const [componentVisibility, setComponentVisibility] = useState({
    createPoll: false,
    voteOnPoll: false,
  });
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    votes: [],
    polls: [],
  });

  function loginUser(user: User) {
    setUser(user);
  }

  function onNavbarClick(componentIdentifier: string) {
    switch (componentIdentifier) {
      case "poll":
        setComponentVisibility({
          createPoll: true,
          voteOnPoll: false,
        });
        break;
      case "vote":
        setComponentVisibility({
          createPoll: false,
          voteOnPoll: true,
        });
        break;
      default:
        setComponentVisibility({
          createPoll: false,
          voteOnPoll: false,
        });
        break;
    }
  }

  useEffect(() => {
    console.log(componentVisibility);
  }, [componentVisibility]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar user={user.username} setComponentVisibility={onNavbarClick} />
      <main className="flex-grow bg-neutral-50 p-4">
        {user.username === "" && <CreateUser loginUser={loginUser} />}
        {user.username !== "" && componentVisibility.createPoll && (
          <CreatePoll user={user} />
        )}
        {user.username !== "" && componentVisibility.voteOnPoll && (
          <VoteOnPoll />
        )}
      </main>
    </div>
  );
}

export default App;
