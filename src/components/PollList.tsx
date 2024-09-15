import { useEffect, useState } from "react";
import { Poll, User } from "../lib/types";
import { getPolls } from "../lib/API";
import { VoteOnPoll } from "./VoteOnPoll";

interface PollListProps {
  user: User;
}

export function PollList({ user }: PollListProps) {
  const [pollList, setPollList] = useState<Poll[]>([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const polls = await getPolls();
      setPollList(polls);

      setTimeout(() => {
        fetchPolls();
      }, 10000); // revalidated data after 10 seconds
    };

    fetchPolls();
  }, []);
  return (
    <div className="grid grid-cols-4">
      {pollList.map((poll) => (
        <div key={poll.id}>
          <VoteOnPoll user={user} poll={poll} />
        </div>
      ))}
    </div>
  );
}
