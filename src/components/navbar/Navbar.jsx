import React from "react";
import { Navigate } from "react-router-dom";
import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {

    const [onTop, setOnTop] = React.useState(true);
    const [redirect, setRedirect] = React.useState(false)

    window.onscroll = () => {
        setOnTop(window.scrollY === 0 ? true : false)
        return () => (window.onscroll = null)
    }

    const logout = () => {
        setRedirect(true)
    }

    if(redirect) {
        return(
            <Navigate to={'/login'} />
        )
    }

  return (
    <div className={onTop ? "navbar" : "navbar scrolled"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix-logo" />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <SearchIcon className="icon"/>
                <NotificationsIcon className="icon"/>
                
                    <img 
                        src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg" 
                        alt="user-img" 
                    />
                    <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={logout}>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
