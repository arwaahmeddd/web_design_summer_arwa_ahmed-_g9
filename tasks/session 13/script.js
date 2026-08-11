var items = document.querySelectorAll("li");

function changeColor(item) {

    items.forEach(function(x) {
        x.style.color = "black";
    });

    item.style.color = "blue";
}