var open = document.getElementById("openmenu");
var sidenav = document.getElementById("sidenav");
var closenav = document.getElementById("closemenu");
open.addEventListener("click", function(){
    sidenav.style.left = "0";
});
closenav.addEventListener("click", function(){
    sidenav.style.left = "-50%";
});
