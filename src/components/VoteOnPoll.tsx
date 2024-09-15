import React, { useState } from "react";
import { Poll, User, Vote } from "../lib/types";
import { castVote, generateId } from "../lib/API";

interface VoteOnPoll {
  poll: Poll;
  user: User;
}

export const VoteOnPoll = ({ poll, user }: VoteOnPoll) => {
  // Poll question and options
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Handle radio option selection
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption !== null) {
      console.log(`Selected option: ${selectedOption}`);

      let vote: Vote = {
        id: generateId(),
        publishedAt: new Date(Date.now()).toISOString().split(".")[0] + "Z",
        user: user,
        voteOption: poll.options.find(
          (option) => option.id === selectedOption
        ) ?? {
          id: "-1",
          caption: "",
          presentationOrder: -1,
          poll: null,
          votes: [],
        },
      };

      vote = await castVote(vote, poll.id);
    } else {
      console.log("No option selected");
    }
  };

  return (
    <div>
      <h2>{poll.question}</h2>
      <form onSubmit={handleSubmit}>
        {poll.options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              id={`option-${option.id}`}
              name="pollOption"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={handleOptionChange}
              required
            />
            <label htmlFor={`option-${option.id}`}>{option.caption}</label>
          </div>
        ))}
        <button
          type="submit"
          className="bg-neutral-100 border-neutral-200 border p-2 rounded-md mr-2"
        >
          Submit Vote
        </button>
      </form>
    </div>
  );
};
