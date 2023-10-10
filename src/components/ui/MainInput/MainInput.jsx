import React from "react";
import AntdConfig from "../../../config/AntdConfig";
import { Input } from "antd";

const MainInput = ({ type, name, label, rules, placeholder, ref }) => {
  return (
    <AntdConfig>
      <Input type={type} name={name} label={label} rules={rules} placeholder={placeholder} ref={ref} />
    </AntdConfig>
  );
};

export default MainInput;