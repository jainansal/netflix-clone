import { EmojiFlags, KeyboardBackspace } from "@mui/icons-material";
import "./watch.scss";

function Watch() {
  return (
    <div className="watch">
      <div className="top-buttons">
        <KeyboardBackspace className="icon"/>
        <EmojiFlags className="icon"/>
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
