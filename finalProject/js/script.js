const MENU = "https://drive.google.com/file/d/1cp0smZaA-HCXjh9qsDNKvM5GE0l_8cdc/view?usp=sharing";

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function () {
    window.open(MENU, "_blank");
});

const orderButton = document.getElementById("orderButton");
orderButton.addEventListener("click", function () {
    document.getElementById("productos");
});


