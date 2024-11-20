const items = {
    "Deal 1":{
        amount: 0,
        img: "place.jpg",
        price: 50
    },
    "Deal 2":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Deal 3":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Dal Bunkabab":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Bunkabab with Egg":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Chapli Burger":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Fries":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Cold drink":{
        amount: 0,
        img: "place.jpg",
        price: 0
    },
    "Loaded Fries":{
        amount: 0,
        img: "place.jpg",
        price: 0
    }
}

usedItems = [];

let cart = document.getElementById("cart");
let cartButton = document.getElementById("cart-button");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");
let cartItems = document.getElementById("cart-items");
let emptyCart = document.getElementById("empty-cart");

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

function update_cart(){
    let update = false;
    cartItems.innerHTML = ""
    for (let item in items){
        if(items.hasOwnProperty(item)){
            if(items[item].amount > 0){
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                itemDiv.innerHTML = `<img src=images/${items[item].img}>\n
                                    <h2>${item} X ${items[item].amount}</h2>\n
                                    <span>Rs${items[item].price * items[item].amount}</span>`;
                cartItems.appendChild(itemDiv);
                update = true
            }
        }
    }
    if(update){
        cartItems.style.visibility = "visible";
        emptyCart.style.visibility = "hidden";
    }
    else{
        cartItems.style.visibility = "hidden";
        emptyCart.style.visibility = "visible";
    }
}

function add_to_cart(option){
    let item = items[option];
    item.amount += 1;
    update_cart();
    console.log(item.amount)
}