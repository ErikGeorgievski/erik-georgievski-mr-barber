document.addEventListener('DOMContentLoaded', function () {
  /**
   * Add event on element
   */
  const addEventOnElem = function (elem, type, callback) {
    if (elem.length !== undefined) {
      // Om elem är en samling (ex. NodeList eller array)
      Array.from(elem).forEach(function (el) {
        el.addEventListener(type, callback);
      });
    } else {
      // Om elem är en enskild nod
      elem.addEventListener(type, callback);
    }
  }
  // Navbar toggle
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  const toggleNavbar = () => navbar.classList.toggle("active");
  const closeNavbar = () => navbar.classList.remove("active");

  addEventOnElem(navToggler, "click", toggleNavbar);
  addEventOnElem(navLinks, "click", closeNavbar);

  // Header & back top btn active when scroll down to 100px
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");

  const headerActive = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  }

  addEventOnElem(window, "scroll", headerActive);

  // Filter function
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter]");

  let lastClickedFilterBtn = filterBtns[0];

  const filter = function () {
    lastClickedFilterBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedFilterBtn = this;

    for (let i = 0; i < filterItems.length; i++) {
      if (this.dataset.filterBtn === filterItems[i].dataset.filter || this.dataset.filterBtn === "all") {
        filterItems[i].style.display = "block";
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].style.display = "none";
        filterItems[i].classList.remove("active");
      }
    }
  }

  addEventOnElem(filterBtns, "click", filter);

  // Initialize ScrollReveal
  const srLeft = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
  });

  const srRight = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
  });

  // ABOUT section
  srLeft.reveal('#id01', { delay: 100 });

  // ASKILLS section
  srRight.reveal('#id02', { delay: 100 });
  srRight.reveal('#move', { delay: 100 });
});



// document.addEventListener('DOMContentLoaded', function () {
//   /**
//    * Add event on element
//    */
//   const addEventOnElem = function (elem, type, callback) {
//     if (elem.length !== undefined) {
//       // Om elem är en samling (ex. NodeList eller array)
//       elem.forEach(function (el) {
//         el.addEventListener(type, callback);
//       });
//     } else {
//       // Om elem är en enskild nod
//       elem.addEventListener(type, callback);
//     }
//   }

//   // Användningsexempel:
//   const elements = document.querySelectorAll('.some-elements');

//   addEventOnElem(elements, 'click', function () {
//     console.log('Element klickat!');
//   });






//   /**
//    * Navbar toggle
//    */
//   const navbar = document.querySelector("[data-navbar]");
//   const navToggler = document.querySelector("[data-nav-toggler]");
//   const navLinks = document.querySelectorAll("[data-nav-link]");

//   const toggleNavbar = () => navbar.classList.toggle("active");
//   const closeNavbar = () => navbar.classList.remove("active");

//   addEventOnElem(navToggler, "click", toggleNavbar);
//   addEventOnElem(navLinks, "click", closeNavbar);

//   /**
//    * Header & back top btn active when scroll down to 100px
//    */
//   const header = document.querySelector("[data-header]");
//   const backTopBtn = document.querySelector("[data-back-top-btn]");

//   const headerActive = function () {
//     if (window.scrollY > 100) {
//       header.classList.add("active");
//       backTopBtn.classList.add("active");
//     } else {
//       header.classList.remove("active");
//       backTopBtn.classList.remove("active");
//     }
//   }

//   addEventOnElem(window, "scroll", headerActive);

//   /**
//    * Filter function
//    */
//   const filterBtns = document.querySelectorAll("[data-filter-btn]");
//   const filterItems = document.querySelectorAll("[data-filter]");

//   let lastClickedFilterBtn = filterBtns[0];

//   const filter = function () {
//     lastClickedFilterBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedFilterBtn = this;

//     for (let i = 0; i < filterItems.length; i++) {
//       if (this.dataset.filterBtn === filterItems[i].dataset.filter || this.dataset.filterBtn === "all") {
//         filterItems[i].style.display = "block";
//         filterItems[i].classList.add("active");
//       } else {
//         filterItems[i].style.display = "none";
//         filterItems[i].classList.remove("active");
//       }
//     }
//   }

//   addEventOnElem(filterBtns, "click", filter);
// });



// document.addEventListener('DOMContentLoaded', function () {

//   // Initialize ScrollReveal
//   const srLeft = ScrollReveal({
//     origin: 'top',
//     distance: '100px',
//     duration: 2000,
//     reset: true
//   });

//   const srRight = ScrollReveal({
//     origin: 'bottom',
//     distance: '80px',
//     duration: 2000,
//     reset: true
//   });

//   // ABOUT section
//   srLeft.reveal('#id01', { delay: 100 });


//   // ASKILLS section
//   srRight.reveal('#id02', { delay: 100 });

//   srRight.reveal('#move', { delay: 100 });



// });




