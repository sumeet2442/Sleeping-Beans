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

function searchItem() {
    var items = ['latte', 'hot mocha', 'cappacuino', 'americano', 'espresso', 'frappe', 'iced tea', 'cold brew'];
    let search_item = document.getElementById('search-box').value.toLowerCase();
    console.log(search_item);
    for (var i = 0; i < items.length; i++) {
        if (items[i] == search_item) {
            navbar.classList.toggle('active');
            /*
            let text = document.getElementById("menu").innerHTML;
                let re = new RegExp(search_item,"g"); // search for all instances
            let newText = text.replace(re, `<mark>${search_item}</mark>`);
            document.getElementById("menu").innerHTML = newText;
            */
            location.replace("#menu")
            break;
        }
    }
    if (items[i] != search_item) {
        var x = document.getElementById("item_snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}

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