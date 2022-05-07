import React,{useState,useEffect} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import { Focusable } from "react-js-spatial-navigation";
import { useHistory  } from "react-router-dom";
function Search() {
        // var isSelected=true;
        // document.querySelector('#fname').addEventListener('submit', function (e) {
        //     console.log(e);
        //   });
        // document.getElementById("fname").addEventListener("submit",()=>{
        //   console.log("object")
        // })
       
        const [inputChange,setInputChange]=useState(false)
        const [data,setData]=useState([])
        const [query,setQuery]=useState(" ");
        const history = useHistory ()
        useEffect(()=>{
          async function callBack(){
           const request= await axios.get("https://trlxfr.com/admin/data/feeds/sdk/film_plug_prod_v1");
           setData(request.data.movies.concat(request.data.series))
           console.log(request.data.series)
          }      
          callBack()
        },[])
        
        const selectSearchBar=(e)=>{
          e.target.childNodes[0].select()
          
        }
        setTimeout(function(){

          //your code here
          if (document.querySelector("#search")) {
            document.querySelector("#search").addEventListener("keydown",(e)=>{
              if(e.keyCode==40){
                  const input = document.getElementById('search');
                  input.blur()
              }
              else{
                  console.log(false)
              }
               
      
            })
          }
          
         }, 3000);

         document.addEventListener('keydown',(e)=>{
           if(e.keyCode==8){
            history.replace("/");
           }
           if(e.keyCode=="10009"){                                     //back button
            history.replace("/");
        }
         })
        const search=(e)=>{
          setQuery(e.target.value)
          setInputChange(true)
        }
        const onclick=(e)=>{
          e.target.childNodes[0].click()
        }
    return (
    
        <div className="input_seaction">

            
            <div><Focusable onClickEnter={selectSearchBar} ><input autoComplete='off' id="search" placeholder="searching" onChange={search}/></Focusable></div>

              <div className="data">
                {inputChange && query.length>0 && data.filter((val)=>{
                  if (query=="") {
                    return [];
                  }
                  else{
                    return val.title.toLowerCase().includes(query.toLowerCase()) || val.description.toLowerCase().includes(query.toLowerCase()) || val.genres.toString().toLowerCase().includes(query.toLowerCase())
                  }
                }).map(
                  (e,key)=>{
                    return <Focusable onClickEnter={onclick} className="searchResult" ><Link  className="home" key={e.id} to={{pathname:"/PreviewScreen", movieDetails:e}}><img key={key} className="searchImg" width="300px" style={{padding:"50px"}} src={e.fhdPosterUrl || e.sdPosterUrl || e.hdPosterUrl }/></Link></Focusable> 
                  }
                )}
              </div>
        
        </div>
        

       
    )
}

export default Search
