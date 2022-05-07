// import React from 'react'
// import {useLocation} from "react-router"
// import { useHistory } from "react-router-dom";
// function TheoPlayer() {
//     const history = useHistory()
//     const url=useLocation()
//     var sourceUrl=url.movieDetails.movie_url;


  
    
//     setTimeout(()=>{
//         var element = document.querySelector('.theoplayer-tizen');
//         var player = new window.THEOplayer.Player(element, {
//             fluid: true,
//             libraryLocation: "https://cdn.myth.theoplayer.com/tizen/e937ae51-1786-47db-a9e8-24e400c22238",
//                     license: "sZP7IYe6T6fo3Q0r0L0iI6zoCL5kFSxKIKB-TDaz3mziCSUe0LIgCL3gISb6FOPlUY3zWokgbgjNIOf9fK0_IS4K3oX6FDXgISR-3Qfk3Ok6IDXKFS1KCKXe0lI1Il463OfVfK4_bQgZCYxNWoryIQXzImf90SCz0SRiTuRi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l0o3lBtTuh_3lCkFOPeWok1dDrLYtA1Ioh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfKxqWDXNWG3ybojkbK3gflNWf6E6FOPVWo31WQ1qbta6FOPzdQ4qbQc1sD4ZFK3qWmPUFOPLIQ-LflNWfGxNsK4pfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz",
//         });
    
        
//         document.querySelector(".sideColumn").style.display = 'none';
//         document.addEventListener("keydown", (e)=>{
//             if(e.keyCode=="10009"){
//                 // console.log("closed")
//                 // window.webapis.avplay.play();
//               player.destroy()
//                 history.push("/");
//             document.querySelector(".sideColumn").style.display = 'initial';
    
//                 document.querySelector(".sidebar").style.display = 'initial';
//                 document.querySelector(".mainContent").style.position = 'relative';
//               }
//               if(e.keyCode=="8"){
//                 // console.log("closed")
//                 // window.webapis.avplay.play();
//                 // history.push("/");
//               player.destroy()

//                 history.push("/")
//                 document.querySelector(".sideColumn").style.display = 'initial';
    
//                 document.querySelector(".sidebar").style.display = 'initial';
//                 document.querySelector(".mainContent").style.position = 'relative';
//               }
//         })



//         player.source = {
//             sources: [
//                 {
//                 src: sourceUrl
//                 }],

//                 ads:[
//                     {
//                         "sources": "https://adserver.gtvads.com/video/b/5978847fc504310edccb289f30ecd367?appName=glewedtv&bundleId=G19311013979&ifa={ifa}&width=1920&height=1080&cb={cb}",
//                         "timeOffset": "start"
//                       },
//                       {
//                         "sources": "https://adserver.gtvads.com/video/b/5978847fc504310edccb289f30ecd367?appName=glewedtv&bundleId=G19311013979&ifa={ifa}&width=1920&height=1080&cb={cb}",
//                         "timeOffset": "00:12:15"
//                       },
//                       {
//                         "sources": "https://adserver.gtvads.com/video/b/5978847fc504310edccb289f30ecd367?appName=glewedtv&bundleId=G19311013979&ifa={ifa}&width=1920&height=1080&cb={cb}",
//                         "timeOffset": "00:24:30"
//                       },
//                       {
//                         "sources": "https://adserver.gtvads.com/video/b/5978847fc504310edccb289f30ecd367?appName=glewedtv&bundleId=G19311013979&ifa={ifa}&width=1920&height=1080&cb={cb}",
//                         "timeOffset": "end"
//                       }
//                 ]
            
//           };
    
//         player.preload = 'auto';
//         player.play()

//         new window.ReferenceApp.ExampleUI(player);
        


//         // EventListeners
//         function togglePlay() {
//             console.log(player.paused)
//         }
//         function toggleFullScreen() {
//             if (player.presentation.currentMode === 'fullscreen') {
//                  player.presentation.requestMode('inline');
//             } else {
//                 player.presentation.requestMode('fullscreen');
//             }
//         }
//         function rewind() {
//             player.currentTime -= 5; //Subtracts 5 seconds
//         }
        
//         function forward() {
//             player.currentTime += 5; //Adds 5 seconds
//         }
        
//         function increaseVolume() {
//             player.volume = Math.min(player.volume + 0.05, 1); 
//         }
        
//         function decreaseVolume() {
//             player.volume = Math.max(player.volume - 0.05, 1); //Lowers volume by 5%
//         }
    
        
//         function toggleMute() {
//             player.muted = !player.muted;
//         }
//         function getPressedKey(event) {
//             const pressedKey = event.keyCode;
//             let action;
//             if (pressedKey===13) {
//                 action = togglePlay();
//                 console.log(pressedKey)
//             }
//             if (pressedKey===37) {
//                 action = rewind();
//             }
//             if (pressedKey===39) {
//                 action = increaseVolume(); 
//                 console.log("Increse") 

//             }
//             if (pressedKey===40) {
//                 action = decreaseVolume();
//                 console.log("Decrease") 
//             }
//         }
//         document.addEventListener('keydown', getPressedKey);
//     },1000)
    
//     return (
//             <div class='theoplayer-tizen theo-hide-controls'>
//                 <div class="theo-menu-right"></div>
//                 <div class="theo-top-control-bar">
//                     <div class="theo-top-control-wrapper">
//                         <div class="theo-icon-subtitles theo-icon"></div>
//                         <div class="theo-icon-audio theo-icon"></div>
//                     </div>
//                 </div>
//                 <div class="theo-big-play-button"></div>
//                 <div class="theo-spinner"></div>
//                 <div class="theo-bottom-control-bar">
//                     <div class="theo-bottom-control-wrapper">
//                         <div class="theo-play-pause-button theo-icon"></div>
//                         <div class="theo-current-time"></div>
//                         <div class="theo-progress-bar">
//                             <div class="theo-current-progress"></div>
//                         </div>
//                         <div class="theo-duration"></div>
//                     </div>
//                 </div>
//                 <div class='theo-seek-display hidden'>
//                     <div class="theo-speed-display">
//                         <div class="theo-speed-number"></div>
//                         <div class="theo-speed-arrows"></div>
//                     </div>
//                     <strong class="theo-time-to-seek-to"></strong>
//                 </div>
//                 <div class="theo-overlay hidden"></div>
//             </div>
//     )
// }

// export default TheoPlayer
