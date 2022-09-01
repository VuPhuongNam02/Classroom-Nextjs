import React from "react";

import { Icon, IconProps } from "@chakra-ui/icon";

const CopyIcon = (props: IconProps) => {
  return (
    <Icon
      height="18px"
      focusable="false"
      width="18px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <rect fill="none" height="24" width="24"></rect>
      </g>
      <g>
        <path d="M16,20H5V6H3v14c0,1.1,0.9,2,2,2h11V20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9 C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z"></path>
      </g>
    </Icon>
  );
};

export default CopyIcon;
