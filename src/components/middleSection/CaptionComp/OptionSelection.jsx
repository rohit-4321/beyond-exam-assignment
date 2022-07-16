import React from "react";
import style from "./OptionSelection.module.css";
import { MdFileUpload, MdKeyboard, MdOutlineTranslate } from "react-icons/md";
import { VscQuestion } from "react-icons/vsc";
import { BsStars } from "react-icons/bs";

export const OptionSelection = ({ openCaptionEditor }) => {
  return (
    <div className={style.OptionSelection}>
      <p> Select how you want to add captions</p>
      <OptionComp Icon={MdFileUpload} title="Upload file" isFade={true} />
      <OptionComp Icon={BsStars} title="Auto-sync" isFade={true} />
      <OptionComp
        Icon={MdKeyboard}
        title="Type Manually"
        onClick={openCaptionEditor}
        isFade={false}
      />
      <OptionComp
        Icon={MdOutlineTranslate}
        title="Auto-translate"
        isFade={true}
      />
    </div>
  );
};

const OptionComp = ({ title, Icon, onClick, isFade }) => {
  return (
    <div className={style.OptionComp} onClick={onClick}>
      <Icon size={22} color={isFade ? "#535353" : "#a0a0a0"} />
      <p className={isFade ? style.titleFade : style.title}>{title}</p>
      <VscQuestion size={20} color="grey" />
    </div>
  );
};
