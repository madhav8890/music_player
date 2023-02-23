import React from 'react'
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'
import { FaDesktop, FaCompactDisc } from 'react-icons/fa';


function TrackList() {
  return (
    <div className="trackList">
        <div className='top'>
           <i className='imgtarck'><FaCompactDisc/></i>
            <p className='trackName'>Sample name <span className='tracSpan'>Artist</span></p>
        </div> 
        <div className="bottom">
            <i><BsFillVolumeUpFill/></i>
            <input type='range'/>
            <i>
                <BsMusicNoteList/>
            </i>
            <i>
                <FaDesktop/>
            </i>
        </div>
    </div>
  )
}

export {TrackList};