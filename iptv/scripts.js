document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Channel 1', link: 'https://example.com/embed/channel1' },
        { name: 'Cinema One', link: 'https://player.livepush.io/emv2fjgAopLGy' },
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
    reminder.style.display = 'flex';
    closeReminder.addEventListener('click', () => {
        reminder.style.display = 'none';
    });

    // Function to check stream status
    function checkStream(url, statusElement) {
        // Create a hidden iframe to check stream status
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;

        iframe.onload = () => {
            statusElement.textContent = 'LIVE';
            statusElement.classList.remove('broken');
            statusElement.style.display = 'inline-block';
        };

        iframe.onerror = () => {
            statusElement.textContent = 'BROKEN';
            statusElement.classList.add('broken');
            statusElement.style.display = 'inline-block';
        };

        document.body.appendChild(iframe);
        // Remove iframe after status check
        setTimeout(() => document.body.removeChild(iframe), 3000);
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
