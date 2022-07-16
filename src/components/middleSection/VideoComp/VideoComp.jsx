import React from "react";
import style from "./VideoSection.module.css";

export const VideoComp = () => {
  return (
    <div className={style.VideoComp}>
      <iframe
        className={style.frame}
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        title="video"
      />
      <p>
        Enter subtitle faster with <a href="/#">keyboard shortcut</a>.
      </p>
      <div className={style.checkBoxSection}>
        <input type={"checkbox"} name="pause" value="PauseVideo" />
        <span>Pause while typing</span>
      </div>
    </div>
  );
};
