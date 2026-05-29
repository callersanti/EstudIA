const MENU = "https://drive.google.com/file/d/1cp0smZaA-HCXjh9qsDNKvM5GE0l_8cdc/view?usp=sharing";

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function () {
    window.open(MENU);
});

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", function () {
    window.open("https://wa.me/573165028920");
});

/*Carrito*/

const badge = document.getElementById("badge");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const emptyMessage = document.getElementById("emptyMessage");
const totalText = document.getElementById("totalText");
const cartIcon = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");

//Pa guardar los productos
let cart = [];

// Abre y cierra el panel al hacer clic 
cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    if (cartPanel.style.display === "block") {
        cartPanel.style.display = "none";
    } else {
        cartPanel.style.display = "block";
    }
});

// Cierra el panel con el botón ✕
closeCart.addEventListener("click", function () {
    cartPanel.style.display = "none";
});

// Función que redibuja el panel del carrito
function updateCartPanel() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p id='emptyMessage'>No hay productos en el carrito.</p>";
    totalText.textContent = "Total: $0";
    return;
  }

  let total = 0;

  cart.forEach(function (product, index) {
    total += product.price;

    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `
      <span>${product.name}</span>
      <span>$${product.price.toLocaleString("es-CO")}</span>
      <button onclick="removeFromCart(${index})">🗑</button>
    `;
    cartItems.appendChild(item);
  });

  totalText.textContent = "Total: $" + total.toLocaleString("es-CO");
}

// Función para eliminar un producto desde el panel
function removeFromCart(index) {
  const removedName = cart[index].name;
  cart.splice(index, 1);

  // Volvemos a poner el botón de la card en su estado original
  const addButtons = document.querySelectorAll("#productos .btn");
  addButtons.forEach(function (button) {
    const card = button.closest(".card");
    const cardName = card.querySelector("h5").textContent;
    if (cardName === removedName) {
        button.textContent = "Añadir al carrito";
        button.classList.replace("btn-danger", "btn-outline-light");
    }
  });

  updateBadge();
  updateCartPanel();
}

// Actualiza el número del badge
function updateBadge() {
    badge.textContent = cart.length;
    badge.style.display = cart.length > 0 ? "inline" : "none";
}

const addButtons = document.querySelectorAll("#productos .btn");

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const name = card.querySelector("h5").textContent;
    const priceText = card.querySelector(".fw-bold").textContent;
    const price = parseInt(priceText.replace(/[$.]/g, ""));

    const alreadyInCart = button.textContent === "Borrar del carrito";

    if (!alreadyInCart) {
      cart.push({ name: name, price: price });
      button.textContent = "Borrar del carrito";
      button.classList.replace("btn-outline-light", "btn-danger");
    } else {
      // Busca el producto en el array y lo elimina
      const index = cart.findIndex(function (p) { return p.name === name; });
      cart.splice(index, 1);
      button.textContent = "Añadir al carrito";
      button.classList.replace("btn-danger", "btn-outline-light");
    }

    updateBadge();
    updateCartPanel();

  });
});



