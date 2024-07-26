document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Channel 1', link: 'https://example.com/embed/channel1' },
        { name: 'Channel 2', link: 'https://example.com/embed/channel2' },
        { name: 'Channel 3', link: 'https://example.com/embed/channel3' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channels');
    const liveStream = document.getElementById('liveStream');

    channels.forEach(channel => {
        const li = document.createElement('li');
        li.textContent = channel.name;
        li.addEventListener('click', () => {
            liveStream.src = channel.link;
        });
        channelList.appendChild(li);
    });

    // Set the default channel
    if (channels.length > 0) {
        liveStream.src = channels[0].link;
    }
});
