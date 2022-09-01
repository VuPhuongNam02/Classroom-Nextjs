import MoreInforIcon from "@/icons/MoreInforIcon";
import SendIcon from "@/icons/SendIcon";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InforSide from "./InforSide";
import InforTop from "./InforTop";
import TextEditor from "@/components/TextEditor";

function News() {
  const [isShowPost, setIsShowPost] = useState(false);

  const bgInfo = useColorModeValue("white", "grayCard");
  const bgIcon = useColorModeValue("grayCard", "white");
  const boxShadowColor = useColorModeValue(
    "0 0 7px rgba(60,64,67,.4)",
    "0 0 3px #FFFFFF"
  );
  const borderColor = useColorModeValue(
    "0.0625rem solid #dadce0",
    "0.0625rem solid rgba(255, 255, 255, 0.16)"
  );

  return (
    <>
      <InforTop
        bgIcon={bgIcon}
        bgInfo={bgInfo}
        boxShadowColor={boxShadowColor}
        borderColor={borderColor}
      />
      <Flex gap="2rem">
        <InforSide bgIcon={bgIcon} bgInfo={bgInfo} borderColor={borderColor} />
        <Box w="100%">
          <Box
            w="100%"
            p="1rem 1.5rem"
            boxShadow={boxShadowColor}
            borderRadius=".5rem"
            line-height="1.25rem"
            bg={bgInfo}
            marginBottom="1.5rem"
          >
            {!isShowPost ? (
              <Flex gap="1rem" alignItems="center">
                <Avatar size="md" name="liam" src="/liam.jpg" />
                <Button
                  background="none"
                  fontSize="13px"
                  p="0 0"
                  fontWeight="300"
                  _hover={{
                    background: "none",
                    color: "black",
                  }}
                  _focus={{
                    background: "none",
                  }}
                  maxW="400px"
                  whiteSpace="pre-line"
                  textAlign="left"
                  onClick={() => setIsShowPost(true)}
                >
                  Thông báo nội dung gì đó cho lớp học của bạn
                </Button>
              </Flex>
            ) : (
              <Box>
                <Text mb=".5rem">Dành cho</Text>
                <form action="">
                  <Flex gap="1rem">
                    <Select w="150px" h="54px">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Select w="150px" h="54px">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <br />
                  <TextEditor />

                  <Flex gap=".5rem" mt="1rem" justifyContent="flex-end">
                    <Button
                      background="none"
                      onClick={() => setIsShowPost(false)}
                    >
                      Hủy
                    </Button>
                    <Button>Đăng</Button>
                  </Flex>
                </form>
              </Box>
            )}
          </Box>

          <Box
            w="100%"
            borderRadius=".5rem"
            line-height="1.25rem"
            bg={bgInfo}
            border={borderColor}
          >
            <Flex
              p="1rem 1.5rem"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex gap="1rem" alignItems="center">
                <Avatar size="md" name="liam" src="/liam.jpg" />
                <Flex flexDirection="column">
                  <Text fontWeight="500" fontSize="14px">
                    Liam
                  </Text>
                  <Text fontSize="12px">08:57</Text>
                </Flex>
              </Flex>
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
            <Box p="0 1.5rem 1.5rem" fontSize="14px">
              It’s a bit clumsy because I didn’t make it check for dynamically
              created elements, so I added “mousedown” event. It’s a bit clumsy
              because I didn’t make it check for dynamically created elements,
              so I added “mousedown” event. It’s a bit clumsy because I didn’t
              make it check for dynamically created elements, so I added
              “mousedown” event. It’s a bit clumsy because I didn’t make it
              check for dynamically created elements, so I added “mousedown”
              event.
            </Box>
            <Box borderTop={borderColor}>
              <Flex p="1rem 1.5rem" gap="1rem" alignItems="center">
                <Avatar size="sm" name="liam" src="/liam.jpg" />
                <form style={{ width: "100%", position: "relative" }}>
                  <Input
                    borderRadius="1.1875rem"
                    fontSize="0.8125rem"
                    w="100%"
                    placeholder="Thêm nhận xét trong lớp học..."
                    paddingRight="3rem"
                  />
                  <Button
                    position="absolute"
                    right="0"
                    background="none"
                    zIndex={10}
                    _hover={{ background: "none" }}
                    _focus={{ background: "none" }}
                  >
                    <SendIcon fill={bgIcon} />
                  </Button>
                </form>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default News;
