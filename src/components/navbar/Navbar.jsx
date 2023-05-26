import React from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="left">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix-logo" />
            <span>Homepage</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg" alt="user-profile" />
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
