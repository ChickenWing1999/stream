document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    const videoData = [
        {
            link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
            title: 'Video 1'
        },
        {
            link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg',
            title: 'Video 2'
        }
        // Add more video objects here...
    ];

    videoData.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <div class="thumbnail" style="background-image: url('${video.thumbnail}');"></div>
            <iframe src="${video.link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="overlay">${video.title}</div>
        `;
        gallery.appendChild(videoItem);
    });
});
