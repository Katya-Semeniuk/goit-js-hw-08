import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function videoTime(data) {
    localStorage.setItem('videoplayer-current-time', 1000)
};

videoTime(data)

player.on('timeupdate', throttle(videoTime, 1000)) ;


 function checkcurrentTime() {
     const currentTime = localStorage.getItem('videoplayer-current-time')
     console.log(currentTime)
     const parseCurrentTime = JSON.parse(currentTime)
     
  
if (parseCurrentTime === "")
    return;
else (
    player.setCurrentTime(parseCurrentTime)
    )
 }
checkcurrentTime()