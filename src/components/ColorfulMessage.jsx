import React from "react";

export const ColorfulMessage = (props) => {
  console.log("からふる");
  const { color, children } = props;
  const contentsStyle = {
    //color: color,
    color,
    fontSize: "18px"
  };
  //タグの中身はchildrenとして使える
  return <p style={contentsStyle}>{children}</p>;
};
