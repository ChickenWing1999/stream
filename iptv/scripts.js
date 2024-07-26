document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Channel 1', link: 'https://example.com/embed/channel1' },
        { name: 'Channel 2', link: 'https://example.com/embed/channel2' },
        { name: 'Channel 3', link: 'https://example.com/embed/channel3' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channelList');
    const channelUl = document.getElementById('channels');
    const liveStream = document.getElementById('liveStream');
    const searchBox = document.getElementById('searchBox');
    const reminder = document.getElementById('reminder');
    const closeReminder = document.getElementById('closeReminder');

    // Populate channel list
    channels.forEach((channel, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${channel.name}`;

        const status = document.createElement('span');
        status.className = 'live-status';
        li.appendChild(status);

        li.addEventListener('click', () => {
            liveStream.src = channel.link;
            checkStream(channel.link, status);
        });

        channelUl.appendChild(li);
    });

    // Set the default channel
    if (channels.length > 0) {
        liveStream.src = channels[0].link;
        // Perform status check for the default channel
        checkStream(channels[0].link, document.querySelectorAll('.live-status')[0]);
    }

    liveStream.addEventListener('click', () => {
        channelList.style.display = 'none';
        liveStream.requestFullscreen();
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
    reminder.style.display = 'block';
    closeReminder.addEventListener('click', () => {
        reminder.style.display = 'none';
    });

    // Function to check stream status
    function checkStream(url, statusElement) {
        fetch(url, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    statusElement.textContent = 'LIVE';
                    statusElement.classList.remove('broken');
                    statusElement.style.display = 'inline-block';
                } else {
                    statusElement.textContent = 'BROKEN';
                    statusElement.classList.add('broken');
                    statusElement.style.display = 'inline-block';
                }
            })
            .catch(() => {
                statusElement.textContent = 'BROKEN';
                statusElement.classList.add('broken');
                statusElement.style.display = 'inline-block';
            });
    }

    // Check status for all channels
    function checkAllStreams() {
        document.querySelectorAll('.live-status').forEach((statusElement, index) => {
            checkStream(channels[index].link, statusElement);
        });
    }

    // Perform status check for all channels on page load
    checkAllStreams();
});
