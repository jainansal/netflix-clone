import React from "react";
import { Navigate } from "react-router-dom";
import { EmojiFlags, KeyboardBackspace } from "@mui/icons-material";
import "./watch.scss";

function Watch() {
  const [redirect, setRedirect] = React.useState(false);

  const back = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="watch">
      <div className="top-buttons">
        <KeyboardBackspace className="icon" onClick={back} />
        <EmojiFlags className="icon" />
      </div>
      <video
        className="video"
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        controls
        progress
      ></video>
    </div>
  );
}

export default Watch;
