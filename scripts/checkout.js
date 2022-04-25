// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = amount;

let movies = JSON.parse(localStorage.getItem("movies"));

movies.map(function(el){

    let div = document.createElement("div");
    div.setAttribute("class","div");

    let title = document.createElement("h2");
    title.innerHTML = el.Title;
    
    let poster = document.createElement("img");
    poster.src = el.Poster;
    poster.setAttribute("class","poster");

    div.append(title,poster);

    document.getElementById("movies").append(div);
})
