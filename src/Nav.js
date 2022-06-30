import React,{useState,useEffect} from "react"
import "./Nav.css"


function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll",()=>{
        if(window.scrollY <100){
          handleshow(false)
        }else handleshow(true)

      })
    }
  }, []);


  return(
    <div className = {`nav ${show && "nav__black"}`}>
      <img
        className = "nav__logo"
        src= "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt= "Netflix logo"
      />
      <img
        className = "nav__avatar"
        src= "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt= "Netflix avatar"
      />


    </div>
  )
}

export default Nav
