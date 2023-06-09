import React from "react";
import { Navigate } from "react-router-dom";
import "./featured.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Featured({ type }) {
  const [redirect, setRedirect] = React.useState(false);

  const watch = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/watch"} />;
  }

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option>Genres</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/5a0IreQXrb75yZWvogHLh4/f5d183204c31841695c4e562ed168813/Web-8464.jpg?w=2560"
        alt="netflix-bg"
      />

      <div className="info">
        <img
          src="https://www.pngmart.com/files/22/The-Martian-PNG-Picture.png"
          alt="movie-title"
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          excepturi non delectus omnis perspiciatis accusamus consectetur
          deleniti exercitationem iusto, velit modi, impedit voluptate fuga
          ratione quisquam nobis quod sequi unde.
        </span>
        <div className="buttons">
          <button className="play" onClick={watch}>
            <PlayArrowRoundedIcon className="icon" />
            Play
          </button>
          <button className="more">
            <InfoOutlinedIcon className="icon" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
