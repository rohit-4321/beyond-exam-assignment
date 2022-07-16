import React from "react";
import style from "./VideoSection.module.css";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export const VideoComp = () => {
  return (
    <div className={style.VideoComp}>
      <iframe
        className={style.frame}
        src="https://www.youtube.com/embed/WzqDTZc6cN4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="video"
      />

      <p>
        Enter subtitle faster with <a href="/#">keyboard shortcut</a>.
      </p>
      <div className={style.checkBoxSection}>
        {/* <input type={"checkbox"} name="pause" value="PauseVideo" />
         */}
        <Checkbox
          icon={<FiCheck color="#f1f1f1" size={14} />}
          name="my-input"
          checked={false}
          borderRadius={3}
          onChange={(value, event) => {}}
          borderColor="#9c9c9c"
          style={{ cursor: "pointer" }}
        />
        <span>Pause while typing</span>
      </div>
    </div>
  );
};
