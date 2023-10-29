document.addEventListener("DOMContentLoaded", function () {
    const player = videojs("iptv-player");
    const channelList = document.getElementById("channel-list");
    const channelThumbnail = document.getElementById("channel-thumbnail-img");

    // Define a list of IPTV playlists
    const iptvPlaylists = [
        {
            name: "Main",
            url: "https://iptv-org.github.io/iptv/index.m3u",
        },
        {
            name: "NSFW",
            url: "https://iptv-org.github.io/iptv/index.nsfw.m3u",
        },
        // Add more playlists here
    ];

    // Fetch and parse the selected playlist
    function loadPlaylist(selectedPlaylistURL) {
        fetch(selectedPlaylistURL)
            .then((response) => response.text())
            .then((data) => {
                const channels = parseM3UPlaylist(data);

                // Populate the channel list
                channelList.innerHTML = '<option value="">Select a channel</option>';
                channels.forEach((channel) => {
                    const option = document.createElement("option");
                    option.value = channel.url;
                    option.text = channel.name;
                    channelList.appendChild(option);
                });

                // Handle channel selection
                channelList.addEventListener("change", function () {
                    const selectedChannelURL = channelList.value;
                    if (selectedChannelURL) {
                        player.src(selectedChannelURL);
                        player.play();
                        // Set the channel thumbnail if available
                        channelThumbnail.src = channels.find((channel) => channel.url === selectedChannelURL)?.thumbnail || "";
                    }
                });
            })
            .catch((error) => {
                console.error("Failed to load the IPTV playlist:", error);
            });
    }

    // Populate the playlist selector
    const playlistSelector = document.getElementById("playlist-selector");
    iptvPlaylists.forEach((playlist, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = playlist.name;
        playlistSelector.appendChild(option);
    });

    // Load the selected playlist
    playlistSelector.addEventListener("change", function () {
        const selectedPlaylistIndex = playlistSelector.value;
        if (selectedPlaylistIndex !== "") {
            const selectedPlaylistURL = iptvPlaylists[selectedPlaylistIndex].url;
            loadPlaylist(selectedPlaylistURL);
        }
    });
});

// Function to parse M3U playlist
function parseM3UPlaylist(data) {
    const channels = [];
    const lines = data.split("\n");
    let currentChannel = null;

    for (const line of lines) {
        if (line.startsWith("#EXTINF:")) {
            const nameMatch = line.match(/tvg-name="([^"]+)"/);
            const url = lines[lines.indexOf(line) + 1];
            const thumbnailMatch = line.match(/tvg-logo="([^"]+)"/);
            if (nameMatch) {
                const name = nameMatch[1];
                currentChannel = { name, url, thumbnail: thumbnailMatch ? thumbnailMatch[1] : "" };
                channels.push(currentChannel);
            }
        }
    }

    return channels;
}
