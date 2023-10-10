import React from "react";
import AntdConfig from "../../../config/AntdConfig";
import { Button } from "antd";

const MainButton = ({ onClick, children, type, size, htmlType }) => {
  return (
    <AntdConfig>
      <Button type={type} onClick={onClick} size={size} htmlType={htmlType}>{children}</Button>
    </AntdConfig>
  );
};

export default MainButton;