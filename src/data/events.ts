import moment from "moment";

export enum EEventStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface IEvent {
  id: string;
  title: string;
  description: string;
  dateCreated: Date;
  status: EEventStatus;
  dismissed: boolean;
}

export interface IEventsProps {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
}

export function createEvent(title: string, description: string): IEvent {
  return {
    id: (Math.random() * 1000000).toString().slice(0, 6),
    title,
    description,
    dateCreated: new Date(),
    status: EEventStatus.IN_PROGRESS,
    dismissed: false,
  };
}
