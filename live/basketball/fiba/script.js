document.addEventListener("DOMContentLoaded", () => {
    const watchButton = document.getElementById("watchButton");
    const streamContainer = document.getElementById("streamContainer");

    watchButton.addEventListener("click", () => {
        const selectedGame = document.getElementById("gameSelect").value;
        const liveStreamId = getLiveStreamId(selectedGame);

        if (liveStreamId) {
            streamContainer.style.display = "block"; // Show the live streaming container
            streamContainer.innerHTML = `<iframe src="https://streamingnow.pro/tvon.php?hd=${liveStreamId}" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>`;
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
            game1: "86",
            game2: "",
            game3: "stream_id_3",
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
