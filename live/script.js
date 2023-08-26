$(document).ready(function() {
    const watchButton = $("#watchButton");
    const adContainer = $("#adContainer");
    const streamContainer = $("#streamContainer");

    watchButton.on("click", function() {
        const selectedGame = $("#gameSelect").val();
        const liveStreamUrl = getLiveStreamUrl(selectedGame);
        const vastAdTag = "https://likely-interaction.com/djmvFsz.dOGUNyvGZQGoUd/seNm/9duQZ_Uflhk-POTZQO3EOZDEcY4xN/j/kstRNMDUcW4nNdzHgf3DMPAN"; // Replace with actual VAST ad tag URL

        adContainer.css("display", "block");

        const player = videojs(adContainer[0]);
        player.vast({
            url: vastAdTag,
            adCancelTimeout: 5000,
            adsEnabled: true,
            autoPlayAdBreaks: true
        });

        player.on("vast.adEnd", function() {
            adContainer.css("display", "none");
            streamContainer.css("display", "block");
            streamContainer.html(`<iframe src="https://${liveStreamUrl}" width="100%" height="400" frameborder="0"></iframe>`);
            scrollTo(streamContainer);
        });
    });

    // Replace with your logic to map games to streaming URLs
    function getLiveStreamUrl(game) {
        const streamUrls = {
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

        return streamUrls[game] || null;
    }

    function scrollTo(element) {
        $("html, body").animate({
            scrollTop: element.offset().top - 20
        }, 1000);
    }
});
