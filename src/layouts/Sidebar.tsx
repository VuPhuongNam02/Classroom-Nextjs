import React from "react";
import { QuestionIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Flex,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const Menu = [
  {
    title: "Home",
    icon: <QuestionIcon w="24px" />,
  },
  {
    title: "Calendar",
    icon: <QuestionIcon w="24px" />,
  },
];

function Sidebar({ onClose, isOpen }: Props) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader></DrawerHeader>
        <DrawerBody padding="0 !important">
          <Box borderBottomWidth="1px" padding="5px 0">
            {Menu.map((item, key) => {
              return (
                <Flex
                  key={item.title}
                  alignItems="center"
                  padding="1rem"
                  gap="1.5rem"
                  _hover={{ background: "rgba(0,0,0,0.5)", cursor: "pointer" }}
                >
                  {item.icon}
                  {item.title}
                </Flex>
              );
            })}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
