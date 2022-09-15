const main = () => {
  const nav = document.querySelector('.js-nav');
  const navLinks = nav.querySelectorAll('.nav__link');
  const slideRect = nav.querySelector('.nav__slider-rect');
  const starterTab = document.getElementById('starter');
  const professionalTab = document.getElementById('professional');
  const companyTab = document.getElementById('company');

  nav.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('nav__link')) return;
    evt.preventDefault();

    navLinks.forEach((item) => item.classList.remove('nav__link_active'));

    if (!evt.target.classList.contains('nav__link_active')) {
      evt.target.classList.add('nav__link_active');
    }

    slideRect.style.transform = `translateX(${evt.target.dataset.transform}%)`;

    if (slideRect.style.transform === 'translateX(100%)') {
      starterTab.innerText = '$12';
      professionalTab.innerText = '$36';
      companyTab.innerText = '$56';
    } else {
      starterTab.innerText = '$19';
      professionalTab.innerText = '$56';
      companyTab.innerText = '$89';
    }
  });
};

main();
