export type EventObj = {
  _id: string;
  coverImg?: string;
  category: string;
  title: string;
  ticketType: string;
  interestCount?: number;
  tickets?: ticket[] | null;
  interested?: boolean;
  location: string;
  address: string;
  session: aSession[];
  type: string;
  description: string;
  isPublished: boolean;
  tags?: null | string[];
  userId: string;
};

export type ticket = {
  ticketPrice: number | string;
  ticketName: string;
};

export type aSession = {
  startTime: string;
  endTime: string;
  startDate: string;
  endDate?: string;
};
type link = { name: string; url: string };
