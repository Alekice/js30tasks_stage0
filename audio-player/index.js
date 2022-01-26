// PLAY-PAUSE BUTTON

const btn = document.querySelector('.play-pause');
const audio = document.querySelector('.audio');
const background = document.querySelector('.background');
const thumbnail = document.querySelector('.thumbnail');
let isPlay = false;

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
}

btn.addEventListener('click', playPause);

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

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const AUDIO_DIR = './assets/audio/';
const IMG_DIR = './assets/img/';
let songArtist = document.querySelector('.song-artist');
let songTitle = document.querySelector('.song-title');
let index = 0;
let lastIndex = SONGS.length - 1;

// PREVIOUS SONG

function prevSong() {
    if (index === 0) {
        index = lastIndex;
    } else {
        index--;
    }

    changeSongDetails();
    isPlay = false;
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
    isPlay = false;
    playPause();
}

// CHANGE SONG DETAILS

function changeSongDetails() {
    background.src = IMG_DIR + SONGS[index].thumbnail;
    thumbnail.src = IMG_DIR + SONGS[index].thumbnail;
    audio.src = AUDIO_DIR + SONGS[index].track;
    songArtist.innerHTML = SONGS[index].artist;
    songTitle.innerHTML = SONGS[index].title;
}

console.log(SONGS.findIndex(el => el.artist === songArtist));

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);