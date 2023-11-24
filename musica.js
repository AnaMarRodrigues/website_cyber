window.addEventListener("load",function(){


//playlist que ira tocar 
const playlist = [
    "./Better Off Alone.mp3",
    "./A New Kind Of Love (Demo).mp3",  
    "./I'll Do It (Sped Up Version).mp3",
    "./Kiss Me Again (Radio Edit).mp3",
    "./Pink Pantheress - Pain (Official Visualiser).mp3"
];

let currentSongIndex = 0;

const playPauseButton = document.querySelector('.play-pause');
const forwardButton = document.querySelector('.fwd');
const backwardButton = document.querySelector('.bkd');

const audio = document.querySelector('audio');

console.log(playPauseButton);
console.log(forwardButton);
console.log(backwardButton);

playPauseButton.addEventListener('click', togglePlayPause);
forwardButton.addEventListener('click', playNextSong);
backwardButton.addEventListener('click', playPreviousSong);

audio.src = playlist[currentSongIndex];

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.src = "https://cdn2.iconfinder.com/data/icons/snipicons/5000/pause-128.png";
    } else {
        audio.pause();
        playPauseButton.src = "https://cdn2.iconfinder.com/data/icons/snipicons/5000/play-128.png";
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong();
}

function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong();
}

function playSong() {
    audio.src = playlist[currentSongIndex];
    audio.play();
    playPauseButton.src = "https://cdn2.iconfinder.com/data/icons/snipicons/5000/pause-128.png";
}

audio.addEventListener('play', () => {
    playPauseButton.src = "https://cdn2.iconfinder.com/data/icons/snipicons/5000/pause-128.png";
});

audio.addEventListener('pause', () => {
    playPauseButton.src = "https://cdn2.iconfinder.com/data/icons/snipicons/5000/play-128.png";
});

});
