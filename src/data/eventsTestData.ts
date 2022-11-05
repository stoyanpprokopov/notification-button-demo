import moment from "moment";
import { EEventStatus } from "./events";

const eventsTestData = [
  {
    id: "23dasd",
    title: "Event 1",
    description:
      "11111 111 111 111111 11111 111 111 111111 11111 111 111 111111 11111 111 111 111111 11111 111 111 111111 ",
    dateCreated: moment("2022-06-01").toDate(),
    status: EEventStatus.COMPLETED,
    dismissed: false,
  },
  {
    id: "23dasd34h",
    title: "Event 2",
    description:
      "222 22222 22 22222 222 22222 22 22222 222 22222 22 22222 222 22222 22 22222 222 22222 22 22222 ",
    dateCreated: moment("2022-10-01").toDate(),
    status: EEventStatus.IN_PROGRESS,
    dismissed: false,
  },

  {
    id: "23da34s",
    title: "Event 3",
    description:
      "33 3333 33333333 33 3 3333 33 3333 33333333 33 3 3333 33 3333 33333333 33 3 333 ",
    dateCreated: moment("2022-11-01").toDate(),
    status: EEventStatus.IDLE,
    dismissed: false,
  },
];

export default eventsTestData;
