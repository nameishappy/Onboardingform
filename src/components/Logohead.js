import React from "react";
import logodark from "../logos/logodark.png";
import logowhite from "../logos/logowhite.png";

export default function Logohead(props) {
  let logo = logowhite;
  if (props.Theme === "dark") {
    logo = logowhite;
  } else {
    logo = logodark;
  }
  return (
    <div>
      <img className="m-auto mb-[32px]" src={logo} alt="logo" />
    </div>
  );
}
