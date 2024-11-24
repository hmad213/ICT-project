let cart = document.getElementById("cart");
let cartButton = document.getElementById("cart-button");
let sidebar = document.getElementById("sidebar");
let sidebarButton = document.getElementById("sidebar-button");
let overlay = document.getElementById("overlay");
let cartItems = document.getElementById("cart-items");
let emptyCart = document.getElementById("empty-cart");
let usedCart = document.getElementById("used-cart");

let items = JSON.parse(sessionStorage.getItem('cart')) || [];
if (items == 0){
    console.log("hi");
    items = {
        "Deal 1":{
            amount: 0,
            img: "Deal-1.png",
            price: 450
        },
        "Deal 2":{
            amount: 0,
            img: "Deal-2.png",
            price: 750
        },
        "Deal 3":{
            amount: 0,
            img: "Deal-3.png",
            price: 950
        },
        "Dal Bunkabab":{
            amount: 0,
            img: "Dal-Bunkabab.png",
            price: 220
        },
        "Bunkabab with Egg":{
            amount: 0,
            img: "Bunkabab-with-Egg.png",
            price: 250
        },
        "Chapli Burger":{
            amount: 0,
            img: "Chapli-Burger.png",
            price: 250
        },
        "Fries":{
            amount: 0,
            img: "Fries.png",
            price: 100
        },
        "Cold drink":{
            amount: 0,
            img: "Cold-Drink.png",
            price: 100
        },
        "Loaded Fries":{
            amount: 0,
            img: "Loaded-Fries.png",
            price: 200
        }
    }
}
else{
    update_cart()
}
console.log(items)

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

function save_cart(){
    sessionStorage.setItem('cart', JSON.stringify(items));
    window.location.href = "./pages/checkout.html"
}

function update_total(total){
    let totalDiv = document.getElementById("total");
    let tax = Math.round(total * 0.13);
    totalDiv.innerHTML = `<div>\n
                            <span>Total:</span>\n
                            <span>${total}</span>\n
                         </div>\n
                         <div>\n
                            <span>Tax(13%):</span>\n
                            <span>${tax}</span>\n
                         </div>\n
                         <div>\n
                            <span>Delivery Fee:</span>\n
                            <span>150</span>\n
                         </div>
                         <div>\n
                            <span>Grand Total:</span>\n
                            <span>${total+tax+150}</span>\n
                         </div>\n
                         <div id="checkout-button-div">\n
                            <button id="checkout-button" onclick="save_cart()">Checkout</button>\n
                         </div>`
}

function update_cart(){
    let update = false;
    let hr = false
    let total = 0
    cartItems.innerHTML = ""
    for (let item in items){
        if(items.hasOwnProperty(item)){
            if(items[item].amount > 0){
                total += items[item].amount * items[item].price;
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
                update = true;
                cartItems.appendChild(document.createElement("hr"));
            }
        }
    }
    if(update){
        usedCart.style.visibility = "visible";
        emptyCart.style.visibility = "hidden";
        update_total(total);
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