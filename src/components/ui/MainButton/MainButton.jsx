import React from "react";
import AntdConfig from "../../../config/AntdConfig";
import { Button } from "antd";

const MainButton = ({ onClick, children, type }) => {
  return (
    <AntdConfig>
      <Button type={type} onClick={onClick}>{children}</Button>
    </AntdConfig>
  );
};

export default MainButton;