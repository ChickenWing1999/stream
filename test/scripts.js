document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Cinema One', link: 'https://player.livepush.io/emv2fjgAopLGy', type: 'embed' },
        { name: 'Cartoon Network', link: 'https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8', type: 'hls' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channelList');
    const channelUl = document.getElementById('channels');
    const liveStreamVideo = document.getElementById('liveStreamVideo');
    const liveStreamIframe = document.getElementById('liveStreamIframe');
    const searchBox = document.getElementById('searchBox');
    const reminder = document.getElementById('reminder');
    const closeReminder = document.getElementById('closeReminder');
    const overlay = document.getElementById('overlay');

    // Initialize Shaka Player
    function initializePlayer() {
        const player = new shaka.Player(liveStreamVideo);
        window.player = player;
        player.addEventListener('error', onError);
    }

    // Function to handle player errors
    function onError(event) {
        console.error('Error code', event.detail.code, 'object', event.detail);
    }

    // Function to load stream based on type
    function loadStream(channel) {
        if (channel.type === 'embed') {
            liveStreamVideo.style.display = 'none';
            liveStreamIframe.style.display = 'block';
            liveStreamIframe.src = channel.link;
        } else if (channel.type === 'hls') {
            liveStreamIframe.style.display = 'none';
            liveStreamVideo.style.display = 'block';
            if (window.player) {
                window.player.load(channel.link).catch(onError);
            } else {
                initializePlayer();
                window.player.load(channel.link).catch(onError);
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

    liveStreamVideo.addEventListener('click', () => {
        if (liveStreamVideo.requestFullscreen) {
            liveStreamVideo.requestFullscreen();
        } else if (liveStreamVideo.mozRequestFullScreen) { // Firefox
            liveStreamVideo.mozRequestFullScreen();
        } else if (liveStreamVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
            liveStreamVideo.webkitRequestFullscreen();
        } else if (liveStreamVideo.msRequestFullscreen) { // IE/Edge
            liveStreamVideo.msRequestFullscreen();
        }
    });

    liveStreamIframe.addEventListener('click', () => {
        if (liveStreamIframe.requestFullscreen) {
            liveStreamIframe.requestFullscreen();
        } else if (liveStreamIframe.mozRequestFullScreen) { // Firefox
            liveStreamIframe.mozRequestFullScreen();
        } else if (liveStreamIframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            liveStreamIframe.webkitRequestFullscreen();
        } else if (liveStreamIframe.msRequestFullscreen) { // IE/Edge
            liveStreamIframe.msRequestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', () => {
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
            li[i].style.display = txtValue.toLowerCase().includes(filter) ? '' : 'none';
        }
    });

    function showReminder() {
        reminder.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hideReminder() {
        reminder.style.display = 'none';
        overlay.style.display = 'none';
    }

    closeReminder.addEventListener('click', hideReminder);

    // Show the reminder on page load
    showReminder();
});
