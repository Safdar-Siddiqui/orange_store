let cartCount = document.getElementById("cart-count");
let cart = document.querySelector(".cart");
let cartOuter = document.querySelector("#cartOuter");

let loginModal = document.querySelector(".loginModal");
let loginOuter = document.querySelector("#loginOuter");

let signupModal = document.querySelector(".signupModal");
let signupOuter = document.querySelector("#signupOuter");

let menuShow = document.querySelector(".menu");

let sideMenu = document.querySelector(".sideMenu");

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

var flag2 = false;
function showMenu(){
    if(flag2 === false){
        sideMenu.style.display = "block";
        flag2 = true;
    }
    else{
        sideMenu.style.display = "none";
        flag2= false;
    }
}

// function showLogin(){
//     console.log("Login Button clicked");
// }

function showLogin(){
    if(flag== false){
        loginOuter.style.display = "block";
        signupOuter.style.display = "none";


        // cart.style.display = "block";
        flag= true;
    }
    else{
        loginOuter.style.display = "none";
        // cart.style.display = "none";
        flag= false;
    }
}

function closeLogin(){
    loginOuter.style.display = "none";
    flag = false;

}

function showSignup(){
    if(flag== false){
        signupOuter.style.display = "block";
        loginOuter.style.display = "none";
        flag= true;
    }
    else{
        signupOuter.style.display = "none";
        flag= false;
    }
}

function closeSignup(){
    signupOuter.style.display = "none";
    flag = false;

}