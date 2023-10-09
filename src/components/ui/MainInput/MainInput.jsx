import React from "react";
import AntdConfig from "../../../config/AntdConfig";
import { Input } from "antd";

const MainInput = ({ type, name, label, rules }) => {
  return (
    <AntdConfig>
      <Input type={type} name={name} label={label} rules={rules} />
    </AntdConfig>
  );
};

export default MainInput;