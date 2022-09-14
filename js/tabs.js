const nav = () => {
  const nav = document.querySelector('.js-nav');
  const navLinks = nav.querySelectorAll('.nav__link');
  const slideRect = nav.querySelector('.nav__slider-rect');

  nav.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('nav__link')) return;
    evt.preventDefault();

    navLinks.forEach((item) => item.classList.remove('nav__link_active'));

    if (!evt.target.classList.contains('nav__link_active')) {
      evt.target.classList.add('nav__link_active');
    }

    slideRect.style.transform = `translateX(${evt.target.dataset.transform}%)`;
  });
};

nav();
