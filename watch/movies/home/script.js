const movies = [
    { title: 'The Nun (2023)', poster: 'https://www.themoviedb.org/t/p/original/cn6kjfbE8jhiBuhanIc2pwuzhG5.jpg' },
    { title: 'Movie 2', poster: 'movie2.jpg' },
    { title: 'Movie 3', poster: 'movie3.jpg' },
    // Add more movie data here
];

const movieList = document.getElementById('movie-list');
const searchBox = document.getElementById('search-box');

// Function to display movies
function displayMovies() {
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.classList.add('movie-poster');
        movieCard.appendChild(poster);

        const title = document.createElement('div');
        title.textContent = movie.title;
        title.classList.add('movie-title');
        movieCard.appendChild(title);

        movieList.appendChild(movieCard);
    });
}

// Initial display
displayMovies();

// Search functionality
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    movieList.innerHTML = '';

    if (filteredMovies.length === 0) {
        movieList.innerHTML = '<p>No movies found.</p>';
    } else {
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const poster = document.createElement('img');
            poster.src = movie.poster;
            poster.classList.add('movie-poster');
            movieCard.appendChild(poster);

            const title = document.createElement('div');
            title.textContent = movie.title;
            title.classList.add('movie-title');
            movieCard.appendChild(title);

            movieList.appendChild(movieCard);
        });
    }
});
