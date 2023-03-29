// const toggleMenu = document.querySelector(".toggle__menu");
// const header__content2 = document.querySelector(".header__content2");
// const backg = document.querySelector(".backg");

// toggleMenu.addEventListener("click", () => {
//   toggleMenu.classList.toggle("open");
//   header__content2.classList.toggle("open");
//   backg.classList.toggle("blurr");
// })





// const kamote = document.querySelectorAll(".links__item h4");
// kamote.forEach((kamoteq) => {
//   kamoteq.addEventListener("click", () => {
//     kamoteq.nextElementSibling.classList.toggle("open");
//     kamoteq.querySelector("i").classList.toggle("open");

//   })
// })
  
// });

// const starNav=document.querySelectorAll(".star__nav__link");
// const starContent=document.querySelectorAll(".coffee__tab__content");
// starNav.forEach((star) => {
//   star.addEventListener("click", () => {
//     removeActiveStar();
//     star.classList.add("active");
//     const activeContent= document.querySelector(`#${star.id}-content`);
//     removeActiveContent();
//     activeContent.classList.add("active");
//   })
// })

// function removeActiveStar(){
//   starNav.forEach((star) => {
//     star.classList.remove("active");
//   })
// }

// function removeActiveContent(){
//   starContent.forEach((star) => {
//     star.classList.remove("active");
//   })
// }

// const backtotop = document.querySelector(".backtotop");
// const banner = document.querySelector(".banner");
// backtotop.forEach((banner) => {
//     backtotop.addEventListener("scroll", () => {
//      if($(backtotop)).scrolltop() >300 {
//       backtotop.addClass("show")
//      }
//      else {
//       backtotop.remove("show");
//      }
//     })
//   })

// const btop= document.querySelector(".backtotop");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if(window.pageYOffset >=100){
//     btop.classList.add("show")
//   }
//   else {
//     btop.classList.remove("show")
//   }
// })

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".left");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  
})

const circleMenu = document.querySelector(".circle");
const circlee = document.querySelector(".right");
circleMenu.addEventListener("click", () => {
  circleMenu.classList.toggle("open");
  circlee.classList.toggle("open");
})

const dawnn = document.querySelectorAll(".header__nav .downn");
dawnn.forEach((head) => {
  head.addEventListener("click", () => {
    head.nextElementSibling.classList.toggle("open");
    head.querySelector("i").classList.toggle("open");

  })
})

const discoverNav=document.querySelectorAll(".discover__nav__link");
const navContent=document.querySelectorAll(".discover__tab__content");
discoverNav.forEach((letters) => {
  letters.addEventListener("click", () => {
    removeActiveletters();
    letters.classList.add("activated");
    const activeContent= document.querySelector(`#${letters.id}-content`);
    removeActiveContent();
    activeContent.classList.add("activated");
  })
})

function removeActiveletters(){
  discoverNav.forEach((letters) => {
    letters.classList.remove("activated");
  })
}

function removeActiveContent(){
  navContent.forEach((letters) => {
    letters.classList.remove("activated");
  })
}
