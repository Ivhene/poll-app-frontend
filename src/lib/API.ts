import { Poll, User, Vote } from "./types";

// const url = "http://localhost:8080"; // during coding
const url = ""; // in build

// Function to create a user by making a POST request
export async function createUser(user: User) {
  const response = await fetch(`${url}/users`, {
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

// Function to get all polls
export async function getPolls() {
  const response = await fetch(`${url}/polls`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return await response.json();
}

// Function to create a user by making a POST request
export async function createPoll(poll: Poll) {
  const response = await fetch(`${url}/polls`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(poll), // Send the poll object as JSON in the body
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}

// Function to create a user by making a POST request
export async function castVote(vote: Vote, pollId: string) {
  const response = await fetch(
    `${url}/polls/${pollId}/voteoptions/${vote.voteOption.id}/votes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vote), // Send the vote object as JSON in the body
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return await response.json();
}

// code to generate new ids
// would normally put in another file
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};
