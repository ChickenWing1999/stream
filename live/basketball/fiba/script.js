document.addEventListener("DOMContentLoaded", () => {
    const watchButton = document.getElementById("watchButton");
    const streamContainer = document.getElementById("streamContainer");
    const adblockModal = $("#adblockModal");

    // Check if the user has previously seen the modal
    const modalSeen = localStorage.getItem("adblockModalSeen");
    if (!modalSeen) {
        // Show the modal
        adblockModal.css("display", "block");

        // Save a flag indicating the modal has been seen
        localStorage.setItem("adblockModalSeen", true);
    }

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

    function getLiveStreamId(game) {
        // Your existing logic to fetch the live stream ID
        // Replace this with your actual logic to fetch the live stream ID for the selected game
        // You might use an object or a database to store the mapping of game IDs to live stream IDs
        const gameStreamMap = {
            game1: "https://streamingnow.pro/tvon.php?hd=86",
            game2: "https://streamingnow.pro/tvon.php?hd=88",
            game3: "https://streamingnow.pro/tvon.php?hd=85",
            game4: "https://streamingnow.pro/tvon.php?hd=87",
            game5: "https://streamingnow.pro/tvon.php?hd=88",
            game6: "https://streamingnow.pro/tvon.php?hd=86",
            game7: "https://streamingnow.pro/tvon.php?hd=85",
            game8: "https://streamingnow.pro/tvon.php?hd=87",
            game9: "https://streamingnow.pro/tvon.php?hd=103",
            // Add more mappings here
        };

        return gameStreamMap[game] || null;
    }

    function scrollTo(element) {
        window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 20
        }, 1000);
    }
});
