// Custom URL to your website's homepage
        const homepageURL = "https://1stream.pages.dev/";

        // Countdown timer function
        function startCountdown() {
            let timeLeft = 45;
            const countdownElement = document.getElementById("countdown");
            countdownElement.textContent = `Redirecting in ${timeLeft} seconds`;

            const countdownInterval = setInterval(() => {
                timeLeft--;
                countdownElement.textContent = `Redirecting in ${timeLeft} seconds`;
                if (timeLeft === 0) {
                    clearInterval(countdownInterval);
                    window.location.href = homepageURL;
                }
            }, 1000);
        }

        // Script to handle the search form submission with client-side validation
        document.getElementById("search-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const searchInput = document.getElementById("search-input").value.trim();
            const errorMessage = document.getElementById("error-message");
            if (searchInput.length === 0) {
                errorMessage.textContent = "Please enter keywords to search.";
                return;
            }
            // Clear any previous error message
            errorMessage.textContent = "";

            // Modify the URL and redirect to your site's search page or Google search, etc.
            window.location.href = homepageURL + "search?q=" + encodeURIComponent(searchInput);
        });

        // Start the countdown timer when the page loads
        startCountdown();
