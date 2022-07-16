import React from "react";
import style from "./bottom.module.css";
import { MdUndo, MdRedo } from "react-icons/md";
import { Slider } from "@material-ui/core";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

export const Bottomhead = () => {
  return (
    <div className={style.BottomHead}>
      <input type="text" value={"0:00:00"} />
      <Undo />
      <Redo />
      <ScreenSlider />
    </div>
  );
};

const Undo = () => {
  return (
    <div className={style.UndoRedo}>
      <MdUndo color="grey" size={18} />
      <p>Undo</p>
    </div>
  );
};
const Redo = () => {
  return (
    <div className={style.UndoRedo}>
      <MdRedo color="grey" size={18} />
      <p>Redo</p>
    </div>
  );
};
const ScreenSlider = () => {
  return (
    <div className={style.sliderContainer}>
      <FaSearchMinus color="darkgrey" size={20} />
      <Slider className={style.slider} />
      <FaSearchPlus color="darkgrey" size={20} />
    </div>
  );
};
