document.addEventListener("DOMContentLoaded", function () {
    const player = videojs("iptv-player");
    const channelList = document.getElementById("channel-list");

    // Define your M3U playlist
    const iptvPlaylistURL = "https://iptv-org.github.io/iptv/languages/tgl.m3u";

    // Fetch and parse the M3U playlist
    fetch(iptvPlaylistURL)
        .then((response) => response.text())
        .then((data) => {
            const channels = parseM3UPlaylist(data);

            // Populate the channel list
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
                }
            });
        })
        .catch((error) => {
            console.error("Failed to load the IPTV playlist:", error);
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
            if (nameMatch) {
                const name = nameMatch[1];
                currentChannel = { name, url };
                channels.push(currentChannel);
            }
        }
    }

    return channels;
}
