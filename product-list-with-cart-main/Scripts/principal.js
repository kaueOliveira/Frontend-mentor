const btn = document.querySelectorAll(".btn_add");
const section_cart = document.getElementById("cart")
const msg_quantity = section_cart.getElementsByTagName("h1")[0]

const items = [
    {name: "Waffle with Berries", price: 6.50},
    {name: "Vanilla Bean Crème Brûlée", price: 7.00},
    {name: "Macaron Mix of Five", price: 8.00},
    {name: "Classic Tiramisu", price: 5.50},
    {name: "Pistachio Baklava", price: 4.00},
    {name: "Lemon Meringue Pie", price: 5.00},
    {name: "Red Velvet Cake", price: 4.50},
    {name: "Salted Caramel Brownie", price: 4.50},
    {name: "Vanilla Panna Cotta", price: 6.50},
]

let cartState = items.map(item => ({ name: item.name, quantity: 0, price: item.price }));

let pedido_total2 = 0
let quantity_items_cart = 0

let has_msg_empty = true
let order_made = false

btn.forEach( b => {
    let quantity = 0
    b.addEventListener("click", (evt) => {
        const img_product = b.parentNode.children[0] // img do carrinho
        
        const img_cart = document.createElement("img");
        img_cart.setAttribute("src", "assets/images/icon-add-to-cart.svg");
        img_cart.setAttribute("alt", "add to cart icon");
        
        if (b.classList.value === "btn_add") {
            quantity ++

            const img_decrement = document.createElement("img"); // Botão de remover 1
            img_decrement.setAttribute("src", "assets/images/icon-decrement-quantity.svg");
            img_decrement.setAttribute("alt", "decrement button");
            img_decrement.setAttribute("class", "btn_quant");
    
            const img_increment = document.createElement("img"); // Botão de adicionar + 1
            img_increment.setAttribute("src", "assets/images/icon-increment-quantity.svg");
            img_increment.setAttribute("alt", "increment button");
            img_increment.setAttribute("class", "btn_quant");

            b.classList.remove("btn_add");
            b.classList.add("btn_order");
            b.innerHTML = "";
            b.appendChild(img_decrement);
            b.append(quantity);
            b.appendChild(img_increment);

            img_product.classList.add("selected") // Borda ao redor da imagem

            // Remove o carrinho vazio
            if (has_msg_empty) {
                section_cart.children[1].remove(), section_cart.children[1].remove()
                has_msg_empty = false
            }  
        } 

        if (quantity === 0) { //Voltando o botão ao padrão. 
            b.classList.remove("btn_order");
            b.classList.add("btn_add");
            b.innerHTML = " ";
            b.appendChild(img_cart);
            b.append(" Add to Cart");

            img_product.classList.remove("selected")
            quantity_items_cart--
            msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`
        }

    });
}); 

// Mudar nome das variaveis p/ inglês
//verificar classes e ids do html (nome tem que fazer sentido)