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
          <span>1 hour 14 mins</span>
          <span className="age-limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          nesciunt maxime explicabo mollitia dolore, non hic, commodi totam
          natus eaque perspiciatis animi quo enim obcaecati?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
    </div>
    
  );
}

export default ListItem;
