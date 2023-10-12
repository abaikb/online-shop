import React from "react";
import AntdConfig from "../../../config/AntdConfig";
import { Button } from "antd";

const MainButton = ({ onClick, children, type, size, htmlType, className }) => {
  return (
    <AntdConfig>
      <Button type={type} onClick={onClick} size={size} htmlType={htmlType} className={className}>{children}</Button>
    </AntdConfig>
  );
};

export default MainButton;