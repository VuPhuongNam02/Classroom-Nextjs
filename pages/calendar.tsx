import type { NextPage } from "next";
import dynamic from "next/dynamic";

const CalendarPage = dynamic(() => import("@/containers/Calendar"), {
  ssr: false,
});

const Calendar: NextPage = () => <CalendarPage />;

export default Calendar;
