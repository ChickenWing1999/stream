// Your M3U playlist URLs
const playlists = [
    'https://iptv-org.github.io/iptv/index.m3u',
    'https://iptv-org.github.io/iptv/index.nsfw.m3u',
    // Add more playlists as needed
];

const channelList = document.getElementById('channel-list');
const channelPlayer = document.getElementById('channel-player');

// Fetch and populate channel list
playlists.forEach(playlistUrl => {
    fetch(playlistUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const channelNodes = xmlDoc.querySelectorAll('channel');

            channelNodes.forEach(channelNode => {
                const name = channelNode.querySelector('display-name').textContent;
                const url = channelNode.querySelector('url').textContent;
                const li = document.createElement('li');
                li.innerHTML = `<a href="${url}" data-url="${url}">${name}</a>`;
                channelList.appendChild(li);
            });
        });
});

// Play selected channel when a link is clicked
channelList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const channelUrl = e.target.getAttribute('data-url');
        channelPlayer.src = channelUrl;
    }
});
