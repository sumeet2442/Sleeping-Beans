let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var item = [];

function placeOrder() {
    var x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    
    document.getElementById("cart-items").innerHTML = '';   
}

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function addItem(items) {
    item.push(items);
    myFunction();
    // console.log(item);
    let cart_items = '';
    for (i = 0; i < item.length; i++) {

        cart_items += `<div class='cart-item'>
            <span class='fas fa-times'></span>
            <img src='images/cart-item-1.png' alt='' />
            <div class='content'>
                <h3 id='item'>${item[i][0]}</h3>
                <div class='price' id='pricee'>${item[i][1]}</div>
            </div>
        </div>`
    }
    document.getElementById("cart-items").innerHTML = cart_items;



    // var x = document.getElementById("snackbar");
    // x.className = "show";
    // setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}