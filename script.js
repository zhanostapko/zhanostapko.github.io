const menuBtn = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');
const seeMoreBtn = document.querySelector('.btn-promo');
const upBtn = document.querySelector('.btn-circle');

// Visible without JS

const sections = document.querySelectorAll('.section');

sections.forEach((item) => item.classList.add('section-hidden'));

const contentBoxes = document.querySelectorAll('.education-point');

contentBoxes.forEach((box) => box.classList.add('hidden'));

// Page navigation ////

const scrollTo = function (section) {
  window.scroll({
    left: 0,
    top: section.offsetTop,
    behavior: 'smooth',
  });
};

upBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const sectionTo = document.querySelector(`#${e.target.dataset.goto}`);
  scrollTo(sectionTo);
});

seeMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const sectionTo = document.querySelector(`#${e.target.dataset.goto}`);
  scrollTo(sectionTo);
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

document.addEventListener('keydown', (e) => {
  if (menuBtn.classList.contains('active') && e.key === 'Escape') {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  }
});

menu.addEventListener('click', (e) => {
  if (!e.target.classList.contains('menu-link')) {
    return;
  }

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
  }
  if (e.target.dataset.goto) {
    const sectionTo = document.querySelector(`#${e.target.dataset.goto}`);
    scrollTo(sectionTo);
  }
});

menu.addEventListener('touchend', (e) => {
  if (!e.target.classList.contains('menu-link')) {
    return;
  }

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
  }
  if (e.target.dataset.goto) {
    const sectionTo = document.querySelector(`#${e.target.dataset.goto}`);
    scrollTo(sectionTo);
  }
});

// Observing page

const section1 = document.querySelector('#home');

let options1 = {
  root: null,
  threshold: 0.1,
};

const btnDisplayed = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    upBtn.classList.add('visible');
  } else {
    upBtn.classList.remove('visible');
  }
};

const section1Observer = new IntersectionObserver(btnDisplayed, options1);

section1Observer.observe(section1);

let options = {
  root: null,
  threshold: window.matchMedia('(min-height: 400px)').matches ? 0.2 : 0.15,
};

const sectionShow = function (entries, observer) {
  const [entry] = entries;
  const showBoxes = () => {
    contentBoxes.forEach((item) => {
      item.classList.add('visible');
    });
  };

  if (entry.isIntersecting) {
    entry.target.classList.remove('section-hidden');
    if (entry.target.id === 'education') {
      setInterval(showBoxes, 700);
    }
    observer.unobserve(entry.target);
  }
};

const sectionsObserver = new IntersectionObserver(sectionShow, options);

sections.forEach((section) => {
  sectionsObserver.observe(section);
});
