import React from 'react';
import {useLocation} from "react-router"
import Player from './THEOplayerWrapper';


function PlayerScreen() {
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
    

  return ( 
    <div className="App">
            <div className={"PlayerDiv"}>
                <Player id='PlayerId' source={source}  onPlay={() => {console.log("The player has started playing.")}}/>

            </div>
        
    </div>       
);
}

export default PlayerScreen;
