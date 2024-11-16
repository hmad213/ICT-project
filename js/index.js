let cart = document.getElementById("cart");
let cartButton = document.getElementById("cart-button");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");

cartButton.onclick = function(){
    cart.style.width = "400px";
    overlay.style.visibility = "visible";
}

sidebarButton.onclick = function(){
    sidebar.style.width = "400px";
    overlay.style.visibility = "visible";
}

overlay.onclick = function(){
    sidebar.style.width = "0px";
    cart.style.width = "0px";
    overlay.style.visibility = "hidden";
}

document.getElementById("hello").onclick = function(){
    console.log("Hello");
}