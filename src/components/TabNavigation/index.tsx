import { Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  onChangeTab: (index: number) => void;
  tabs: {
    name: string;
    key: string;
  }[];
};

function TabNavigation({ onChangeTab, tabs = [] }: Props) {
  const colorTab = useColorModeValue("primary", "teal.300");

  return (
    <Tabs
      onChange={(index: number) => onChangeTab(index)}
      defaultIndex={0}
      defaultValue={0}
    >
      <TabList h="60px" borderBottom="unset">
        {tabs?.map((tab) => (
          <Tab
            fontWeight="500"
            fontSize="14px"
            letterSpacing=".01785714em"
            _selected={{
              color: colorTab,
              borderBottom: "4px solid #007b83",
            }}
            key={tab.key}
          >
            {tab.name}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default TabNavigation;
