import ShowInforIcon from "@/icons/ShowInforIcon";
import MoreInforIcon from "@/icons/MoreInforIcon";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ModalCodeClass from "./ModalCodeClass";

type Props = {
  bgIcon: string;
  bgInfo: string;
  borderColor: string;
};

function InforSide({ bgIcon, bgInfo, borderColor }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
        <Box
          p="1rem 0 1rem 1rem"
          borderRadius=".5rem"
          border={borderColor}
          line-height="1.25rem"
          bg={bgInfo}
          w="12.125rem"
        >
          <Flex gap="5px" justifyContent="space-between" alignItems="center">
            <Text fontWeight="500" fontSize="14px">
              Mã lớp
            </Text>

            <Button
              borderRadius="xl"
              p="0 0"
              w="24px"
              height="24px"
              background="none"
            >
              <MoreInforIcon fill={bgIcon} />
            </Button>
          </Flex>
          <Flex alignItems="center" marginTop="10px" gap="5px">
            <Text fontSize="22px">qmfdo52</Text>
            <Button borderRadius="xl" p="0 0" background="none">
              <ShowInforIcon fill={bgIcon} onClick={onOpen} />
            </Button>
          </Flex>
        </Box>

        <Box
          p="1rem"
          borderRadius=".5rem"
          border={borderColor}
          line-height="1.25rem"
          bg={bgInfo}
          w="12.125rem"
          marginTop="1.5rem"
        >
          <Text fontWeight="500" fontSize="14px">
            Sắp đến hạn
          </Text>
          <Text marginTop="10px" fontWeight="300" fontSize="13px">
            Không có bài tập nào sắp đến hạn
          </Text>
          <Button
            marginRight="auto"
            background="none"
            p="0 5px"
            height="30px"
            fontSize="13px"
            marginTop="10px"
          >
            Xem tất cả
          </Button>
        </Box>
      </Box>
      <ModalCodeClass onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default InforSide;
