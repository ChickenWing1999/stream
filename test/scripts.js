document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'ABS-CBN', link: 'https://dlhd.sx/embed/stream-785.php', type: 'embed' },
        { name: 'ONE Sports', link: 'https://bit.ly/4dIklUF', type: 'hls' },
        { name: 'ONE Sports+', link: 'https://tinyurl.com/SPORTplu', type: 'hls' },
        { name: 'HBO', link: 'aHR0cHM6Ly9xcC1wbGR0LWxpdmUtZ3JwLTAzLXByb2QuYWthbWFpemVkLm5ldC9vdXQvdS9oYm9oZF9xcC5tM3U4', type: 'hls' },
        { name: 'CINE MO!', link: 'https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8', type: 'hls' },
        { name: 'Cinema One', link: 'https://cinemaone-abscbn-ono.amagi.tv/index.m3u8', type: 'hls' },
        { name: 'MYX', link: 'https://myxnola-abscbn-ono.amagi.tv/index.m3u8', type: 'hls' },
        { name: 'ANC', link: 'https://ancglobal-abscbn-ono.amagi.tv/playlist.m3u8', type: 'hls' },
        { name: 'True FM', link: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/radyo5_qp.m3u8', type: 'hls' },
        { name: 'TeleRadyo Serbisyo', link: 'https://teleradyo-abscbn-ono.amagi.tv/playlist.m3u8', type: 'hls' },
        { name: 'CLTV 36', link: 'https://live.cltv36.tv:5443/LiveApp/streams/live.m3u8', type: 'hls' },
        { name: 'Travel Channel', link: 'https://player.livepush.io/emv2fjgAopLGy', type: 'hls' },
        { name: 'HGTV', link: 'https://dplus.gammacdn.workers.dev/videos/111.m3u8', type: 'hls' },
        { name: 'Food Network', link: 'https://dplus.gammacdn.workers.dev/videos/112.m3u8', type: 'hls' },
        { name: 'Discovery HD', link: 'https://dplus.gammacdn.workers.dev/videos/95.m3u8', type: 'hls' },
        { name: 'Discovery Science', link: 'https://dplus.gammacdn.workers.dev/videos/96.m3u8', type: 'hls' },
        { name: 'TLC', link: 'https://dplus.gammacdn.workers.dev/videos/97.m3u8', type: 'hls' },
        { name: 'Discovery Turbo', link: 'https://dplus.gammacdn.workers.dev/videos/98.m3u8', type: 'hls' },
        { name: 'Animal Planet', link: 'https://dplus.gammacdn.workers.dev/videos/99.m3u8', type: 'hls' },
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
    let hls;

    // Base64 decode function
    function decodeBase64(base64) {
        return decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    // Function to load stream based on type
    function loadStream(channel) {
        if (channel.type === 'embed') {
            liveStreamVideo.style.display = 'none';
            liveStreamIframe.style.display = 'block';
            liveStreamIframe.src = channel.link;
            if (hls) {
                hls.destroy();
                hls = null;
            }
        } else if (channel.type === 'hls') {
            liveStreamIframe.style.display = 'none';
            liveStreamVideo.style.display = 'block';
            if (Hls.isSupported()) {
                if (hls) {
                    hls.destroy();
                }
                hls = new Hls();
                hls.loadSource(channel.link);
                hls.attachMedia(liveStreamVideo);
            } else if (liveStreamVideo.canPlayType('application/vnd.apple.mpegurl')) {
                liveStreamVideo.src = channel.link;
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

