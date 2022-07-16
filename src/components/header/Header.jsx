import React from "react";
import style from "./header.module.css";
import { IoClose } from "react-icons/io5";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsExclamationSquareFill } from "react-icons/bs";

export const Header = () => {
  return (
    <div className={style.header}>
      <HeaderRight />
      <HeaderLeft />
    </div>
  );
};
const HeaderRight = () => {
  return (
    <div className={style.headerRight}>
      <MdOutlineSubtitles size={25} color={"rgb(0, 115, 215) "} />
      <p>English (India)</p>
    </div>
  );
};
const HeaderLeft = () => {
  return (
    <div className={style.headerLeft}>
      <BsExclamationSquareFill color={"grey"} />
      <p>Save Draft</p>
      <button>PUBLISH</button>
      <IoClose size={25} />
    </div>
  );
};
