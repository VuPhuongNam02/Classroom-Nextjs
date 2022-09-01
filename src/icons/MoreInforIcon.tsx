import React from "react";

import { Icon, IconProps } from "@chakra-ui/icon";

const MoreInforIcon = (props: IconProps) => {
  return (
    <Icon
      height="24px"
      focusable="false"
      width="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </Icon>
  );
};

export default MoreInforIcon;
