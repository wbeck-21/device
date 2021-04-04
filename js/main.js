// Выпадающее меню

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

// Popup

const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".popup__map-btn");
const mapLink = document.querySelector(".map-link");

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('visually-hidden');
  popup.classList.add('popup');
});

popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('visually-hidden');
});
