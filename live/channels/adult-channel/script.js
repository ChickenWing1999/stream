document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.querySelectorAll('.video-item');
    const mainVideo = document.getElementById('main-video');
    const videoSource = document.getElementById('video-source');

    playlist.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            videoSource.setAttribute('src', src);
            mainVideo.load();
            mainVideo.play();
        });
    });
});
