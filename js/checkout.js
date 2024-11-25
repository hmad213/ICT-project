let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

let update = false;
let hr = false
let total = 0
let cartItems = document.getElementById("cart-items");
for (let item in cart){
    if(cart.hasOwnProperty(item)){
        if(cart[item].amount > 0){
            total += cart[item].amount * cart[item].price;
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("item");
            itemDiv.innerHTML = `<img src="../images/${cart[item].img}">\n
                                <div class="details">\n
                                    <h3>${item}</h3>\n
                                    <span>Rs ${cart[item].price}</span>\n
                                </div>\n
                                <span>X ${cart[item].amount}</span>`;
            cartItems.appendChild(itemDiv);
            update = true;
            cartItems.appendChild(document.createElement("hr"));
        }
    }
}
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
                        <button id="checkout-button" onclick="place_order()">Checkout</button>\n
                        </div>`

function select_option(option){
    if (option === "cod"){
        document.getElementById("cod").style.borderColor = "greenyellow";
        document.getElementById("credit").style.borderColor = "red";
    }
    else{
        document.getElementById("cod").style.borderColor = "red";
        document.getElementById("credit").style.borderColor = "greenyellow";
    }
}

function place_order(){
    sessionStorage.clear();
    window.location.href = "./final.html";
}

function back_to_home(){
    sessionStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "../index.html"
}