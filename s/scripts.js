document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Channel 1', link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
        { name: 'Channel 2', link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
        { name: 'Channel 3', link: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channelList');
    const channelUl = document.getElementById('channels');
    const video = document.getElementById('video');
    const searchBox = document.getElementById('searchBox');
    const reminder = document.getElementById('reminder');
    const closeReminder = document.getElementById('closeReminder');
    const overlay = document.getElementById('overlay');

    // Function to initialize HLS
    function initHLS(url) {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', function () {
                video.play();
            });
        }
    }

    // Populate channel list
    channels.forEach((channel, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${channel.name}`;

        li.addEventListener('click', () => {
            initHLS(channel.link);
            highlightActiveChannel(index);
        });

        channelUl.appendChild(li);
    });

    // Highlight active channel
    function highlightActiveChannel(index) {
        const lis = channelUl.getElementsByTagName('li');
        for (let i = 0; i < lis.length; i++) {
            if (i === index) {
                lis[i].classList.add('active');
            } else {
                lis[i].classList.remove('active');
            }
        }
    }

    // Set the default channel
    if (channels.length > 0) {
        initHLS(channels[0].link);
        highlightActiveChannel(0);
    }

    video.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            channelList.style.display = 'none';
        } else {
            channelList.style.display = 'block';
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
