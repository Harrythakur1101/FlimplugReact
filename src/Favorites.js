import React from 'react'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Focusable } from 'react-js-spatial-navigation';
 const Favorites = () => {
    const [favorite,setFavorite]=useState([])
    useEffect(()=>{
        setFavorite(JSON.parse(localStorage.getItem("favorites-list")) || [])
        console.log(favorite)
       
    },[])
    const focused=()=>{

    }
    const onclick=(e)=>{
        e.target.childNodes[1].click()
    }

    return (
        <div className='fav-list'>
                {favorite.length==0 && <h1 className='text-center'>No Favorites added to the list</h1>}
            <div className='fav-row'>
            {favorite.map((fav)=>{
                return <Focusable className="fav-item" onFocus={focused} onClickEnter={onclick}>  <Link img-data={fav.id} className="home" key={fav.id} to={{pathname:"/PreviewScreen", movieDetails:fav}}>  <img  className="row_poster fav_poster" key={fav.id} src={fav.sdPosterUrl} alt={fav.title}/> </Link> </Focusable>
            })}
            </div>
        </div>
    )
}
 export default Favorites;