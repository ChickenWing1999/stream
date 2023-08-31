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
            streamContainer.innerHTML = `<iframe src="${liveStreamId}" width="100%" height="440" allowfullscreen allowtransparency allow="autoplay" scrolling="no" frameborder="0"></iframe>`;
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
            game1: "https://streamtape.com/e/ZD6x3GVB1lhqv7a",
            game2: "https://streamtape.com/e/yBDPjpBVgZU14a8",
            game3: "https://streamtape.com/e/K4gwG2ow2juwAw",
            game4: "https://streamtape.com/e/koxlWpolY2hOxAD",
            game5: "https://streamtape.com/e/PXwrzoo8p6s06m8",
            game6: "https://streamtape.com/e/dg7G1GK64GhkwVv",
            game7: "https://streamtape.com/e/B49koeGLaQHyLyx",
            game8: "https://streamtape.com/e/A0jAD64mLrIXy2y",
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
