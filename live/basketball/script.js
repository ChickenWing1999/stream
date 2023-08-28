$(document).ready(function() {
    const sportSelect = $("#sportSelect");
    const gameSelect = $("#gameSelect");
    const watchButton = $("#watchButton");
    const streamContainer = $("#streamContainer");
    const showDonateButton = $("#showDonateButton");
    const donateOptions = $("#donateOptions");
    const adblockModal = $("#adblockModal");
    const timerElement = $("#timer");

    // Map sport types to game options
    const sportGames = {
        basketball: [
            { value: "game1", text: "Basketball Game 1" },
            { value: "game2", text: "Basketball Game 2" }
            // Add more basketball game options here
        ],
        football: [
            { value: "game3", text: "Football Game 1" },
            { value: "game4", text: "Football Game 2" }
            // Add more football game options here
        }
        // Add more sport type mappings here
    };

    // Initialize game options based on the selected sport
    const initialSport = sportSelect.val();
    updateGameOptions(initialSport);

    // When sport selection changes, update game options
    sportSelect.on("change", function() {
        const selectedSport = $(this).val();
        updateGameOptions(selectedSport);
    });

    // Update button text and icon when toggling the donation options
    showDonateButton.on("click", function() {
        if (donateOptions.hasClass("show")) {
            showDonateButton.html('Show Donation Options');
        } else {
            showDonateButton.html('Hide Donation Options');
        }
    });

    // Check if the user has previously seen the modal
    const modalSeen = localStorage.getItem("adblockModalSeen");
    if (!modalSeen) {
        // Show the modal
        adblockModal.modal("show");

        // Save a flag indicating the modal has been seen
        localStorage.setItem("adblockModalSeen", true);
    } else {
        // If modal has been seen before, start the timer immediately
        startTimer();
    }

    // Watch button click event
    watchButton.on("click", function() {
        const selectedGame = gameSelect.val();
        const liveStreamUrl = getLiveStreamUrl(selectedGame);

        streamContainer.css("display", "block");
        streamContainer.html(`<iframe src="${liveStreamUrl}" width="100%" height="400" frameborder="0"></iframe>`);
        scrollTo(streamContainer);
    });

    function updateGameOptions(selectedSport) {
        const games = sportGames[selectedSport] || [];

        gameSelect.empty();
        games.forEach(game => {
            gameSelect.append(`<option value="${game.value}">${game.text}</option>`);
        });
    }

    function getLiveStreamUrl(game) {
        // Replace with your logic to map games to streaming URLs
        const streamUrls = {
            game1: "https://streamdomain.com/game1",
            game2: "https://streamdomain.com/game2",
            game3: "https://streamdomain.com/game3",
            game4: "https://streamdomain.com/game4"
            // Add more mappings here
        };

        return streamUrls[game] || null;
    }

    function scrollTo(element) {
        $("html, body").animate({
            scrollTop: element.offset().top - 20
        }, 1000);
    }

    function startTimer() {
        // Display the timer
        timerElement.css("display", "block");

        let seconds = 5; // Set the timer duration in seconds

        const interval = setInterval(function() {
            timerElement.text(`Redirecting in ${seconds} seconds...`);
            seconds--;

            if (seconds < 0) {
                clearInterval(interval);
                timerElement.css("display", "none");
                // Add any redirect logic here if needed
            }
        }, 1000);
    }
});
