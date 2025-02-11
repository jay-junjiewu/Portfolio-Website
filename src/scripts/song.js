// For song button
const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('backgroundAudio');

playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Stop Playing \"Around the World\" - Daft Punk";
    } else {
        audio.pause();
        playPauseButton.textContent = "Start Playing \"Around the World\" - Daft Punk";
    }
});