document.addEventListener("DOMContentLoaded", () => {
    const watchButton = document.getElementById("watchButton");
    const streamContainer = document.getElementById("streamContainer");
    const showDonateButton = $("#showDonateButton");
    const donateOptions = $("#donateOptions");

    watchButton.addEventListener("click", () => {
        const selectedGame = document.getElementById("gameSelect").value;
        const liveStreamId = getLiveStreamId(selectedGame);
    
        if (liveStreamId) {
            streamContainer.style.display = "block"; // Show the live streaming container
            streamContainer.innerHTML = `<iframe src="${liveStreamId}" width="100%" height="420" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen="yes"  allow="encrypted-media"></iframe>`;
            scrollTo(streamContainer); // Scroll to the live streaming container
        } else {
            streamContainer.style.display = "none"; // Hide the live streaming container if no valid stream ID
            streamContainer.innerHTML = "";
            alert("No live stream available for this game.");
        }
        
    });

     // Update button text and icon when toggling the donation options
    showDonateButton.on("click", function() {
        if (donateOptions.hasClass("show")) {
            showDonateButton.html('Show Details');
        } else {
            showDonateButton.html('Hide Details');
        }
    });

    function getLiveStreamId(game) {
        // Your existing logic to fetch the live stream ID
        // Replace this with your actual logic to fetch the live stream ID for the selected game
        // You might use an object or a database to store the mapping of game IDs to live stream IDs
        const gameStreamMap = {
            game9: "https://sportybite.top/tvon.php?hd=190",
            // Add more mappings here
        };

     return gameStreamMap[game] || null;
    }

    function scrollTo(element) {
        window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 20
        });
    }

if(Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }
 // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
 // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
 // This is using the built-in support of the plain video element, without using hls.js.
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://cdn1.skygo.mn/live/disk1/Cartoon_Network/HLS-FTA/Cartoon_Network.m3u8';
    video.addEventListener('canplay',function() {
      video.play();
    });
  }
    
});
