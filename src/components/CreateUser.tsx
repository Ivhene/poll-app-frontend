import React, { useState } from "react";
import { createUser } from "../lib/API";
import { User } from "../lib/types";

interface CreateUserProps {
  loginUser: (user: User) => void;
}

export const CreateUser = ({ loginUser }: CreateUserProps) => {
  // State to manage form inputs
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation (you can enhance this)
    if (!username || !email) {
      alert("Both fields are required");
      return;
    }

    // Create user object (this is where you could send data to a server)
    let newUser = {
      username: username,
      email: email,
      votes: [],
      polls: [],
    };

    newUser = await createUser(newUser);

    console.log("New user created:", newUser);
    loginUser(newUser);

    // Clear the form after submission
    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Create User</h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="p-2 text-sm border ml-2 rounded-md border-neutral-400"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="p-2 text-sm border ml-2 rounded-md border-neutral-400"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-neutral-100 border-neutral-200 border p-2 rounded-md"
          type="submit"
        >
          Create User
        </button>
      </form>
    </div>
  );
};
