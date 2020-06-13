import React from "react";
import { Button } from "antd";

export const ButtonWrapper = ({ text, type, style, onClickHandle }) => {
  return (
    <div style={style}>
      <Button onClick={() => onClickHandle()} type={type}>
        {text}
      </Button>
    </div>
  );
};
