import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured() {
  return (
    <div className='featured'>
        <img 
        src="https://images.ctfassets.net/4cd45et68cgf/5a0IreQXrb75yZWvogHLh4/f5d183204c31841695c4e562ed168813/Web-8464.jpg?w=2560" alt="netflix-bg" />

        <div className="info">
            <img src="https://www.pngmart.com/files/22/The-Martian-PNG-Picture.png" alt="movie-title" />
            <span className='desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis excepturi non delectus omnis perspiciatis accusamus consectetur deleniti exercitationem iusto, velit modi, impedit voluptate fuga ratione quisquam nobis quod sequi unde.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon className='icon'/>
                    Play
                </button>
                <button className="more">
                    <InfoOutlinedIcon className='icon'/>
                    More Info
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
