import Player from "@vimeo/player";

 const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

   
  player.on('timeupdate', function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
});


 function checkcurrentTime() {
     const currentTime = localStorage.getItem('videoplayer-current-time')
     const parseCurrentTime = JSON.parse(currentTime)
     
  
if (parseCurrentTime === "")
    return;
else (
    player.setCurrentTime(parseCurrentTime)
    )
 }
checkcurrentTime()