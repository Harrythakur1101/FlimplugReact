import React from 'react'
import { FaHome ,FaSearch } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { IoExitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Focusable } from "react-js-spatial-navigation";

function SideBar() {

    const onclick=(e)=>{
        setTimeout(() => {
            // console.log(e.target.childNodes[0])
            e.target.childNodes[0].click()
           }, 100)
    }
    const focused=()=>{
       
        document.querySelectorAll(".sideText")[0].style.display="initial";
        document.querySelectorAll(".sideText")[1].style.display="initial"
        document.querySelectorAll(".sideText")[2].style.display="initial"
        document.querySelectorAll(".sideText")[3].style.display="initial"
        document.querySelector(".sideContent").classList.remove("col-md-1")
        document.querySelector(".sideContent").classList.add("col-md-3")
        document.querySelector(".mainContent").classList.remove("col-md-11")
        document.querySelector(".mainContent").classList.add("col-md-9")


        
    }
    const Blur=()=>{
       
        document.querySelectorAll(".sideText")[0].style.display="none";
        document.querySelectorAll(".sideText")[1].style.display="none"
        document.querySelectorAll(".sideText")[2].style.display="none"
        document.querySelectorAll(".sideText")[3].style.display="none"
        document.querySelector(".sideContent").classList.remove("col-md-3")
        document.querySelector(".sideContent").classList.add("col-md-1")
        document.querySelector(".mainContent").classList.remove("col-md-9")
        document.querySelector(".mainContent").classList.add("col-md-11")

    }
    const exit=()=>{
        window.close();
    }

    return (

        <div className="sidebar">
            {/* <header>My App</header> */}
            <ul>
                
                <li >
                <Focusable onClickEnter={onclick} onFocus={focused} onUnfocus={Blur}>
                <Link  to="/"><FaHome className="icons" size={35}/> <span className="sideText"> Home </span></Link>
                </Focusable>
                </li>
                

                <li>
                <Focusable onClickEnter={onclick} onFocus={focused} onUnfocus={Blur}>

                <Link to="search"><FaSearch className="icons" size={35} /> <span className="sideText">Search </span></Link>
                </Focusable>

                </li>
                
                <li>
                <Focusable onClickEnter={onclick} onFocus={focused} onUnfocus={Blur}>
                <Link to="favorites"><MdFavorite className="icons" size={35} /> <span className="sideText">Favorites </span></Link>
                
                </Focusable >
                
                </li>
                <Focusable onClickEnter={exit} onFocus={focused} onUnfocus={Blur}>
                <li>
                <Link to="#"><IoExitOutline className="icons" size={35} /> <span className="sideText">Exit </span></Link>
                </li>
                </Focusable>

            </ul>
        </div>
    )
}

export default SideBar