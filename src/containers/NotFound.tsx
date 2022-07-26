import LayoutError from "@/layouts/LayoutError";
import React from "react";

function NotFound() {
  return (
    <LayoutError
      code={404}
      message={"Ngu vl làm gì có trang này mà tìm về trang chủ đi ! "}
    />
  );
}

export default NotFound;
