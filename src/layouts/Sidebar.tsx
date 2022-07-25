import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

function Sidebar({ onClose, isOpen }: Props) {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
