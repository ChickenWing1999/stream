$(document).ready(function() {
    const watchButton = $("#watchButton");
    const streamContainer = $("#streamContainer");

    watchButton.on("click", function() {
        const selectedGame = $("#gameSelect").val();
        const liveStreamUrl = getLiveStreamUrl(selectedGame);
        const gameStartTime = getGameStartTime(selectedGame);

        showCountdownTimer(gameStartTime);

        setTimeout(function() {
            streamContainer.css("display", "block");
            streamContainer.html(`<iframe src="${liveStreamUrl}" width="100%" height="400" frameborder="0"></iframe>`);
            scrollTo(streamContainer);
            showLiveIndicator();
        }, gameStartTime * 1000);
    });

    // Replace with your logic to map games to streaming URLs
    function getLiveStreamUrl(game) {
        const streamUrls = {
            game1: "https://streamdomain1.com/game1",
            game2: "https://streamdomain2.com/game2",
            // Add more mappings here
        };

        return streamUrls[game] || null;
    }

    function scrollTo(element) {
        $("html, body").animate({
            scrollTop: element.offset().top - 20
        }, 1000);
    }
});

 function showCountdownTimer(startTime) {
        const countdownElement = $("#countdown");
        countdownElement.text("Game starts in");
        const interval = setInterval(function() {
            const now = Math.floor(Date.now() / 1000);
            const remainingTime = startTime - now;
            if (remainingTime > 0) {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                countdownElement.text(`Game starts in ${minutes}:${seconds}`);
            } else {
                clearInterval(interval);
                countdownElement.text("Game is live!");
            }
        }, 1000);
    }

    function showLiveIndicator() {
        const liveIndicator = $("<div>")
            .addClass("live-indicator")
            .text("LIVE")
            .appendTo($("#streamContainer"));
    }
});
