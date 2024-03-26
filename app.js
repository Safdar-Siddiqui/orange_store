let cartCount = document.getElementById("cart-count");
let cart = document.querySelector(".cart");
let cartOuter = document.querySelector("#cartOuter");

// let nav = document.querySelector("nav");

// let lastScrollTop = 0;

// document.addEventListener("scroll", ()=>{
//     // nav.style.opacity = 0.8;

//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//       // Scrolling down
//       nav.style.opacity = '0.7'; // You can adjust the opacity value as needed
//     } else {
//       // Scrolling up
//       nav.style.opacity = '1';
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// })


let count = 1;

let flag = false;

function addToCart(){
    cartCount.innerText = count;
    count++;
}


function showCart(){
    if(flag== false){
        cartOuter.style.display = "block";
        // cart.style.display = "block";
        flag= true;
    }
    else{
        cartOuter.style.display = "none";
        // cart.style.display = "none";
        flag= false;
    }
}

function closeCart(){
    cartOuter.style.display = "none";
    flag = false;

}