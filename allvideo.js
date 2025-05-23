function playVideo(videoSrc) {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('videoPlayer');
    modal.style.display = 'flex';
    video.src = videoSrc;
    video.play();
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('videoPlayer');
    modal.style.display = 'none';
    video.pause();
    video.src = '';
}

window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
