'use strict';

// alert("fihv;ef")

function isMobileOrTablet() {
  // Get the screen width.
  var width = window.screen.width;

  // Return true if the screen size is less than 768px wide.
  return width < 821;
}

if (isMobileOrTablet()) {
  // Display an alert message.
  alert('Enhanced visual appearance in - DESKTOP MODE (width > 991px)');

  // Redirect to the desktop version of the website.
  // window.location.href = 'https://www.example.com/desktop/';
}



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* 
 *Parallax Effect
 */ 
 const parallaxElements = document.querySelectorAll("[data-parallax]");

 window.addEventListener("mousemove", event =>{
     for(let i=0, len=parallaxElements.length; i<len; i++){
         const movementX = (event.clientX/window.innerWidth)*Number(parallaxElements[i].dataset.parallaxSpeed);
         const movementY = (event.clientY/window.innerHeight)*Number(parallaxElements[i].dataset.parallaxSpeed);
 
         parallaxElements[i].animate({
             transform: `translate(${movementX}px, ${movementY}px)`
         }, {duration: 500, fill: "forwards"} );
     }
 })


/* 
 *disappear Effect
 */ 
 function disappear(span) {
  span.style.display = 'none';
}

document.querySelectorAll('.dc').forEach(span => {
  span.addEventListener('click', () => {
    disappear(span);
  });
});

/* Refresh Button - Start*/ 
function refreshPage() {
  window.location.reload();
}

const buttons = document.querySelectorAll("[id^='refreshButton']");
for (const button of buttons) {
  button.addEventListener("click",refreshPage );
}


/* Refresh Button - end*/ 

  /**
   * Porfolio isotope and filter
   */
  // window.addEventListener('load', () => {
  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }

  // });

