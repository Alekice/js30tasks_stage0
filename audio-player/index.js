const SONGS = [
    {
        artist: 'Beyonce',
        title: "Don't hurt yourself",
        track: 'beyonce.mp3',
        thumbnail: 'lemonade.png'
    },
    {
        artist: 'Dua Lipa',
        title: "Don't start now",
        track: 'dontstartnow.mp3',
        thumbnail: 'dontstartnow.png'
    },
    {
        artist: 'Mortal Kombat',
        title: "Main theme",
        track: 'mortal.mp3',
        thumbnail: 'mortal.png'
    }];

const btn = document.querySelector('.play-pause');
const audio = document.querySelector('.audio');
const background = document.querySelector('.background');
const thumbnail = document.querySelector('.thumbnail');
let isPlay = false;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const AUDIO_DIR = './assets/audio/';
const IMG_DIR = './assets/img/';
let songArtist = document.querySelector('.song-artist');
let songTitle = document.querySelector('.song-title');
let index = 0;
let lastIndex = SONGS.length - 1;

const progressBar = document.querySelector('.progress-bar');

const currentTimeText = document.querySelector('.currentTime');
const durationTime = document.querySelector('.durationTime');

// GET TIME

function getTime(num) {
    let min = Math.floor(Math.floor(num) / 60);
    let sec = Math.floor(num) % 60;
    if (sec === 0 || sec < 10) {
        sec = '0' + sec;
    }
    return `${min}:${sec}`;
}

// CHANGE PROGRESS BAR

function changeProgressBarBackground() {
    progressBar.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) ${progressBar.value}%, var(--black) ${progressBar.value}%, var(--black) 100%)`;
}

function changeProgressBar() {
    // CHANGE AUDIO CURRENT TIME
    audio.currentTime = progressBar.value / 100 * audio.duration;
    currentTimeText.textContent = getTime(audio.currentTime);
    changeProgressBarBackground();
}

progressBar.addEventListener('input', changeProgressBar);

// PLAY-PAUSE BUTTON

function playPause() {
    if (!isPlay) {
        btn.src = './assets/svg/pause.png';
        thumbnail.style.transform = 'scale(1.15)';
        audio.play();
        isPlay = true;
    } else {
        btn.src = './assets/svg/play.png';
        thumbnail.style.transform = 'scale(1)';
        audio.pause();
        isPlay = false;
    }

    // CHANGE CURRENT TIME

    setInterval(() => {
        progressBar.value = audio.currentTime / audio.duration * 100;
        changeProgressBarBackground();
        currentTimeText.textContent = getTime(audio.currentTime);
        if (audio.currentTime === audio.duration) {
            nextSong();
        }
    }, 500);
}

btn.addEventListener('click', playPause);




// PREVIOUS SONG

function prevSong() {
    if (index === 0) {
        index = lastIndex;
    } else {
        index--;
    }

    changeSongDetails();
    audio.onloadedmetadata = () => {
        durationTime.textContent = getTime(audio.duration);
    };
    isPlay = !isPlay;
    playPause();
}

// NEXT SONG

function nextSong() {
    if (index === lastIndex) {
        index = 0;
    } else {
        index++;
    }

    changeSongDetails();
    audio.onloadedmetadata = () => {
        durationTime.textContent = getTime(audio.duration);
    };
    isPlay = !isPlay;
    playPause();
}

// CHANGE SONG DETAILS

function changeSongDetails() {
    background.src = IMG_DIR + SONGS[index].thumbnail;
    thumbnail.src = IMG_DIR + SONGS[index].thumbnail;
    audio.src = AUDIO_DIR + SONGS[index].track;
    songArtist.textContent = SONGS[index].artist;
    songTitle.textContent = SONGS[index].title;
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);