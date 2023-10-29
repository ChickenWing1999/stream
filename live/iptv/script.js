const playlists = [
    {
        category: 'News',
        channels: [
            { name: 'News', url: 'https://iptv-org.github.io/iptv/categories/news.m3u' },
        ],
    },
    {
        category: 'Sports',
        channels: [
            { name: 'Sports', url: 'https://iptv-org.github.io/iptv/categories/sports.m3u' },
        },
    },
    // Add more categories and channels as needed
];

const categoryList = document.getElementById('category-list');
const channelList = document.getElementById('channel-list');
const channelPlayer = document.getElementById('channel-player');

// Populate channel categories
playlists.forEach(category => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" data-category="${category.category}">${category.category}</a>`;
    categoryList.appendChild(li);
});

// Display channels for the selected category
categoryList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const selectedCategory = e.target.getAttribute('data-category');
        channelList.innerHTML = '';
        playlists.find(category => category.category === selectedCategory).channels.forEach(channel => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${channel.url}" data-url="${channel.url}">${channel.name}</a>`;
            channelList.appendChild(li);
        });
    }
});

// Play selected channel when a link is clicked
channelList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const channelUrl = e.target.getAttribute('data-url');
        channelPlayer.src = channelUrl;
    }
});
