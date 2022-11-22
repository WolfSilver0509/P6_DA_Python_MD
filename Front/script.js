
const mainUrl = "http://localhost:8000/api/v1/titles/";
let bestMovieInfo 

let bestMovies = []
fetch(mainUrl + "?sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => {
            // debugger;
            document.getElementById("top-title").textContent = data.results[0].title;
            document.querySelector("#top0 > img").src = data.results[0].image_url;
            console.log(data.results);
            for (let i = 1; i < data.results.length; i++) {
                bestMovies.push(data.results[i]);
            }
            fetch(mainUrl + "?sort_by=-imdb_score&page=2")
                .then(response => response.json())
                .then(data => { const begin = bestMovies.length;
                    for (let i = begin; i < 8 ; i++) {
                        bestMovies.push(data.results[i - begin]);
                    }
                        bestMovies.forEach((movie) => {
                        console.log(movie);
                        let movieContainer = document.createElement("div");
                        movieContainer.classList.add("movie");
                        let movieTitle = document.createElement("h3");
                        movieTitle.textContent = movie.title;
                        let movieImage = document.createElement("img");
                        movieImage.src = movie.image_url;
                        movieContainer.appendChild(movieImage);
                        movieContainer.appendChild(movieTitle);
                        document.getElementById("best_box_picture").appendChild(movieContainer);
                 })
                    })
            
            fetch(data.results[0].url)
            .then(response => response.json())
            .then(data => {
                bestMovieInfo = data;
                document.getElementById("top-description").textContent = data.long_description;// a revoir ne s'affiche pas 
                document.getElementById("title").textContent = data.title;
                document.getElementById("description").textContent = data.description;
                document.getElementById("genre").textContent = data.genres;
                document.getElementById("director").textContent = data.directors;
                document.getElementById("imdb_score").textContent = data.imdb_score;
                document.getElementById("duration").textContent = data.duration;
                document.getElementById("date_published").textContent = data.date_published;
                document.getElementById("country").textContent = data.country;// a revoir ne s'affiche pas 
                document.getElementById("actors").textContent = data.actors;
                document.getElementById("image").src = data.image_url;
                document.getElementById("year").textContent = data.year;
                document.getElementById("id").textContent = data.id;
                document.getElementById("note").textContent = data.note;
                document.getElementById("votes").textContent = data.votes;
                document.getElementById("url").textContent = data.url;
                document.getElementById("company").textContent = data.company;
                document.getElementById("languages").textContent = data.languages;
                document.getElementById("writers").textContent = data.writers;
                document.getElementById("budget_currency").textContent = data.budget_currency;
                document.getElementById("budget").textContent = data.budget;
                document.getElementById("metascore").textContent = data.metascore;
                document.getElementById("avg_vote").textContent = data.avg_vote;
                })

        })
        document.getElementById("button_more_info").addEventListener("click", ()=>{
            document.getElementById("modal_box").classList.toggle("hiden");
            

            // mettre les document.get avec les description voulu 
        })
        document.getElementById("button_close").addEventListener("click", ()=>{
            document.getElementById("modal_box").classList.toggle("hiden");
        })


        fetch(mainUrl + "?genre=Horror&sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            data.results.forEach((movie) => {
                let movieContainer = document.createElement("div");
                movieContainer.classList.add("movie");
                let movieTitle = document.createElement("h3");
                movieTitle.textContent = movie.title;
                let movieImage = document.createElement("img");
                movieImage.src = movie.image_url;
                movieContainer.appendChild(movieImage);
                movieContainer.appendChild(movieTitle);
                document.getElementById("horror_box_picture").appendChild(movieContainer);
            })
        })

        