document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.querySelectorAll('.video-item');
    const mainVideo = document.getElementById('main-video');
    const videoSource = document.getElementById('video-source');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');

    playlist.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-src');
            const title = item.getAttribute('data-title');
            const description = item.getAttribute('data-description');
            
            videoSource.setAttribute('src', src);
            mainVideo.load();
            mainVideo.play();
            videoTitle.textContent = title;
            videoDescription.textContent = description;

            // Highlight the selected video item
            playlist.forEach(vid => vid.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
