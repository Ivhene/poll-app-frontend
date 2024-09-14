import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the structure of the form data
interface FormData {
  question: string;
  validUntil: string;
  options: string[];
}

export const CreatePoll: React.FC = () => {
  // Form state
  const [question, setQuestion] = useState<string>("");
  const [validUntil, setValidUntil] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]); // Start with 2 empty options

  // Add a new option
  const addOption = (): void => {
    setOptions([...options, ""]);
  };

  // Handle option text change
  const handleOptionChange = (index: number, value: string): void => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Creating the final data structure
    const formData: FormData = {
      question,
      validUntil: new Date(validUntil).toISOString(), // Convert to ISO 8601 format
      options: options.filter((option) => option.trim() !== ""), // Filter out any empty options
    };

    console.log(JSON.stringify(formData, null, 2));

    // Here you would typically send `formData` to the server
  };

  // Handle input changes for question and validUntil
  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuestion(e.target.value);
  };

  const handleValidUntilChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValidUntil(e.target.value);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question:</label>
        <input
          className="p-2 text-sm border ml-2 rounded-md border-neutral-400"
          type="text"
          id="question"
          value={question}
          onChange={handleQuestionChange}
          required
        />
      </div>
      <div>
        <label htmlFor="validUntil">Valid Until (ISO 8601):</label>
        <input
          className="p-2 text-sm border ml-2 rounded-md border-neutral-400"
          type="datetime-local"
          id="validUntil"
          value={validUntil}
          onChange={handleValidUntilChange}
          required
        />
      </div>
      <div>
        <h3>Options</h3>
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <label>Option {index + 1}:</label>
            <input
              className="p-2 text-sm border ml-2 rounded-md border-neutral-400"
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
      </div>
      <button
        className="bg-neutral-100 border-neutral-200 border p-2 rounded-md mr-2"
        type="button"
        onClick={addOption}
      >
        Add Option
      </button>
      <button
        className="bg-neutral-100 border-neutral-200 border p-2 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
