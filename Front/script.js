const mainUrl = "http://localhost:8000/api/v1/titles/";
let bestMovieInfo;

let bestMovies = [];
fetch(mainUrl + "?sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    // debugger;
    document.getElementById("top-title").textContent = data.results[0].title;
    document.querySelector("#top0 > img").src = data.results[0].image_url;
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMovies.push(data.results[i]);
    }
    fetch(mainUrl + "?sort_by=-imdb_score&page=2")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMovies.length;
        for (let i = begin; i < 8; i++) {
          bestMovies.push(data.results[i - begin]);
        }
        bestMovies.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("best_box_picture")
            .appendChild(movieContainer);
        });
      });

    fetch(data.results[0].url)
      .then((response) => response.json())
      .then((data) => {
        bestMovieInfo = data;
        document.getElementById("top-description").textContent =
          data.long_description; 
        document.getElementById("title_best").textContent = data.title;
        console.log(data);
        document.getElementById("description").textContent = data.description;
        document.getElementById("genre").textContent = data.genres;
        document.getElementById("director").textContent = data.directors;
        document.getElementById("imdb_score").textContent = data.imdb_score;
        document.getElementById("duration").textContent = data.duration;
        document.getElementById("date_published").textContent = data.date_published;
        document.getElementById("country").textContent = data.countries; 
        document.getElementById("actors").textContent = data.actors;
        document.getElementById("image").src = data.image_url;
        document.getElementById("year").textContent = data.year;
        document.getElementById("id").textContent = data.id;
        document.getElementById("rated").textContent = data.rated;
        document.getElementById("votes").textContent = data.votes;
        document.getElementById("url").textContent = data.url;
        document.getElementById("company").textContent = data.company;
        document.getElementById("languages").textContent = data.languages;
        document.getElementById("writers").textContent = data.writers;
        document.getElementById("budget_currency").textContent = data.budget_currency;
        document.getElementById("budget").textContent = data.budget;
        document.getElementById("metascore").textContent = data.metascore;
        document.getElementById("avg_vote").textContent = data.avg_vote;
      });
  });
document.getElementById("button_more_info").addEventListener("click", () => {
  document.getElementById("modal_box").classList.toggle("hiden");

});
document.getElementById("button_close").addEventListener("click", () => {
  document.getElementById("modal_box").classList.toggle("hiden");
});

// HORROR

let bestMoviesHorror = [];
fetch(mainUrl + "?genre=Horror&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesHorror.push(data.results[i]);
    }
    fetch(mainUrl + "?genre=Horror&page=2&sort_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesHorror.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesHorror.push(data.results[i - begin]);
        }
        bestMoviesHorror.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("horror_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

//Romance

let bestMoviesRomance = [];
fetch(mainUrl + "?genre=Romance&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesRomance.push(data.results[i]);
    }
    fetch(mainUrl + "?genre=Romance&page=2&sort_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesRomance.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesRomance.push(data.results[i - begin]);
        }
        bestMoviesRomance.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("love_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

// Anime

let bestMoviesAnime = [];
fetch(mainUrl + "?genre=Animation&sort_by=-imdb_score")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    for (let i = 1; i < data.results.length; i++) {
      bestMoviesAnime.push(data.results[i]);
    }
    fetch(mainUrl + "?genre=Animation&page=2&sort_by=-imdb_score")
      .then((response) => response.json())
      .then((data) => {
        const begin = bestMoviesAnime.length;
        for (let i = begin; i < 8; i++) {
          bestMoviesAnime.push(data.results[i - begin]);
        }
        bestMoviesAnime.forEach((movie) => {
          console.log(movie);
          let movieContainer = document.createElement("div");
          movieContainer.classList.add("movie");
          movieContainer.addEventListener("click", () => {
            displayModal(movie);
          });
          let movieTitle = document.createElement("h3");
          movieTitle.textContent = movie.title;
          let movieImage = document.createElement("img");
          movieImage.src = movie.image_url;
          movieContainer.appendChild(movieImage);
          movieContainer.appendChild(movieTitle);
          document
            .getElementById("anime_box_picture")
            .appendChild(movieContainer);
        });
      });
  });

displayModal = (data) => {
  fetch(data.url)
    .then((response) => response.json())
    .then((movie) => {
      console.log(movie);
      document.getElementById("modal_box_2").classList.toggle("hiden");
      document.getElementById("title_2").textContent = movie.title;
      document.getElementById("description_2").textContent = movie.description;
      document.getElementById("genre_2").textContent = movie.genres;
      document.getElementById("director_2").textContent = movie.directors;
      document.getElementById("imdb_score_2").textContent = movie.imdb_score;
      document.getElementById("duration_2").textContent = movie.duration;
      document.getElementById("date_published_2").textContent =
        movie.date_published;
      document.getElementById("country_2").textContent = movie.countries; // a revoir ne s'affiche pas
      document.getElementById("actors_2").textContent = movie.actors;
      document.getElementById("image_2").src = movie.image_url;
      document.getElementById("year_2").textContent = movie.year;
      document.getElementById("id_2").textContent = movie.id;
      document.getElementById("rated_2").textContent = movie.rated;
      document.getElementById("votes_2").textContent = movie.votes;
      document.getElementById("url_2").textContent = movie.url;
      document.getElementById("company_2").textContent = movie.company;
      document.getElementById("languages_2").textContent = movie.languages;
      document.getElementById("writers_2").textContent = movie.writers;
      document.getElementById("budget_currency_2").textContent =
        movie.budget_currency;
      document.getElementById("budget_2").textContent = movie.budget;
      document.getElementById("metascore_2").textContent = movie.metascore;
      document.getElementById("avg_vote_2").textContent = movie.avg_vote;
    });
};

document.getElementById("button_close_2").addEventListener("click", () => {
  document.getElementById("modal_box_2").classList.toggle("hiden");
});
