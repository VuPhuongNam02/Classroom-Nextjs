import React, { ReactNode } from "react";

import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

type Props = ModalProps & {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  type?: "confirm" | "info";
  onCancel?: () => void;
  onOk?: () => void;
  contentProps?: ModalContentProps;
};

const CModal = ({
  header,
  children,
  footer,
  type,
  onCancel,
  onOk,
  ...props
}: Props) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent {...props.contentProps}>
        <ModalHeader fontSize="18px" fontWeight="500">
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {(footer || type) && (
          <ModalFooter>
            {type === "confirm" ? (
              <Flex alignItems="center" flex={1} justifyContent="center">
                <Button
                  colorScheme="gray"
                  fontWeight="bold"
                  height={12}
                  mr={5}
                  onClick={props.onClose}
                >
                  Hủy
                </Button>
                <Button fontWeight="bold" height={12} onClick={onOk}>
                  Lưu
                </Button>
              </Flex>
            ) : (
              footer
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CModal;
