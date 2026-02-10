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
            game1: "https://myvidplay.com/e/ljog83uglkft",
            game2: "https://myvidplay.com/e/vakqtu5znmi8",
            game3: "https://myvidplay.com/e/d4a65lzgn5ww",
            game4: "https://myvidplay.com/e/n1izegbnqflk",
            game5: "https://myvidplay.com/e/e9hwu8k434kl",
            game6: "https://myvidplay.com/e/735mvddxhy7i",
            game7: "https://myvidplay.com/e/j881rgd9tm7l",
            game8: "https://myvidplay.com/e/w8kkjgglbk1e",
            game9: "https://myvidplay.com/e/glpqtlbg4b08",
            game10: "https://myvidplay.com/e/66agvuv4f8rw",
            game11: "https://myvidplay.com/e/afy9ho7b7by1",
            game12: "https://myvidplay.com/e/rvsuxm88sai3",
            game13: "https://myvidplay.com/e/oz784ypln2pf",
            game14: "https://myvidplay.com/e/34lqtwvgp00o",
            game15: "https://myvidplay.com/e/m1fakdu1ozce",
            game16: "https://myvidplay.com/e/gh6b6z6r5tez",
            game17: "https://myvidplay.com/e/xxwp94mvc5xr",
            game18: "https://myvidplay.com/e/jf1xgg0kt7w1",
            game19: "https://myvidplay.com/e/7t08exsi95u3",
            game20: "https://myvidplay.com/e/bx2xlhfm90ff",
            game21: "https://myvidplay.com/e/ypnq85riodvz",
            game22: "https://myvidplay.com/e/26650g3721ez",
            game23: "https://myvidplay.com/e/tqmhxdplpphc",
            game24: "https://myvidplay.com/e/t1pkcp3cu91t",
            game25: "https://myvidplay.com/e/czrpz0zp0q1q",

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
