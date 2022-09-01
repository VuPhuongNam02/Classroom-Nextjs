import React from "react";

import { Icon, IconProps } from "@chakra-ui/icon";

const UploadIcon = (props: IconProps) => {
  return (
    <Icon
      height="24px"
      focusable="false"
      width="24px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z"></path>{" "}
    </Icon>
  );
};

export default UploadIcon;
