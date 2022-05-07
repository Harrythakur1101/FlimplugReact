import React from 'react';
import {useLocation} from "react-router";
import { useHistory  } from "react-router-dom";
import {Link} from "react-router-dom"


function Video() {
    const info=useLocation()
    console.log(info)
    const url=info.url
    let source = {
        sources: [{
            src: url,
            // type: 'application/x-mpegURL'
            type: 'video/mp4'
        }]
       
    };
   
    var isPaused=false;
    const history = useHistory ();
    // const navigate = useNavigate ()
    var player;
    setTimeout(()=>{

        player = window.videojs('my-video');
        console.log("play")
        document.querySelector(".sidebar").style.display = 'none';
        document.querySelector(".sideContent").classList.remove("col-md-1")
        document.querySelector(".sideContent").classList.add("col-md-12")
    },0)
   
    setTimeout(()=>{
      player.play()
    },1000)           
    
    // document.querySelector(".video-js").play();
  
    console.log(window)
    document.addEventListener('keydown',(e)=>{
        console.log(e.keyCode)
        console.log(player)
        if (e.keyCode==13){    
        console.log("e.keyCode")
        // ok /enter button
            player.play() || document.querySelector(".video-js").play()
            if (isPaused) {
                player.play();
                isPaused=false;
                }
            else{
                player.pause();
                isPaused=true;
            }

        }    
        if (e.keyCode=="415"){                                       // Media play
            player.play();    
        }
        if (e.keyCode=="19"){                                       // Media pause
            player.pause();    
        }
        if (e.keyCode=="413"){                                       // Media Stop Button
            player.close();    
        }
        if (e.keyCode=="39"){ 
            var time =120;
            var currentTime = player.currentTime();
            console.log("This is our Current Time" + " " +currentTime)
            var newTime = currentTime + time;  
            player.currentTime(newTime);
            console.log( "This is our new TIme " + " " +newTime)
        
        }
        if (e.keyCode=="37"){                                       // Left Arrow Button
            var time =-120;
            var currentTime = player.currentTime();
            console.log("This is our Current Time" + " " +currentTime)
            var newTime = currentTime + time;  
            player.currentTime(newTime);
            console.log( "This is our new TIme " + " " +newTime)    
        }
        if(e.keyCode=="10009"){    
            player.dispose();                                   //back button
            history.replace("/");
            document.querySelector(".sidebar").style.display = 'block';
            document.querySelector(".sideContent").classList.remove("col-md-12")
            document.querySelector(".sideContent").classList.add("col-md-1")  

        }
        if(e.keyCode=="8"){      
            player.dispose();   
            // document.querySelector(".sideContent").classList.remove("col-md-2")
           history.replace("/");
           document.querySelector(".sidebar").style.display = 'block';
           document.querySelector(".sideContent").classList.remove("col-md-12")
           document.querySelector(".sideContent").classList.add("col-md-1")  
        }
    })
    return (
        <div className="App">
        <div className={"PlayerDiv"} >
            <video
            id="my-video"
            class="video-js"
            controls
            loop="true"
            // muted
            // autoPlay
            preload="auto"
            autoPlay="true"
            // poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
            // playbackrates={[0.5,1,3.85,16]}
        >
            <source src={url} type="video/mp4" />
        
        </video>
        </div>
    
        </div>
    )
}
export default Video;