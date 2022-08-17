import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { TiFolderDelete } from "react-icons/ti";
import { BiCalendarAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const Menu = [
  {
    title: "Lớp học",
    icon: <AiOutlineHome size="24px" />,
    href: "/",
  },
  {
    title: "Lịch",
    icon: <BiCalendarAlt size="24px" />,
    href: "/calendar",
    isSeparate: true,
  },
  {
    key: "Giảng dạy",
    title: "Cần đánh giá",
    icon: <TiFolderDelete size="24px" />,
    href: "/reviewed",
    isSeparate: true,
    children: [
      {
        id: 1,
        title: "NextJS",
        icon: "N",
        href: "/class/nextjs",
      },
      {
        id: 2,
        title: "Angular",
        icon: "A",
        href: "/class/angular",
      },
    ],
  },
  {
    title: "Lớp học đã lưu trữ",
    icon: <HiOutlineFolderDownload size="24px" />,
    href: "/archived",
    isSeparateTop: true,
  },
  {
    title: "Cài đặt",
    icon: <FiSettings size="24px" />,
    href: "/setting",
  },
];

function Sidebar({ onClose, isOpen }: Props) {
  const router = useRouter();
  const bg = useColorModeValue("teal.100", "teal.400");

  const activeColor = (href: string, trueColor: any) => {
    return href === router.pathname ? trueColor : "";
  };

  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody padding="10px 0 !important">
          {Menu.map((item, key) => {
            return (
              <Box
                key={key}
                borderBottomWidth={item.isSeparate ? "1px" : ""}
                paddingBottom={item.isSeparate ? "5px" : ""}
                paddingTop={item.isSeparateTop ? "5px" : ""}
              >
                {item.key && (
                  <Text padding={"1rem"} fontWeight={500}>
                    {item.key}
                  </Text>
                )}
                <Link href={item.href} passHref>
                  <FlexWrapp
                    color={activeColor(item.href, "light")}
                    background={activeColor(item.href, bg)}
                  >
                    {item.icon}
                    {item.title}
                  </FlexWrapp>
                </Link>
                {item.children &&
                  item.children.map((children, key) => (
                    <Link key={key} href={children.href}>
                      <FlexWrapp
                        color={activeColor(children.href, "light")}
                        background={activeColor(children.href, bg)}
                      >
                        <Box
                          w="30px"
                          h="30px"
                          background="black"
                          color="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="50%"
                        >
                          {children.icon}
                        </Box>
                        {children.title}
                      </FlexWrapp>
                    </Link>
                  ))}
              </Box>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;

const FlexWrapp = styled(Flex)`
  transition: 0.2s all;
  margin-right: 1rem;
  padding: 1rem 1.5rem;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0 2rem 2rem 0;
  font-weight: 500;
  &:hover {
    background: rgba(26, 115, 232, 0.122);
    cursor: pointer;
  }
`;
