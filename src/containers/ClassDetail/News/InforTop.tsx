import CModal from "@/components/base/CModal";
import ShowInforIcon from "@/icons/ShowInforIcon";
import InforIcon from "@/icons/InforIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import UploadIcon from "@/icons/UploadIcon";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ImPencil } from "react-icons/im";
import ModalCodeClass from "./ModalCodeClass";

type Props = {
  boxShadowColor: string;
  bgIcon: string;
  bgInfo: string;
  borderColor: string;
};

function InforTop({ boxShadowColor, bgIcon, bgInfo }: Props) {
  const [isShowInforClass, setIsShowInforClass] = useState(false);
  const {
    isOpen: isOpenSetting,
    onOpen: onOpenSetting,
    onClose: onCloseSetting,
  } = useDisclosure();

  const {
    isOpen: isOpenShowInfor,
    onOpen: onOpenShowInfor,
    onClose: onCloseShowInfor,
  } = useDisclosure();

  return (
    <>
      <Box pb="2rem">
        <Box
          backgroundImage={
            "url(https://gstatic.com/classroom/themes/img_graduation.jpg)"
          }
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          height={{ base: "11.2rem", lg: "15rem" }}
          borderRadius={isShowInforClass ? "7px 7px 0 0" : "7px"}
          position="relative"
        >
          <Button
            position="absolute"
            right={{ base: "1rem", lg: ".5rem" }}
            top="1rem"
            leftIcon={<ImPencil width="18px" height="18px" />}
            fontSize={{ base: "13px", lg: "14px" }}
            letterSpacing=".25px"
            w={{ base: "110px", lg: "123px" }}
            height={{ base: "33px", lg: "37px" }}
            background="white"
            color="black"
            onClick={onOpenSetting}
          >
            Tùy chỉnh
          </Button>
          <Flex
            justifyContent="space-between"
            alignItems="end"
            padding={{ base: ".5rem", lg: "1rem 1rem 1rem 2rem" }}
            position="absolute"
            bottom="0"
            right="0"
            left="0"
          >
            <Text
              color="white"
              fontWeight="500"
              fontSize={{ base: "1.75rem", lg: "36px" }}
            >
              next js
            </Text>
            <Button
              position="absolute"
              bottom="2px"
              right="0"
              borderRadius="xl"
              _hover={{
                background: "rgba(0,0,0,0.2)",
              }}
              p="12px"
              background="none"
              onClick={() => setIsShowInforClass(!isShowInforClass)}
            >
              <InforIcon />
            </Button>
          </Flex>
        </Box>

        <CModal
          closeOnOverlayClick={false}
          isOpen={isOpenSetting}
          onClose={onCloseSetting}
          isCentered
          contentProps={{
            className: "modal-infor-class",
          }}
          header="Tùy chỉnh giao diện"
          footer={
            <>
              <Button background="none" mr={3} onClick={onCloseSetting}>
                Hủy
              </Button>
              <Button background="none">Lưu</Button>
            </>
          }
        >
          <Image
            rounded="md"
            src="https://gstatic.com/classroom/themes/img_graduation.jpg"
            alt="ok"
          />
          <Flex
            mt="2rem"
            justifyContent="space-between"
            alignItems={{ base: "flex-start", lg: "center" }}
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
            }}
          >
            <Text>Chọn ảnh tiêu đề cho bảng tin</Text>
            <Flex gap="1rem" mt={{ base: ".5rem", lg: "0" }}>
              <Button leftIcon={<PhotoIcon fill={bgIcon} />}>Chọn ảnh</Button>
              <Button leftIcon={<UploadIcon />} fill={bgIcon}>
                Tải ảnh lên
              </Button>
            </Flex>
          </Flex>
        </CModal>

        {isShowInforClass && (
          <Box
            w="100%"
            p={{ base: ".5rem", lg: "1.5rem" }}
            boxShadow={boxShadowColor}
            borderRadius="0 0 7px 7px"
            line-height="1.25rem"
            bg={bgInfo}
          >
            <Flex gap="5px" alignItems="center" height="100%">
              <Text fontWeight="500" fontSize="14px">
                Mã lớp
              </Text>
              <Text fontSize="14px">qmfdo52</Text>
              <Button
                borderRadius="xl"
                _hover={{
                  background: "rgba(0,0,0,0.2)",
                }}
                p="0 0"
                height="0"
                background="none"
              >
                <ShowInforIcon fill={bgIcon} onClick={onOpenShowInfor} />
              </Button>
            </Flex>
            <Flex gap="5px" alignItems="center" height="100%">
              <Text fontWeight="500" fontSize="14px">
                Chủ đề
              </Text>
              <Text fontSize="14px">JS</Text>
            </Flex>
            <Flex gap="5px" alignItems="center" height="100%">
              <Text fontWeight="500" fontSize="14px">
                Phòng
              </Text>
              <Text fontSize="14px">123</Text>
            </Flex>
          </Box>
        )}
      </Box>
      <ModalCodeClass isOpen={isOpenShowInfor} onClose={onCloseShowInfor} />
    </>
  );
}

export default InforTop;
