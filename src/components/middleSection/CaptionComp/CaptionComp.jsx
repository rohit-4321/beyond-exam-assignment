import React, { useEffect, useState } from "react";
import style from "./CaptionComp.module.css";
import { RiAddFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const getCaptions = () => {
  let captions = localStorage.getItem("captions");
  if (captions) {
    return JSON.parse(captions);
  }
  return [""];
};

export const CaptionComp = () => {
  const [captions, setCaptions] = useState(getCaptions());

  const addCaption = () => {
    setCaptions([...captions, ""]);
  };
  useEffect(() => {
    localStorage.setItem("captions", JSON.stringify(captions));
  }, [captions]);
  return (
    <div className={style.CaptionComp}>
      <CaptionHeaderOptions addCaptions={addCaption} />
      <CaptionContainer captions={captions} setCaptions={setCaptions} />
    </div>
  );
};

const CaptionHeaderOptions = ({ addCaptions }) => {
  return (
    <div className={style.CaptionHeaderOptions}>
      <button className={style.addCaption_btn} onClick={addCaptions}>
        <RiAddFill className={style.addIcon} size={20} />
        <p>CAPTION</p>
      </button>
      <div className={style.navSection}>
        <p>EDIT AS TEXT</p>
        <BsThreeDotsVertical
          className={style.threedotIcon}
          size={18}
          color="grey"
        />
      </div>
    </div>
  );
};

const CaptionContainer = ({ captions, setCaptions }) => {
  return (
    <div className={style.CaptionContainer}>
      {captions.map((value, index) => (
        <EditCaption
          key={index}
          index={index}
          value={value}
          setCaptions={setCaptions}
          captions={captions}
        />
      ))}
    </div>
  );
};

const EditCaption = ({ index, value, setCaptions, captions }) => {
  const onTextChange = (event, index) => {
    let arr = captions.map((value, i) => {
      if (index === i) {
        return event.target.value;
      }
      return value;
    });
    setCaptions(arr);
  };

  const onDelete = () => {
    let modifedarr = captions.filter((v, i) => index !== i);
    console.log(modifedarr);
    setCaptions(modifedarr);
  };

  return (
    <form className={style.EditCaption} onSubmit={() => {}}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onTextChange(e, index);
        }}
      />
      <div
        className={style.deleteIcon}
        onClick={() => {
          onDelete();
        }}
      >
        <MdDelete size={25} color="grey" />
      </div>
      <Timer />
    </form>
  );
};
const Timer = () => {
  return (
    <div className={style.timer}>
      <input
        className={style.commonCaptionInput}
        type="text"
        value={"00.10"}
        readOnly
      />
      <input
        className={style.commonCaptionInput}
        type="text"
        value={"00:20"}
        readOnly
      />
    </div>
  );
};
