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
            game1: "https://embedstream.me/nba/nba-tv-stream-1",
            game2: "https://vidsrc.stream/rcpvip/N2RjNDZlZWRhOWI3ODg4OTMzZDg0MDIxNjZjMTgyMjQ6ZDNwS2JtSnZjbTE1WkRSNWNrdGxXSEV5VkZwSU5UY3hUbHByWVhWNWJVVnBhbm93VWtwV1ozWnBXR3RaUkVGMlVYaHFhalF4Y0UxcWRrWlFZMU5KYWt0UFIyVTROMDVyT0dGclRVaEJXVUpRTUdWUllWcEJWR2hsVmxWWWVFMHpaV2h4VEhkeE9HdEVXall5YmpKelYyVmhURXgwTDA5cFJHcE1PUzlZYUZGRlVUVllZVFJuYVU4M1ZHTjRlWFV2YkVscUwxRm9kemNyWVRaNmIyTjVjWGhEUWpkR1VDOVhPRE5oY1RSdVFWVmpUVEZCVVdWS0syNXhNa1V3WlVveFdUSjJSbHB5WlV0QmJWcHVkMlkzYkVST1J6VmtZVXRMZWpabUswaEdTbHB2VDJwRGFGUk5kQ3N3ZG1KcmJtdzRRbGt2TUdsSFdFTjZSa3RFV1d0MmJqWXhWamN6VVRoVWFYbE9Ra0p3V0ZsbkszVmpSMlZRV1dsT00zZG5TbE5ZVVhCMFV6ZENNMHhzZVM5ek0wMXZTM0JTWkRWVFZuRldURGx6VUdKb1ZHUm9hM1UzVUhoNFIxcFVjbEpXUlVkWlNsWkRNR2sxZEROSGNsSTRSR2ROTlZaTVprWTJhVVF6ZWpsYVNFNXpLekZzWldNd2RUWjRkSEpYYjFCTldXTkVOMVpWYjJSNWExaFZZbWR5VVhac1MyWmpTRzFuV2s0d1owSklRMnBXYTFkVUwzVnNRMHRsWTNaNlptSkJRVWt5UkdWS1RubENSMVF3VUhjMU9IbFFORGhzTjNKRWIzQlVRbVZDYUZKa1MyVkNkRGRPV25aUVVWcDZjMk13VHpBM1p5dGFNVTVIUVhrNFQwRTFMekpJUVRRM1V5czBhbTU0YnpneFNVeGtVSFZoUkZoNFdGbzRSamtyY1ROSmQzVmFkR2gzYzJaTVdrVnhaRFpRVWxGYWMzQlNNa0o2V0RORmJucFBSRko2ZFhGd2NuaGtOMHhVZHl0RVNFVkNjRk5rTWpWa0syMHZUSHBzUlVGVU1XUnZjVWxhV0RkRE1ubE9jMnRGUjFZeFVtNVFWM1EwVVhwdk9IVTBaVlpoYjBJclVqUjRTRk5GYTBsRGJrZElaa1p2YTFKeFpIbElTRzEzZHpsNVUyZHdhaTh4ZW1ScGNqUjVTVlZUVDFrdlNESlRRelpEZUhvMVRrRXJUMGxLTW5FNFZXSmxkbFJhUm1jMU4ybE5URmRsY1V4TWNWWmtjMUkxTmtsSGFtZ3laVTk1U0RGV2MwUlFNVTFFTW1OcE5EUXdiR0l6WldsTVRVZEpiR1ZtWjI5VldqSnNia04zV2sxMGNWRmtaM0p2ZGt4dWVIZGhhRkl5Wmt0TlIxZEVUbUpZWm1ObFYzbGxSWFlyYVVOeU5YcFlNWE5GUjA5TFFrdFhaaTlaU1QwPQ--",
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
