// SWITCH AUDIO BUTTON

const btn = document.querySelector('.button');
const audio = document.querySelector('.audio');
const shadow = document.querySelector('.shadow');;
let isPlay = false;

function playAudio() {
    isPlay = true;
    shadow.classList.remove('active');
    btn.classList.add('pause');
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    isPlay = false;
    shadow.classList.add('active');
    btn.classList.remove('pause');
    audio.pause();
}

function switchAudioBtn() {
    (!isPlay) ? playAudio() : pauseAudio();
}

btn.addEventListener('click', switchAudioBtn);

// CHANGE TRACK

const AUDIO_DIR = './assets/audio/';
const AUDIO_FORMAT = '.mp3';
const IMG_DIR = './assets/img/';
const IMG_FORMAT = '.jpg';
const audioTitles = document.querySelectorAll('[data-audio-title]');
const main = document.querySelector('.main');

function changeTrack(e) {
    document.querySelector('.nav-item.active').classList.remove('active');
    e.target.classList.add('active');
    let title = e.target.dataset.audioTitle;
    audio.src = AUDIO_DIR + title + AUDIO_FORMAT;
    main.style.backgroundImage = `url(${IMG_DIR + title + IMG_FORMAT})`;
    playAudio();
}

audioTitles.forEach(el => el.addEventListener('click', changeTrack));

// // CHANGE TRACK 2

// const AUDIO_DIR = './assets/audio/';
// const AUDIO_FORMAT = '.mp3';
// const IMG_DIR = './assets/img/';
// const IMG_FORMAT = '.jpg';
// const TRACKS = ['forest', 'solovey', 'drozd', 'zarynka', 'javoronok', 'slavka'];
// const items = Array.from(document.querySelectorAll('.nav-item'));
// const audioTitles = document.querySelectorAll('[data-audio-title]');
// const main = document.querySelector('.main');

// function changeTrack(e) {
//     document.querySelector('.nav-item.active').classList.remove('active');
//     e.target.classList.add('active');
//     let item = e.target;
//     audio.src = AUDIO_DIR + TRACKS[items.indexOf(item)] + AUDIO_FORMAT;
//     main.style.backgroundImage = `url(${IMG_DIR + TRACKS[items.indexOf(item)] + IMG_FORMAT})`;
//     playAudio();
// }

// audioTitles.forEach(el => el.addEventListener('click', changeTrack));