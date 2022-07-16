import React, { useState } from "react";
import style from "./middle.module.css";
import { OptionSelection } from "./CaptionComp/OptionSelection";
import { VideoComp } from "./VideoComp/VideoComp";
import { CaptionComp } from "./CaptionComp/CaptionComp";

function Middle() {
  const [isEditorOpen, setEditorState] = useState(false);
  return (
    <div className={style.MiddleSection}>
      <div className={style.captionSection}>
        {isEditorOpen ? (
          <CaptionComp />
        ) : (
          <OptionSelection openCaptionEditor={setEditorState} />
        )}
      </div>
      <div className={style.videoSection}>
        <VideoComp />
      </div>
    </div>
  );
}

export default Middle;
