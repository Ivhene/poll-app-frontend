import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { CreatePoll } from "./components/CreatePoll";
import { VoteOnPoll } from "./components/VoteOnPoll";
import { CreateUser } from "./components/CreateUser";

function App() {
  const [componentVisibility, setComponentVisibility] = useState({
    createPoll: false,
    voteOnPoll: false,
  });
  const [user, setUser] = useState("");

  function loginUser(user: string) {
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
      <Navbar user={user} setComponentVisibility={onNavbarClick} />
      <main className="flex-grow bg-neutral-50 p-4">
        {user === "" && <CreateUser loginUser={loginUser} />}
        {user !== "" && componentVisibility.createPoll && <CreatePoll />}
        {user !== "" && componentVisibility.voteOnPoll && <VoteOnPoll />}
      </main>
    </div>
  );
}

export default App;
