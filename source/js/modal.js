var modalOpen = document.querySelector(".product-week__cart-link");
var modalPopup = document.querySelector(".modal");

modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--show");
    }
  }
});
