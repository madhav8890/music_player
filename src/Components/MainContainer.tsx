import React, {useEffect} from 'react'
import "../Styles/MainContainer.css";
import { FaUsers } from 'react-icons/fa';
import Banner from './Banner';
import { AudioList } from './AudioList';

export default function MainContainer() {
  useEffect(()=> {
    const allLi = document.querySelector('.menuList')?.querySelectorAll("li");

    function changeMenuActive( this :any){
      allLi?.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      
    }
    allLi?.forEach(n=>n.addEventListener('click', changeMenuActive))
  }, [])
  return (
    <div className='mainContainer'>
        <Banner/>
        <div className='menuList'>
          <ul>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Albums</a></li>
            <li><a href="#">Songs</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <p><i><FaUsers/></i>12.3M<span> Followers</span></p>
          </div>
          <AudioList/>
    </div>
  )
}
