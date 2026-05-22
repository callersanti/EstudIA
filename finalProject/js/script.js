const MENU = "https://drive.google.com/file/d/1cp0smZaA-HCXjh9qsDNKvM5GE0l_8cdc/view?usp=sharing";

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function () {
    window.open(MENU, "_blank");
});

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", function () {
    document.getElementById("productos");
});

const badge = document.getElementById("badge");
let cartCount = 0;

const addButtons = document.querySelectorAll("#productos .btn");

addButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const fullCart = button.textContent === 'Borrar del carrito';

    if (!fullCart) {
      cartCount++;
      button.textContent = 'Borrar del carrito';
      button.classList.replace('btn-outline-light', 'btn-danger');
    } else {
      cartCount--;
      button.textContent = 'Añadir al carrito';
      button.classList.replace('btn-danger', 'btn-outline-light');
    }

    badge.textContent = cartCount;

    if (cartCount > 0) {
        badge.style.display = 'inline';
      } else {
        badge.style.display = 'none';
      }
      
  });
});


