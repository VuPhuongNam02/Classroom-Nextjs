import LayoutMain from "@/layouts/LayoutMain";
import React from "react";
import CHead from "@/components/base/CHead";
import { Text } from "@chakra-ui/react";
import { BiCalendarAlt } from "react-icons/bi";

function Calendar() {
  return (
    <>
      <CHead />
      <LayoutMain
        title="Lịch học"
        isAction={true}
        action={<BiCalendarAlt size="24px" />}
      >
        <Text fontSize={50} textAlign="center" fontWeight="bold">
          Calendar
        </Text>
      </LayoutMain>
    </>
  );
}

export default Calendar;
