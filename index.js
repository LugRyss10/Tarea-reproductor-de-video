var video = document.getElementById('videoPlayer');
let volumen = document.getElementById('volume-slider');

volumen.addEventListener("change", function(e) {
video.volumen = e.currentTarget.value / 100;
})

function playPause() { 
    if (video.paused) 
    video.play(); 
    else 
    video.pause(); 
}

function reload() { 
    video.load(); 
}