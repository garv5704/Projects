let song = document.getElementById("song")
let progress = document.getElementById("progress")
let icon = document.getElementById("icon")
let reload = document.getElementById("reload")
let time = document.getElementById("time")


//on-loading conditions
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;

    setInterval(() => {

        let minutes = Math.floor(song.currentTime / 60)
        
        let seconds = Math.floor(song.currentTime % 60)
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds

        time.innerHTML = `${minutes}:${formattedSeconds}`
    }, 1000);

}


//function on button for reloading the song.
let reloadthis = () => {
    song.currentTime = 0
    song.play()

    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
}

//updation of progress bar in every 5 milli-seconds.
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

//changing song on clicking progress bar
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value

    icon.classList.remove("fa-play")
    icon.classList.add("fa-pause");
}

//function on PlayButton
function playSong() {
    if (icon.classList.contains("fa-pause")) {
        song.pause();

        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play")
    }
    else {
        song.play();

        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    }
}