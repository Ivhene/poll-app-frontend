import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [componentVisibility, setComponentVisibility] = useState({
    createPoll: false,
    voteOnPoll: false,
    createUser: false,
  });

  function onNavbarClick(componentIdentifier: string) {
    switch (componentIdentifier) {
      case "poll":
        setComponentVisibility({
          createPoll: true,
          voteOnPoll: false,
          createUser: false,
        });
        break;
      case "vote":
        setComponentVisibility({
          createPoll: false,
          voteOnPoll: true,
          createUser: false,
        });
        break;
      case "user":
        setComponentVisibility({
          createPoll: false,
          voteOnPoll: false,
          createUser: true,
        });
        break;
      default:
        setComponentVisibility({
          createPoll: false,
          voteOnPoll: false,
          createUser: false,
        });
        break;
    }

    console.log(componentVisibility);
  }

  useEffect(() => {
    console.log(componentVisibility);
  }, [componentVisibility]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar setComponentVisibility={onNavbarClick} />
      <main className="flex-grow bg-red-50">Content</main>
    </div>
  );
}

export default App;
