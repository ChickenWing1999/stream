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
            // ANC HD
            game1: "https://player.livepush.io/emv2J4WFcMwbC",
            // Animal Planet
            game2: "https://dlhd.sx/embed/stream-304.php",
            game3: "https://d.daddylivehd.sx/embed/stream-304.php",
            // BBC News Channel
            game4: "https://dlhd.sx/embed/stream-349.php",
            game5: "https://d.daddylivehd.sx/embed/stream-349.php",
            // Cartoonito
            game6: "https://player.livepush.io/emv5POxKMYWPB",
            // Cartoon Network
            game7: "https://player.livepush.io/emvpKy6j5wQZ5",
            // Cinema One
            game8: "https://player.livepush.io/emv2fjgAopLGy",
            // Cinemax
            game9: "https://dlhd.sx/embed/stream-374.php",
            game10: "https://d.daddylivehd.sx/embed/stream-374.php",
            // CNN International
            game11: "https://player.livepush.io/emv01skOERoHp",
            // Discovery Channel
            game12: "https://dlhd.sx/embed/stream-313.php",
            game13: "https://d.daddylivehd.sx/embed/stream-313.php",
            // Discovery Family
            game14: "https://dlhd.sx/embed/stream-657.php",
            game15: "https://d.daddylivehd.sx/embed/stream-657.php",
            // Discovery Life Channel
            game16: "https://dlhd.sx/embed/stream-311.php",
            game17: "https://d.daddylivehd.sx/embed/stream-311.php",
            // Disney Channel
            game18: "https://dlhd.sx/embed/stream-312.php",
            game19: "https://d.daddylivehd.sx/embed/stream-312.php",
            // Disney Junior
            game20: "https://dlhd.sx/embed/stream-652.php",
            game21: "https://d.daddylivehd.sx/embed/stream-652.php",
            // Disney XD
            game22: "https://dlhd.sx/embed/stream-314.php",
            game23: "https://d.daddylivehd.sx/embed/stream-314.php",
            // ESPN
            game24: "https://dlhd.sx/embed/stream-44.php",
            game25: "https://d.daddylivehd.sx/embed/stream-44.php",
            // ESPN 2
            game26: "https://dlhd.sx/embed/stream-45.php",
            game27: "https://d.daddylivehd.sx/embed/stream-45.php",
            // ESPNU
            game28: "https://dlhd.sx/embed/stream-316.php",
            game29: "https://d.daddylivehd.sx/embed/stream-316.php",
            // Food Network
            game30: "https://dlhd.sx/embed/stream-384.php",
            game31: "https://d.daddylivehd.sx/embed/stream-384.php",
            // HBO
            game32: "https://player.livepush.io/emvv-dvBjLTih",
            // HBO 2
            game33: "https://dlhd.sx/embed/stream-689.php",
            game34: "https://d.daddylivehd.sx/embed/stream-689.php",
            // HBO Comedy
            game35: "https://dlhd.sx/embed/stream-690.php",
            game36: "https://d.daddylivehd.sx/embed/stream-690.php",
            // HBO Family
            game37: "https://dlhd.sx/embed/stream-691.php",
            game38: "https://d.daddylivehd.sx/embed/stream-691.php",
            // HBO Signature
            game39: "https://dlhd.sx/embed/stream-693.php",
            game40: "https://d.daddylivehd.sx/embed/stream-693.php",
            // History
            game41: "https://dlhd.sx/embed/stream-322.php",
            game42: "https://d.daddylivehd.sx/embed/stream-322.php",
            // MYX
            game43: "https://player.livepush.io/emvd_N3Qz-qMN",
            // MTV
            game44: "https://dlhd.sx/embed/stream-371.php",
            game45: "https://d.daddylivehd.sx/embed/stream-371.php",
            // National Geographic Channel
            game46: "https://dlhd.sx/embed/stream-328.php",
            game47: "https://d.daddylivehd.sx/embed/stream-328.php",
            // Nat Geo Wild
            game48: "https://dlhd.sx/embed/stream-745.php",
            game49: "https://d.daddylivehd.sx/embed/stream-745.php",
            // Nickelodeon
            game50: "https://dlhd.sx/embed/stream-330.php",
            game51: "https://d.daddylivehd.sx/embed/stream-330.php",
            // Nick Junior
            game52: "https://dlhd.sx/embed/stream-329.php",
            game53: "https://d.daddylivehd.sx/embed/stream-329.php",
            // Paramount Network
            game54: "https://dlhd.sx/embed/stream-334.php",
            game55: "https://d.daddylivehd.sx/embed/stream-334.php",
            // Showtime
            game56: "https://dlhd.sx/embed/stream-333.php",
            game57: "https://d.daddylivehd.sx/embed/stream-333.php",
            game58: "",
            game59: "",
            game60: "",
            game61: "",
            game62: "",
            game63: "",
            game64: "",
            game65: "",
            game66: "",
            game67: "",
            game68: "",
            game69: "",
            game70: "",
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
