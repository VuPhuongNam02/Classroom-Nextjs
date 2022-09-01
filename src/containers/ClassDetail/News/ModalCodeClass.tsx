import CModal from "@/components/base/CModal";
import ShowInforIcon from "@/icons/ShowInforIcon";
import { CopyIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ModalCodeClass({ isOpen, onClose }: Props) {
  return (
    <CModal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      contentProps={{
        className: "modal-code",
      }}
    >
      <Text fontSize="75px" textAlign="center">
        qmfdo52
      </Text>
      <Divider colorScheme="black !important" />
      <Flex alignItems="center" justifyContent="space-between" m="2rem 0">
        <Text fontWeight="500">Nest js</Text>
        <Flex>
          <Button background="none" leftIcon={<CopyIcon />}>
            Sao chép đường liên kết mới
          </Button>
          <Button p="0" background="none">
            <ShowInforIcon />
          </Button>
        </Flex>
      </Flex>
    </CModal>
  );
}

export default ModalCodeClass;
