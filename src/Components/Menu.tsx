import React, {useEffect} from 'react';

function Menu(props: any) {
  console.log("hheell", props.title)

  useEffect(()=> {
    const allLi = document.querySelector('.MenuContainer ul')?.querySelectorAll("li");

    function changeMenuActive( this :any){
      allLi?.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      
    }
    allLi?.forEach(n=>n.addEventListener('click', changeMenuActive))
  }, [])
  return (

    <div className="MenuContainer">
      <p className="title">{props.title}</p>
      <ul>
        {
          props.menuObject &&
          props.menuObject.map((menu:any)=>(
            <li key={menu.id}>
              <a href="#">
              <i>{menu.icon}</i>
              <span>{menu.name}</span>
            </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { Menu};