const navbarNav = document.querySelector(".navbar-nav");
const searchButton = document.querySelector("#search-button");
const searchBox = document.querySelector("#search-box");
const hamburger = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const cartButton = document.querySelector("#shopping-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const cartItem = document.querySelector(".cart-item");
const cartEmpty = document.querySelector(".cart-empty");
const deleteButton = document.querySelector(".delete-item");
const detailButton = document.querySelectorAll(".detail-btn");
const modals = document.querySelector(".modal");
const closeModal = document.querySelector(".close-icon");

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

cartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

deleteButton.onclick = () => {
  if (confirm("Apakah anda ingin menghapus item ini ?")) {
    cartItem.classList.add("hide");
    alert("Item Berhasil Dihapus!");
  }
  cartEmpty.classList.remove("hide");
};

detailButton.forEach((btn) => {
  btn.onclick = (e) => {
    modals.style.display = "flex";
    e.preventDefault();
  };
});

closeModal.onclick = () => {
  modals.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modals) {
    modals.style.display = "none";
  }
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
