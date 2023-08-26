document.addEventListener("DOMContentLoaded", () => {
    const watchButton = document.getElementById("watchButton");
    const streamContainer = document.getElementById("streamContainer");

    watchButton.addEventListener("click", () => {
        const selectedGame = document.getElementById("gameSelect").value;
        const liveStreamId = getLiveStreamId(selectedGame);
    
        if (liveStreamId) {
            streamContainer.style.display = "block"; // Show the live streaming container
            streamContainer.innerHTML = `<iframe src="https://${liveStreamId}" width="100%" height="420" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen="yes"  allow="encrypted-media"></iframe>`;
            scrollTo(streamContainer); // Scroll to the live streaming container
        } else {
            streamContainer.style.display = "none"; // Hide the live streaming container if no valid stream ID
            streamContainer.innerHTML = "";
            alert("No live stream available for this game.");
        }
        
    });

    function getLiveStreamId(game) {
        // Your existing logic to fetch the live stream ID
        // Replace this with your actual logic to fetch the live stream ID for the selected game
        // You might use an object or a database to store the mapping of game IDs to live stream IDs
        const gameStreamMap = {
            game1: "1stream.eu/game/puerto-rico-south-sudan-live-stream/681951?embed=1",
            game2: "1stream.eu/game/georgia-cape-verde-live-stream/681955?embed=1",
            game3: "1stream.eu/game/greece-jordan-live-stream/681953?embed=1",
            game4: "1stream.eu/game/brazil-iran-live-stream/681957?embed=1",
            game5: "1stream.eu/game/venezuela-slovenia-live-stream/681956?embed=1",
            game6: "1stream.eu/game/serbia-china-live-stream/681952?embed=1",
            game7: "1stream.eu/game/usa-new-zealand-live-stream/681954?embed=1",
            game8: "",
            game9: "streamingnow.pro/tvon.php?hd=103",
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
});
