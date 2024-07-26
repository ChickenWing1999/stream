document.addEventListener('DOMContentLoaded', function () {
    const channels = [
        { name: 'Cartoonito', link: 'https://player.livepush.io/emv5POxKMYWPB', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cartoonito_-_Logo_2021.svg/1000px-Cartoonito_-_Logo_2021.svg.png' },
        { name: 'TV5 HD', link: 'https://player.livepush.io/emvjUNWUzuU2J', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/TV5_HD_Logo_2023.svg/2560px-TV5_HD_Logo_2023.svg.png' },
        { name: 'ANC HD', link: 'https://player.livepush.io/emvptOp3hIomK', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ABS-CBN_News_Channel_%282015%29.svg/1200px-ABS-CBN_News_Channel_%282015%29.svg.png' },
        // Add more channels as needed
    ];

    const channelList = document.getElementById('channelList');
    const channelUl = document.getElementById('channels');
    const liveStream = document.getElementById('liveStream');
    const searchBox = document.getElementById('searchBox');
    const reminder = document.getElementById('reminder');

    channels.forEach((channel, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span = document.createElement('span');

        img.src = channel.image;
        img.classList.add('channel-image');
        span.textContent = `${index + 1}. ${channel.name}`;

        li.appendChild(img);
        li.appendChild(span);

        li.addEventListener('click', () => {
            liveStream.src = channel.link;
        });

        channelUl.appendChild(li);
    });

    // Set the default channel
    if (channels.length > 0) {
        liveStream.src = channels[0].link;
    }

    liveStream.addEventListener('click', () => {
        channelList.style.display = 'none';
        liveStream.requestFullscreen();
    });

    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        const li = channelUl.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++) {
            const span = li[i].getElementsByTagName('span')[0];
            const txtValue = span.textContent || span.innerText;
            li[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
        }
    });

    // Show reminder
    reminder.style.display = 'block';
    setTimeout(() => {
        reminder.style.display = 'none';
    }, 5000); // Reminder will disappear after 5 seconds
});
