
var start = document.getElementById("start");

var playing = false;
var player = new Audio('music/SLAVA_MARLOW_-_Rasstrelyajj_menya_74440731.mp3');
player.preload = "auto";

start.addEventListener('click',()=>{
    playPause()
});

function playPause() {
    if(playing) {
      player.pause();
      el.innerText = "Paused";
    } else {
      player.play();
      el.innerText = "Playing..";
    }
    playing = !playing;
  }