import React from "react";

import { Icon, IconProps } from "@chakra-ui/icon";

const PhotoIcon = (props: IconProps) => {
  return (
    <Icon
      height="24px"
      focusable="false"
      width="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"></path>
    </Icon>
  );
};

export default PhotoIcon;
