import React from "react";
import style from "./OptionSelection.module.css";
import { MdFileUpload, MdKeyboard, MdOutlineTranslate } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { BsStars } from "react-icons/bs";

export const OptionSelection = () => {
  return (
    <div class={style.OptionSelection}>
      <p> Select how you want to add captions</p>
      <OptionComp Icon={MdFileUpload} title="Upload file" />
      <OptionComp Icon={BsStars} title="Auto-sync" />
      <OptionComp Icon={MdKeyboard} title="Type Manually" />
      <OptionComp Icon={MdOutlineTranslate} title="Auto-translate" />
    </div>
  );
};

const OptionComp = ({ title, Icon }) => {
  return (
    <div class={style.OptionComp}>
      <Icon size={22} color="grey" />
      <p>{title}</p>
      <VscQuestion size={20} color="grey" />
    </div>
  );
};
