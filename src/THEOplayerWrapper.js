import React from "react";
import './THEOplayerWrapper.css';

class Player extends React.Component {
    _player = null;
    _el = React.createRef();


    componentDidMount() {
        // props like the source, or the sourcedesciption as a whole can be passed through
        // the can then be used to be called on the player itself
        const { source, onPlay,setPlay } = this.props;

        if (this._el.current) {
            this._player = new window.THEOplayer.Player(this._el.current, {
                libraryLocation: "https://cdn.myth.theoplayer.com/f53d2df4-8b1e-4a1b-8fdc-878a8f60bf75",
                license: "sZP7IYe6T6fkIQ3eCLfZ0Ok6ClBoFSak0o0-CDBZCmzc0uhZIu0i3SaLCKf6FOPlUY3zWokgbgjNIOf9fK0_IS4K3oX6FDXgISR-3Qfk3Ok6IDXKFS1KCKXe0lI1Il463OfVfK4_bQgZCYxNWoryIQXzImf90SCt3lR_3Lfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3laL0ufLTS0z0u0ZFOPeWok1dDrLYtA1Ioh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfKxqWDXNWG3ybojkbK3gflNWf6E6FOPVWo31WQ1qbta6FOPzdQ4qbQc1sD4ZFK3qWmPUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz",
            });

            // var element = document.querySelector('.theoplayer-tizen');
            // var player = new window.THEOplayer.Player(element, {
            //     fluid: true,
            //     libraryLocation: "https://cdn.myth.theoplayer.com/52b49363-ff72-40b8-b2b4-42b0278d9007",
            //     license: "https://cdn.myth.theoplayer.com/52b49363-ff72-40b8-b2b4-42b0278d9007",
            // });

            this._player.source = source;
            this._player.addEventListener('play', onPlay);
            var player=this._player
            player.preload = 'auto';
            player.play()
            console.log(player.presentation.currentMode)
            // player.presentation.currentMode ="fullscreen"
            // if (player.presentation.currentMode != 'fullscreen') {
            //     player.presentation.requestMode('fullscreen');
            //     }
            function togglePlay() {
                if (player.paused) {
                    player.play();
                    setPlay(true)

                } else {
                    player.pause();
                    setPlay(false)
                   
                }
            }
            function toggleFullScreen() {
                if (player.presentation.currentMode === 'fullscreen') {
                     player.presentation.requestMode('inline');
                } else {
                    player.presentation.requestMode('fullscreen');
                }
            }
            function rewind() {
                player.currentTime -= 10; //Subtracts 10 seconds
            }
            
            function forward() {
                player.currentTime += 10; //Adds 10 seconds
            }
            function fastForward() {
                player.currentTime += 30; //Adds 30 seconds
            }
            function fastbackward() {
                player.currentTime -= 30; //minus 30 seconds
            }
            

        
            function getPressedKey(event) {
                const pressedKey = event.keyCode;
                let action;
                if (pressedKey===13) {
                    if (document.querySelector(".active")) {
                        document.querySelector(".active").click()
                    }
                    else{

                        action = togglePlay();
                    }
                    
                    
                }
                if (pressedKey===37) {
                    action = rewind();
                    document.querySelector(".backward").style.opacity="1"
                    setTimeout(()=>(document.querySelector(".backward").style.opacity="0"),2000)
                }
                if (pressedKey===39) {
                    action = forward();  
                    document.querySelector(".forward").style.opacity="1"
                    setTimeout(()=>(document.querySelector(".forward").style.opacity="0"),2000)

                }
                if (pressedKey==19) {
                    player.pause();
                }
                if (pressedKey==415) {
                    player.play();
                }
                if (pressedKey==417) {
                    action = fastForward();
                }
                if (pressedKey==412) {
                    action=fastbackward();
                }
                if (pressedKey==38) {
                    
                    document.querySelector(".vjs-play-control").classList.add("active")   
                }
                if (pressedKey==40) {
                    document.querySelector(".vjs-play-control").classList.add("active")
                    


                }
                
            }
            function playerFocused() {
                    
                    document.querySelector('.theoplayer-container').focus()
                    document.querySelector(".theoplayer-container").addEventListener('keydown', getPressedKey);
            }
            setTimeout(playerFocused(),10)
            // playerFocused()
        }
    }

    componentWillUnmount() {
      if (this._player) {
        this._player.destroy();
      }
    }
    

    render() {
        
       
        return ( <
            div
            // vjs-16-9 THEOplayer are not necessary, but just added for demo purposes
            className = { "theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" }
            // The ref prop here is key it returns the actual dom element and not the virtual react dom elements
            // Which is need by the player
            ref = { this._el }
            />
        );
    }
}

export default Player;
