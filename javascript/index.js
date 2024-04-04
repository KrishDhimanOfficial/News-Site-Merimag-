var search_btn = document.querySelector("#search");
var target = document.querySelector("#searchbox");

search_btn.addEventListener("click", ()=>{
    target.classList.toggle("active");
});

// news masonry
var colors = ["red","green","purple","blue","orange","yellow","lightblue"];
var set_prop = document.querySelectorAll(".news");

let i = 0;
set_prop.forEach(set_prop => {
    set_prop.style.setProperty("background-image", `linear-gradient(138deg , transparent, ${colors[i]})`);
    i < colors.length ? ++i :false;
});



