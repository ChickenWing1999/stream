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
            game1: "https://1stream.eu/game/italy-dominican-republic-live-stream/682729?embed=1",
            game2: "https://1stream.eu/game/germany-australia-live-stream/682733?embed=1",
            game3: "https://1stream.eu/game/egypt-montenegro-live-stream/682731?embed=1",
            game4: "https://1stream.eu/game/lebanon-canada-live-stream/682735?embed=1",
            game5: "https://streamingnow.pro/tvon.php?hd=202",
            game6: "https://1stream.eu/game/japan-finland-live-stream/682734?embed=1",
            game7: "https://1stream.eu/game/lithuania-mexico-live-stream/682732?embed=1",
            game8: "https://1stream.eu/game/latvia-france-live-stream/682736?embed=1",
            game9: "https://streamingnow.pro/tvon.php?hd=103",
            // Add more mappings here
        };

        const encodedUrl = gameStreamMap[game] ? btoa(gameStreamMap[game]) : null;
        return encodedUrl ? `data:text/html;base64,${encodedUrl}` : null;
    }

    function scrollTo(element) {
        window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 20
        });
    }
});
