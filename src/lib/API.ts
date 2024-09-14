import { Poll, User } from "./types";

// Function to create a user by making a POST request
export async function createUser(user: User) {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), // Send the user object as JSON in the body
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}

// Function to create a user by making a POST request
export async function createPoll(poll: Poll) {
  const response = await fetch("http://localhost:8080/polls", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(poll), // Send the user object as JSON in the body
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};
