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
            game1: "https://streamtape.com/e/ZadPQ786KxFqbbZ",
            game2: "https://streamtape.com/e/G3jLoekryYt1vB3",
            game3: "https://streamtape.com/e/l4WzlpRXpdC7GlY",
            game4: " https://streamtape.com/e/Gemp0x6oXAFALl",
            game5: "https://streamtape.com/e/zD1VKbrJ1rhYL3P",
            game6: "https://streamtape.com/e/waed9JBeM8TJ0VO",
            game7: "https://streamtape.com/e/pkvJ11vgVbsr3X7",
            game8: "https://streamtape.com/e/wywVgkxqKGHJrr3",
            game9: "https://streamtape.com/e/Ly2zoJdegaURjDe",
            game10: "https://streamtape.com/e/Rebv6ZvO8Vsdyyv",
            game11: "https://streamtape.com/e/lwQmxxXkvvU7J4p",
            game12: "https://streamtape.com/e/1babkpArz6Ue4Yx",
            game13: "https://streamtape.com/e/vYK3avxWy2cDMr",
            game14: "https://streamtape.com/e/rdOVz0VQRZTbR6A",
            game15: "https://streamtape.com/e/MPLOAOdBg4Fm4JZ",
            game16: "https://streamtape.com/e/AoqdDxvGzohXqdP",
            game17: "https://streamtape.com/e/90xY1rejK4tae87",
            game18: "https://streamtape.com/e/e4pOB2ZemgcY46J",
            game19: "https://streamtape.com/e/DzZg6AxWwdIk9vw",
            game20: "https://streamtape.com/e/pgPz6qXOvDFroqJ",
            game21: "https://streamtape.com/e/y2AxRB47OlI1lzg",
            game22: "https://streamtape.com/e/OAWGqA6YKwfzWm",
            game23: "https://streamtape.com/e/RWP8Xk47ZYCdb4G",
            game24: "https://streamtape.com/e/9j1p1Pa7jecopJ",
            game25: "https://streamtape.com/e/AlQr6QOGV0UXVLr",
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
