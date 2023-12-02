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


// Search container

var products = document.getElementById("product-container");
var search = document.getElementById("search");
var list = products.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < list.length; count++) {
        var pname = list[count].querySelector('h4').textContent.toUpperCase();
        
        if (pname.indexOf(enteredValue) < 0) {
            list[count].style.display = 'none';
        } else {
            list[count].style.display = 'block';
        }
    }
});

// Filter container

var checkboxes = document.querySelectorAll('input[type="checkbox"][name="tags"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        filterProducts();
    });
});

function filterProducts() {
    var selectedTags = Array.from(document.querySelectorAll('input[type="checkbox"][name="tags"]:checked'))
        .map(function(checkedTag) {
            return checkedTag.value.toLowerCase();
        });

    var productContainers = document.querySelectorAll('.products-arrival-containers');

    productContainers.forEach(function(container) {
        var productName = container.querySelector('h4').textContent.toLowerCase();
        var display = selectedTags.every(function(tag) {
            return productName.includes(tag);
        });

        if (display) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}


