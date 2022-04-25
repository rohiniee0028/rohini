// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = amount;

let movies_div = document.getElementById("movies");
let id;

async function searchMovies(){

try{
  const query = document.getElementById("search").value;

  const res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);

  const data = await res.json();

  const movies = data.Search;

  console.log(movies);
  appendMovies(movies)

  }catch(err){
    console.log("err:",err);
   }

}

async function main(){
   let data = await searchMovies();
   
   if(data === undefined){
       return false;
   }

   appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}

let arr = JSON.parse(localStorage.getItem("movies")) || [];
function appendMovies(data){
  console.log(data);
  movies_div.innerHTML = null;

  data.forEach(function(el){

      movies_div.innerHTML = null;

      let div = document.createElement("div");
      div.setAttribute("class","div");

      let poster = document.createElement("img");
      poster.src = el.Poster;
      poster.setAttribute("class","poster");

      let title = document.createElement("div");
      title.innerText = el.Title;

      let button = document.createElement("button");
      button.innerText = "book now";
      button.setAttribute("class","book now");
      button.addEventListener("click",function(){
        showOnCart(el) ;
      });

      div.append(poster,title,button);

      movies_div.append(div);

  })

  function showOnCart(el){
      arr.push(el);
      localStorage.setItem("movies",JSON.stringify(arr));
     window.location.href = "checkout.html";
     
  }

}