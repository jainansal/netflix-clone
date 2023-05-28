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
        if(direction === 'right' && slideNumber < 6){
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
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
                <ListItem index={10}/>
                <ListItem index={11}/>
            </div>
            <ArrowForwardIosIcon className='slider-arrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List
