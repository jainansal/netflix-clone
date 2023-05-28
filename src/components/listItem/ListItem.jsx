import React from "react";
import {
  Add,
  ArrowDropDown,
  Done,
  KeyboardArrowDown,
  PlayArrowRounded,
  PlayCircleFilledRounded,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listItem.scss";

function ListItem({ index }) {


  return (
    <div className="wrap">
      <div className="list-item">
      <img
        src="https://flxt.tmsimg.com/assets/p8630071_b_h8_bc.jpg"
        alt="list-img"
        className="item-img"
      />
     {/* <video src={target} autoPlay={true} /> */}
      <div className="item-info">
        <div className="icons">
          <div className="left">
            <PlayArrowRounded className="icon play" />
            <Add className="icon" />
            <ThumbUpAltOutlined className="icon" />
          </div>
          <div className="right">
            <KeyboardArrowDown className="icon" />
          </div>
        </div>
        <div className="item-info-top">
          <span className="child-rating">A</span>
          <span className="duration">1h 14m</span>
          <span className="quality">HD</span>
        </div>
        <div className="genre">
          Horror • Evil Kid • 1980s
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default ListItem;
