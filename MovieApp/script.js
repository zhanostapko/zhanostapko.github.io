//Script.js

// key 3fd2be6f0c70a2a598f084ddfb75487c&page=1

const apiUrl =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

const imgUrl = 'https://image.tmdb.org/t/p/w1280';

const main = document.querySelector('main');

const form = document.querySelector('form');
const search = document.querySelector('.search');

const showMovies = function (data) {
  main.innerHTML = '';

  data.forEach((movie) => {
    const { title, vote_average: rating, overview, poster_path: img } = movie;

    const ratingColor = function (rate) {
      if (rate >= 9.5) return 'green';
      if (rate < 9.5 && rate > 6.5) return 'orange';
      if (rate < 6.5) return 'red';
    };

    const div = document.createElement('div');
    div.classList.add('movie');

    div.innerHTML = `
        <img src="${imgUrl + img}" alt="">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${ratingColor(rating)}">${rating}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
  `;

    main.appendChild(div);
  });
};

const getMovies = function (url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showMovies(data.results));
};

getMovies(apiUrl);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (search.value && search.value !== '') {
    getMovies(
      `https://api.themoviedb.org/3/search/movie?&api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${search.value}`
    );

    search.value = '';
  } else {
    window.location.reload();
  }
});
