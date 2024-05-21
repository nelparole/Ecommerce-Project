/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu'),
        navmenuShop = document.getElementById('nav-toggle'),
        navmenuClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navmenuShop){
    navmenuShop.addEventListener("click", () =>{
        navmenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navmenuClose){
    navmenuClose.addEventListener("click", () =>{
    navmenu.classList.remove('show-menu')
})
}

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')



/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop){
    cartShop.addEventListener("click", () =>{
        cart.classList.add('show-cart')
    })
}


/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose){
        cartClose.addEventListener("click", () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
    loginShop = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close')


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginShop){
    loginShop.addEventListener("click", () =>{
    login.classList.add('show-login')
    })
}


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose){
    loginClose.addEventListener("click", () =>{
    login.classList.remove('show-login')
})
}

/*=============== HOME SWIPER ===============*/



  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.home-swiper', {
        // Optional parameters
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greated than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)



/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than or equal to 350 viewport height, add the 'show-scroll' class to the element with the 'scroll-top' class
    if (window.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
}

// Add scroll event listener to the window, and call the scrollUp function when scrolling occurs
window.addEventListener('scroll', scrollUp);


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/
