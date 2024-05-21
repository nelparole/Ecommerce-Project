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
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            populateNewArrivals(products.slice(10, 20)); // Get products from index 10 to index 19
            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle the error gracefully
        });

    function populateNewArrivals(products) {
        const newSwiperWrapper = document.querySelector('.new-swiper .swiper-wrapper');

        // Clear existing content
        newSwiperWrapper.innerHTML = '';

        // Infinite loop: concatenate products array with itself
        products = [...products, ...products];

        // Iterate over the products and generate HTML for each slide
        products.forEach(product => {
            // Limit title to 20 characters
            const truncatedTitle = product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title;

            const slideHTML = `
                <div class="new_content swiper-slide">
                    <div class="new_tag">-50%</div>
                    <img src="${product.image}" alt="${truncatedTitle}" class="new_img">
                    <h3 class="new_title">${truncatedTitle}</h3>
                    <span class="new_subtitle">${product.category}</span>
                    <div class="new_prices">
                        <span class="new_price">$${product.price.toFixed(2)}</span>
                        <span class="new_discount">$${(product.price * 2).toFixed(2)}</span>
                    </div>
                    <a href="#" class="button new_button">
                        <i class="bx bx-cart alt new_icon"></i>
                    </a>
                </div>
            `;

            // Append slide HTML to the swiper wrapper
            newSwiperWrapper.innerHTML += slideHTML;
        });

        // Initialize Swiper after adding new slides
        var mySwiper = new Swiper('.new-swiper', {
            // Common parameters
            spaceBetween: 16,
            centeredSlides: true,
            loop: true,

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 3,
                },
                // when window width is >= 1200px
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }
});


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
