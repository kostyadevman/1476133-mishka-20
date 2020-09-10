var modalOpen = document.querySelectorAll(".product-week__cart-link, .card__cart-link");
var modalPopup = document.querySelector(".modal");


modalOpen.forEach(function (link) {
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal--show");
  })
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--show");
    }
  }
});

modalPopup.addEventListener("click", function (evt) {
  if (modalPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal--show");
  }
});
