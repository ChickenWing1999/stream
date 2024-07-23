document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    const videoLinks = [
        'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'https://www.youtube.com/embed/tgbNymZ7vqY',
        // Add more video links here...
    ];

    for (let i = 0; i < 100; i++) {
        const videoLink = videoLinks[i % videoLinks.length]; // Cycle through the video links
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <iframe src="${videoLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        gallery.appendChild(videoItem);
    }
});
