const navLink = document.querySelector(".main-nav__site-link");
const dropdownList = document.querySelector(".main-nav__dropdown-list");


navLink.addEventListener('click', function () {
  if (dropdownList.classList.contains('visually-hidden')) {
    dropdownList.classList.remove('visually-hidden');
    dropdownList.classList.add('main-nav__dropdown-list');
  } else {
    dropdownList.classList.remove('main-nav__dropdown-list');
    dropdownList.classList.add('visually-hidden');
  }
});
