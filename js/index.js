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

let cart = document.getElementById("cart");
let cartButton = document.getElementById("cart-button");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");
let cartItems = document.getElementById("cart-items");
let emptyCart = document.getElementById("empty-cart");
let usedCart = document.getElementById("used-cart")

cartButton.onclick = function(){
    cart.style.width = "500px";
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
    let hr = false
    cartItems.innerHTML = ""
    for (let item in items){
        if(items.hasOwnProperty(item)){
            if(items[item].amount > 0){
                if(hr){
                    cartItems.appendChild(document.createElement("hr"))
                }
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                itemDiv.innerHTML = `<img src=images/${items[item].img}>\n
                                    <div class="details">\n
                                        <h3>${item}</h3>\n
                                        <span>Rs ${items[item].price}</span>\n
                                    </div>
                                    <div class="add-remove-buttons">
                                        <button class="add-button" onclick="add_to_cart('${item}')">+</button>
                                        <button class="remove-button" onclick="remove_from_cart('${item}')">-</button>
                                    </div>
                                    <span>X ${items[item].amount}</span>`;
                cartItems.appendChild(itemDiv);
                update = true
                hr = true
            }
        }
    }
    if(update){
        usedCart.style.visibility = "visible";
        emptyCart.style.visibility = "hidden";
    }
    else{
        usedCart.style.visibility = "hidden";
        emptyCart.style.visibility = "visible";
    }
}

function add_to_cart(option){
    let item = items[option];
    item.amount += 1;
    update_cart();
}

function remove_from_cart(option){
    let item = items[option];
    item.amount -= 1;
    update_cart();
}