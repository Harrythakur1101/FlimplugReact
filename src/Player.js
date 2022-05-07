// import React from 'react'
// import { useLocation } from 'react-router'
// import { useHistory } from "react-router-dom";

// var isPaused=false;

// function Player() {
//   var tvKey = {
// 		N1: 49,
// 		N2: 50,
// 		N3: 51,
// 		N4: 52,
// 		N5: 53,
// 		N6: 54,
// 		N7: 55,
// 		N8: 56,
// 		N9: 57,
// 		N0: 48,
// 		PRECH: 10190,
// 		VOL_UP: 448,
// 		VOL_DOWN: 447,
// 		MUTE: 449,
// 		CH_UP: 427,
// 		CH_DOWN: 428,
// 		TOOLS: 10135,
// 		ENTER: 13,
// 		RETURN: 10009,
// 		INFO: 457,
// 		EXIT: 10182,
// 		UP: 38,
// 		DOWN: 40,
// 		LEFT: 37,
// 		RIGHT: 39,
// 		RED: 403,
// 		GREEN: 404,
// 		YELLOW: 405,
// 		BLUE: 406,
// 		RW: 412,
// 		PAUSE: 19,
// 		FF: 417,
// 		REC: 416,
// 		PLAY: 415,
// 		STOP: 413,
// 		PLAYPAUSE: 10252
// 	};
//   const history = useHistory()
//     document.addEventListener("keydown", (e)=>{
//       console.log(e.keyCode)


      
//       if(e.keyCode=="10009"){
//         // console.log("closed")
//         // window.webapis.avplay.play();
//         window.webapis.avplay.close();
//         history.push("/");
//         document.querySelector(".sidebar").style.display = 'initial';
// 		document.querySelector(".mainContent").style.position = 'relative';
//       }
//       if(e.keyCode=="13"){
//         console.log("closed")
//         // window.webapis.avplay.play();
//         if (isPaused) {
//           window.webapis.avplay.play();
//           isPaused=false;
//         }
//         else{
//           window.webapis.avplay.pause();
//           isPaused=true;
//         }
        
//       }
//       if(e.keyCode=="39"){
//         // window.webapis.avplay.seekTo(20000)
// 		var duration = window.webapis.avplay.getDuration();
// 		//Jump forward by 20000 ms
// 		var time = 60*1000;
// 		var currentTime = window.webapis.avplay.getCurrentTime();
// 		var newTime = currentTime + time;
		
// 		if(newTime < duration) {
// 			window.webapis.avplay.seekTo(newTime);
// 		} else {
// 			window.webapis.avplay.seekTo(duration);
// 		}
//       }
// 	  if(e.keyCode=="37"){
// 		var time = 60*1000;
// 		var currentTime = window.webapis.avplay.getCurrentTime();
// 		var newTime = currentTime -time;
		
// 		if(newTime > 0) {
// 			window.webapis.avplay.seekTo(newTime);
// 		} else {
// 			window.webapis.avplay.seekTo(0);
// 		}
//       }

//     })
//     document.querySelector(".sidebar").style.display = 'none';
//     document.querySelector(".mainContent").style.position = 'absolute';

//     const url=useLocation()
//     var source=url.url;
// 	console.log(source)
  
//       window.webapis.avplay.open(source)
//       window.webapis.avplay.setDisplayRect(0,0,window.innerWidth,window.innerHeight);
//       window.webapis.avplay.prepare();
//       window.webapis.avplay.play();



//     return (


 
// <object className="player_object" type="application/avplayer"></object>
     

//     )
// }

// export default Player;
