let audio = document.getElementById("audio");
let play_pause_div = document.getElementById("play_pause");
let image = document.getElementById("img");
let is_playing = false;

let all_songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
];

let all_images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
];

let current_song = 0;
let current_image = 0;

let pause_icon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="18px" width="18px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"></path> <path opacity="0.5" d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"></path> </g></svg>';

let play_icon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="18px" width="18px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"></path> </g></svg>'

function play_audio() {
    audio.play();
    play_pause_div.innerHTML = pause_icon;
};

function pause_audio() {
    audio.pause();
    play_pause_div.innerHTML = play_icon;
};

function play_pause() {
    if (is_playing == true) {
        pause_audio();
    }else {
        play_audio();
    }
    is_playing = !is_playing;
};

function next_song() {
    if (current_song == 4) {
        current_song = 0;
    }else {
        current_song = current_song + 1;
    }

    image.src = "images/" + all_images[current_image];
    audio.src = "songs/" + all_songs[current_song];

    audio.play();
};

function prev_song() {
    if (current_song == 0) {
        current_song = 4;
    }else {
        current_song = current_song - 1;
    };

    image.src = "images/" + all_images[current_image]
    audio.src = "songs/" + all_songs[current_song];
    audio.play();
};