import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Focusable } from "react-js-spatial-navigation";
function MovieRow({title ,movie_list}) {
    const [banner,setBanner]=useState({title:"",description_long:""})
   
    
    const onclick=(e)=>{
        e.target.childNodes[1].click()
        

    }
    const focused=(e)=>{
        var dataImg=e.target.childNodes[1].attributes[0].nodeValue;
        var movieInfo=movie_list.filter((movie)=>{
            return movie.id==dataImg
        })
      
       
       document.querySelector(".banner_title").innerHTML=movieInfo[0].title;
       document.querySelector(".bannerImg").src=movieInfo[0].sdPosterUrl;
    }
    if (movie_list.length>0) {
        return (


            <div>
                <h1>{title}</h1>
                <div className="row_posters">
    
                    {movie_list.map((movie_list)=>{
                    return <Focusable onFocus={focused} onClickEnter={onclick}>  <Link img-data={movie_list.id} className="home" key={movie_list.id} to={{pathname:"/PreviewScreen", movieDetails:movie_list}}>  <img  className="row_poster" key={movie_list.id} src={movie_list.sdPosterUrl} alt={movie_list.title}/> </Link> </Focusable>
                    })}
                
                
                </div>
            </div>
        )
    }
    else{
        return null
    }

   
}

export default MovieRow;
