import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div
      style={{
        color,
      }}
    >
      <b>{isSpecial ? "스페셜하다!" : "낫스페셜"}</b>
      안녕하세요{name}
    </div>
  );
};

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
