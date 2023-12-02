var open = document.getElementById("openmenu");
var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closemenu");
open.addEventListener("click", function(){
    sidenav.style.left = "0";
});
closenav.addEventListener("click", function(){
    sidenav.style.left = "-50%";
});

var offerBar = document.querySelector(".offer")
document.getElementById("offer-close").addEventListener("click",
function(){
    offerBar.style.display="none"
}
)