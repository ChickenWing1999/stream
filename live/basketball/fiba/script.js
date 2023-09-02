document.addEventListener("DOMContentLoaded", () => {
    const watchButton = document.getElementById("watchButton");
    const streamContainer = document.getElementById("streamContainer");
    const showDonateButton = $("#showDonateButton");
    const donateOptions = $("#donateOptions");
    const toggleButton = $("#toggleWidget");

    // Toggle the widget when the button is clicked
    toggleWidget.on("click", function() {
        // Create the request form container dynamically
        const requestFormContainer = $("<div>")
            .addClass("request-form-widget")
            .append(`
                <h2 class="section-title">Request Support</h2>
                <form action="#" method="post" id="supportForm">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Your Message</label>
                        <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            `);

        // Append the form container to the body
        $("body").append(requestFormContainer);

        // Add a close button to hide the form
        requestFormContainer.append('<button id="closeWidget" class="widget-button">Close</button>');

        // Toggle the expanded class to show/hide the form
        requestFormContainer.toggleClass("expanded");

        // Close the form when the close button is clicked
        $("#closeWidget").on("click", function() {
            requestFormContainer.remove();
        });

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
            game1: "https://1stream.eu/game/finland-venezuela-live-stream/688028?embed=1",
            game2: "https://1stream.eu/game/south-sudan-angola-live-stream/688026?embed=1",
            game3: "https://1stream.eu/game/egypt-new-zealand-live-stream/688052?embed=1",
            game4: "https://1stream.eu/game/ivory-coast-france-live-stream/688030?embed=1",
            game5: "https://1stream.eu/game/cape-verde-japan-live-stream/688029?embed=1",
            game6: "https://1stream.eu/game/philippines-china-live-stream/688027?embed=1",
            game7: "https://1stream.eu/game/jordan-mexico-live-stream/687997?embed=1",
            game8: "https://1stream.eu/game/iran-lebanon-live-stream/687998?embed=1",
            game9: "https://streamingnow.pro/tvon.php?hd=103",
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
