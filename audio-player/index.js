// PLAY-PAUSE BUTTON

const btn = document.querySelector('.play-pause');
const audio = document.querySelector('.audio');
let isPlay = false;

function playPause() {
    if (!isPlay) {
        btn.src = './assets/svg/pause.png';
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    } else {
        btn.src = './assets/svg/play.png';
        audio.pause();
        isPlay = false;
    }
}

btn.addEventListener('click', playPause);

