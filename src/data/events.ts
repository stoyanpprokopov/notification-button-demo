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
