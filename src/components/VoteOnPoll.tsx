import React, { useState } from "react";

interface PollOption {
  id: number;
  text: string;
}

export const VoteOnPoll: React.FC = () => {
  // Poll question and options
  const [question, setQuestion] = useState<string>(
    "What is your favorite color?"
  );
  const [options, setOptions] = useState<PollOption[]>([
    { id: 1, text: "Red" },
    { id: 2, text: "Green" },
    { id: 3, text: "Blue" },
  ]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Handle radio option selection
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(e.target.value));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedOption !== null) {
      console.log(`Selected option: ${selectedOption}`);
      // Here you could send the selected option to a server
    } else {
      console.log("No option selected");
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
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
            <label htmlFor={`option-${option.id}`}>{option.text}</label>
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
