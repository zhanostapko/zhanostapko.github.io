const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      link = document.querySelectorAll('.menu__link');


hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

// for (let i=0; i<link.length; i++) {
// link[i].addEventListener('click' , () => {
//   menu.classList.remove('active');
// });
// }

const counters = document.querySelectorAll('.skills__counter'),
      lines = document.querySelectorAll('.skills__lines__lower span');


// console.log(counters);
// console.log(lines);

counters.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;

});

$(window).scroll(function() {

  if ($(this).scrollTop() > 1500) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }

});