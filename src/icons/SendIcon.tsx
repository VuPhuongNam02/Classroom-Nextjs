import React from "react";

import { Icon, IconProps } from "@chakra-ui/icon";

const SendIcon = (props: IconProps) => {
  return (
    <Icon
      height="24px"
      focusable="false"
      width="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 3v18l20-9L2 3zm2 11l9-2-9-2V6.09L17.13 12 4 17.91V14z"></path>
    </Icon>
  );
};

export default SendIcon;
