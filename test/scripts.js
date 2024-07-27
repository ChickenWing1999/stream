document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Cinema One', link: 'https://player.livepush.io/emv2fjgAopLGy', type: 'embed' },
        { name: 'Cartoon Network', link: 'https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8', type: 'hls' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channelList');
    const channelUl = document.getElementById('channels');
    const liveStream = document.getElementById('liveStream');
    const searchBox = document.getElementById('searchBox');
    const reminder = document.getElementById('reminder');
    const closeReminder = document.getElementById('closeReminder');
    const overlay = document.getElementById('overlay');
    let hls;

    // Function to load stream based on type
    function loadStream(channel) {
        if (channel.type === 'embed') {
            liveStream.src = channel.link;
            if (hls) {
                hls.destroy();
                hls = null;
            }
        } else if (channel.type === 'hls') {
            if (Hls.isSupported()) {
                if (hls) {
                    hls.destroy();
                }
                hls = new Hls();
                hls.loadSource(channel.link);
                hls.attachMedia(liveStream);
            } else if (liveStream.canPlayType('application/vnd.apple.mpegurl')) {
                liveStream.src = channel.link;
            }
        }
    }

    // Populate channel list
    channels.forEach((channel, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${channel.name}`;

        li.addEventListener('click', () => {
            loadStream(channel);
        });

        channelUl.appendChild(li);
    });

    // Set the default channel
    if (channels.length > 0) {
        loadStream(channels[0]);
    }

    liveStream.addEventListener('click', () => {
        if (liveStream.requestFullscreen) {
            liveStream.requestFullscreen();
        } else if (liveStream.mozRequestFullScreen) { // Firefox
            liveStream.mozRequestFullScreen();
        } else if (liveStream.webkitRequestFullscreen) { // Chrome, Safari and Opera
            liveStream.webkitRequestFullscreen();
        } else if (liveStream.msRequestFullscreen) { // IE/Edge
            liveStream.msRequestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', (event) => {
        if (!document.fullscreenElement) {
            channelList.style.display = 'block';
        } else {
            channelList.style.display = 'none';
        }
    });

    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        const li = channelUl.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            const txtValue = li[i].textContent || li[i].innerText;
            li[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
        }
    });

    // Show reminder
    function showReminder() {
        overlay.style.display = 'block';
        reminder.style.display = 'block';
    }

    function hideReminder() {
        overlay.style.display = 'none';
        reminder.style.display = 'none';
    }

    reminder.style.display = 'none'; // Hide by default
    overlay.style.display = 'none'; // Hide by default

    closeReminder.addEventListener('click', hideReminder);

    // Show the reminder on page load
    showReminder();
});
