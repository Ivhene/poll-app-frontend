export type User = {
  username: string;
  email: string;
  votes: Vote[];
  polls: Poll[];
};

export type Vote = {
  id: string;
  publishedAt: Date;
  user: User;
  voteOption: VoteOption;
};

export type Poll = {
  id: string;
  question: string;
  publishedAt: Date;
  validUntil: Date;
  createdUser: User;
  options: VoteOption[];
};

export type VoteOption = {
  id: string;
  caption: string;
  presentationOrder: number;
  poll: Poll;
  votes: Vote[];
};
