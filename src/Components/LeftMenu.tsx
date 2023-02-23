import React from 'react'
import "../Styles/leftMenu.css";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import {FaEllipsisH} from 'react-icons/fa';
import {BsBugFill} from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';

function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className="logoContainer">
        <i><BsBugFill/></i>
        <h1>VIRUS</h1>
        <i><FaEllipsisH/></i>
      </div>
      <div className="searchBox">
          <input type="text" placeholder='Search' />
          <i>
            <BiSearchAlt/>
          </i>
      </div>
      <Menu title={"Menu"} menuObject={ MenuList }/>

      <MenuPlayList/>
      <TrackList/>
    </div>
  )
}

export  {LeftMenu};
