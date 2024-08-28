var menuIcon = document.querySelector(".menu");
var siderbar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    siderbar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
