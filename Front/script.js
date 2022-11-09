
const mainUrl = "http://localhost:8000/api/v1/titles/";
let bestMovieInfo 


fetch(mainUrl + "?sort_by=-imdb_score")
        .then(response => response.json())
        .then(data => {
            // debugger;
            document.getElementById("top-title").textContent = data.results[0].title;
            document.querySelector("#top0 > img").src = data.results[0].image_url;
            console.log(data.results[0]);
            //buttonPlay.setAttribute("onclick", `openModal("${data["results"][0]["id"]}")`)
            fetch(data.results[0].url)
            .then(response => response.json())
            .then(data => {
                bestMovieInfo = data;
                document.getElementById("top-description").textContent = data.description;
                })

        })
        document.getElementById("button_more_info").addEventListener("click", ()=>{
            document.getElementById("modal_box").classList.toggle("hiden");
            // mettre les document.get avec les description voulu 
        })
        document.getElementById("button_close").addEventListener("click", ()=>{
            document.getElementById("modal_box").classList.toggle("hiden");
        })