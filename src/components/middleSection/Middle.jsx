import React from "react";
import style from "./middle.module.css";
import { OptionSelection } from "./CaptionComp/OptionSelection";

function Middle() {
  return (
    <div className={style.MiddleSection}>
      <div className={style.captionSection}>
        <OptionSelection />
      </div>
      <div className={style.videoSection}></div>
    </div>
  );
}

export default Middle;
