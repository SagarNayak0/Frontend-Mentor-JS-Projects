let audio = document.getElementById("audio");
let is_playing = false;

function play_audio() {
    audio.play();
};

function pause_audio() {
    audio.pause();
};

function play_pause() {
    if (is_playing == true) {
        pause_audio();
    }else {
        play_audio();
    }
    is_playing = !is_playing;
}