import React from 'react';
import './list.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem'

function List() {

    const [isMoved, setIsMoved] = React.useState(false)
    const [slideNumber, setSlideNumber] = React.useState(0)
    const listRef = React.useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 60
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        } 
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className='list'>
        <span className="list-title">Continue Watching for Ansal</span>
        <div className="wrapper">
            <ArrowBackIosNewIcon 
                className='slider-arrow left' 
                onClick={()=>handleClick("left")}
                style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosIcon className='slider-arrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List
