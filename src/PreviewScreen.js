import React, {useState,useEffect} from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import { useLocation,useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import bg from './img/banner_img.jpeg'; 
import MovieSection from './MovieSection';
import MovieRow from './MovieRow';
import { IoExitOutline, IoPlaySharp  } from "react-icons/io5";
import { Focusable } from "react-js-spatial-navigation";
import {MdFavorite} from "react-icons/md"

import axios from 'axios';
import Favorites from './Favorites';

function PreviewScreen() {
    var existingEntries;
    const details=useLocation()
    const history = useHistory ();
    const detail=details.movieDetails;
    const location=useLocation()
    let currentPage=true
    
    // const movieDetails=location.movieDetails;
    var obj

    function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}
    secondsToTime(detail.length)


// Axios call
   
    const [episodes, setEpisodes]=useState([]);
    
    var filtered=[];
    var episodeRow=[];
    
    // Fav-------List
    var favList=[];
    const [favorites,setFavorites]=useState([])
    var isFav=false;


    useEffect(()=>{
        
        async function fetchData(){
            const request= await axios.get('https://trlxfr.com/admin/data/feeds/sdk/film_plug_prod_v1');
            setEpisodes(request.data.episodes)
             setFavorites(JSON.parse(localStorage.getItem("favorites-list") || []) )

             

            return request;
        }
        fetchData();



    },[])

console.log(location.pathname.includes("Preview"))
     document.addEventListener('keydown',(e)=>{
        console.log(e)
        if(e.keyCode=="10009"){ 
            if(location.pathname=="/PreviewScreen"){                               //back button
            // if(currentPage==true){
            history.push("/");
            currentPage=false
            // }
            }
        }
        if(e.keyCode=="8"){  
            if(location.pathname=="/PreviewScreen"){                              //back button
            if(currentPage==true){
            history.push("/");
            currentPage=false
            }
            }
        }
    })

    const checkFav=favorites.filter((fav)=>{
        return fav.title==detail.title;
    })
    if (checkFav.length>0) {
        isFav=true;
    }
    else{
        isFav=false;
    }



    
    var epiList=[]
    var isEpi=false;
    detail.seasons || detail.episodes ? isEpi=true : isEpi=false ;
    if (isEpi && detail.seasons ) {
        epiList=detail.seasons[0].episodes
      
    }
    else{
        epiList=detail.episodes;
    }
    if (isEpi && epiList.length>0) {
        episodeRow=epiList.map((episodeList)=>{
            return filtered= episodes.filter((item)=>{
                return item.id===episodeList;
            })
        })
    }
    episodeRow=[].concat.apply([], episodeRow)

            const onclick=(e)=>{
                setTimeout(() => {
                    
                    e.target.childNodes[1].click()
                }, 1000)
            }
            const updateFavorite=(e)=>{
                
                if (favorites.filter((fav)=>{return fav.title==e.title}).length==0 )
                 {
                  setFavorites(prevState=>[...prevState,e])
                  existingEntries = JSON.parse(localStorage.getItem("favorites-list"));
                  if(existingEntries == null) existingEntries = [];
                  existingEntries.push(e)
                  localStorage.setItem("favorites-list", JSON.stringify(existingEntries));
                  // updateLocal(JSON.stringify(favorites))
                  
                }
                else{
                    existingEntries=JSON.parse(localStorage.getItem("favorites-list"));
                    console.log(existingEntries)
                    localStorage.setItem("favorites-list", JSON.stringify(existingEntries.filter((fav)=>{return e.title!=fav.title})))
                    // console.log(existingEntries.filter((fav)=>{return e.title!=fav.title}))
                    setFavorites(existingEntries.filter((fav)=>{return e.title!=fav.title}))
                }
               
               
              }
    return (
        <div>
            {/* PreviewInfo */}
            <Container fluid className="preview_container" style={{backgroundImage:`linear-gradient(to bottom, rgba(245, 246, 252, 0.342), rgba(0, 0, 0, 0.73)), url('${detail.sdPosterUrl}')`,     backgroundPosition: "center",
                        backgroundSize:"cover",backgroundRepeat: "no-repeat"}}>
                <Row className="preview_row">
                    <Col className="preview_info">
                    <h1>
                        {detail.title}
                    </h1>
                    <h3> { isEpi? "" : obj.h +"h"+ obj.m+"min |" } {detail.genres[0]}</h3>
                  
                    <h2 > {detail.description}</h2>
                  
                    {isEpi && detail.seasons ? <Link className='play' to={{pathname:"/player", url : detail.url}} > Season {detail.seasons[0].seasonNumber}</Link> : isEpi!=true ? <Focusable onClickEnter={onclick} className="playFocus"> <Link className='play' to={{pathname:"/player", url : detail.url}}> <IoPlaySharp className="iconPlay" size={25}/> Play </Link></Focusable>:""}
                   
                    <Focusable onClickEnter={()=>{updateFavorite(detail)}} className="playFocus mt-4"> <Link className='play' to={{pathname:"#", url : detail.url}}> <MdFavorite className='favBtn' color={isFav?"red":"white"} size={25}/> Favorite </Link></Focusable>
               
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>

                {isEpi && <h1>Episodes</h1>}
                <div className="row_posters" style={{flexWrap:'nowrap'}}>
                    { isEpi===true ? episodeRow.map((epi,key)=>{return <Focusable  onClickEnter={onclick} style={{width:"10% !important",display:" inline-block"}}> <Link key={episodes[0].id} to={{pathname:"/Player", movieUrl:episodes[0].url}}> <img className="row_poster" key={key}   src={epi.sdPosterUrl}/> </Link></Focusable>}) :"" }
 
                </div>



                {/* <Row className="previewMovies">
                {episodeList && <h1>Episodes</h1>}
                    {

                        episodes.length>0 && episodeRow.map((episodes)=>{
                            console.log(episodeRow)
                                    
                            return  <Link key={episodes[0].id} to={{pathname:"/Player", movieUrl:episodes[0].url}}> <img  className="row_poster" key={episodes[0].id} src={episodes[0].sdPosterUrl} alt={episodes[0].title}/> </Link>

                            })
                    // episodeRow.length>0 && episodeRow.map((movie_list)=>{
                    // return  <Link key={movie_list[0].id} to={{pathname:"/Player", movieUrl:movie_list[0].url}}> <img  className="row_poster" key={movie_list[0].id} src={movie_list[0].sdPosterUrl} alt={movie_list[0].title}/> </Link>
                    // })
                    
                    }


                </Row> */}
            </Container>
            {/* MovieRow */}
        </div>
    )
}

export default PreviewScreen;
