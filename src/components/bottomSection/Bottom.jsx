import React from "react";
import style from "./bottom.module.css";
import { Bottomhead } from "./BottomHead";
import { MdOutlineSubtitles } from "react-icons/md";

import { IoMdMusicalNote } from "react-icons/io";

function Bottom() {
  return (
    <div className={style.bottomSection}>
      <Bottomhead />
      <CaptionTrack />
      <SoundTrack />
    </div>
  );
}

const CaptionTrack = () => {
  return (
    <div className={style.Track}>
      <div className={`${style.iconDiv} ${style.captionIconDiv}`}>
        <MdOutlineSubtitles
          id={style.icon}
          color={"rgb(17, 116, 202)"}
          size={25}
        />
      </div>
      <div className={style.captionTrack}></div>
    </div>
  );
};
const SoundTrack = () => {
  return (
    <div>
      <div className={style.Track}>
        <div className={style.iconDiv}>
          <IoMdMusicalNote
            id={style.icon}
            color={"rgb(122, 124, 126)"}
            size={25}
          />
        </div>
        <div className={style.captionTrack}></div>
      </div>
    </div>
  );
};

export default Bottom;
