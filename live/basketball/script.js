$(document).ready(function() {
    const watchButton = $("#watchButton");
    const streamContainer = $("#streamContainer");

    watchButton.on("click", function() {
        const selectedGame = $("#gameSelect").val();
        const liveStreamUrl = getLiveStreamUrl(selectedGame);

        streamContainer.css("display", "block");
        streamContainer.html(`<iframe src="${liveStreamUrl}" width="100%" height="400" frameborder="0"></iframe>`);
        scrollTo(streamContainer);
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
