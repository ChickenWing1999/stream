document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Cartoonito', link: 'https://player.livepush.io/emv5POxKMYWPB' },
        { name: 'TV5 HD', link: 'https://player.livepush.io/emvjUNWUzuU2J' },
        { name: 'ANC HD', link: 'https://player.livepush.io/emvptOp3hIomK' },
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
