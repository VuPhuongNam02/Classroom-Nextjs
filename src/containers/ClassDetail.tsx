import CContainer from "@/components/base/CContainer";
import CHead from "@/components/base/CHead";
import CopyIcon from "@/icons/CopyIcon";
import InforIcon from "@/icons/InforIcon";
import LayoutMain from "@/layouts/LayoutMain";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImPencil } from "react-icons/im";

function ClassDetail() {
  const [isShowInforClass, setIsShowInforClass] = useState(false);

  const bgInfo = useColorModeValue("white", "grayCard");
  const bgIcon = useColorModeValue("grayCard", "white");

  return (
    <>
      <CHead title="nest JS" />
      <LayoutMain isLogo={true} title="Classroom">
        <CContainer
          minW="18.75rem"
          w={["", "", "720px", "1000px"]}
          marginTop="1.5rem"
        >
          <Box pb="100px">
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
                boxShadow="0 2px 1px -1px rgba(0,0,0,0.2))"
                color="black"
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

            {isShowInforClass && (
              <Box
                w="100%"
                p={{ base: ".5rem", lg: "1.5rem" }}
                boxShadow="0 1px 5px 0 rgba(60,64,67,.4)"
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
                    <CopyIcon fill={bgIcon} />
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
        </CContainer>
      </LayoutMain>
    </>
  );
}

export default ClassDetail;
