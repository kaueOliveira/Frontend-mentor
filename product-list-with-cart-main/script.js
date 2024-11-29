const btn = document.querySelectorAll(".btn_add");
//const main = document.getElementsByTagName("main")[0]
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

let pedido_total = []
let pedido_total2 = 0

let has_msg_empty = true
let quantity_items_cart = 0

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

            // Adicionando no Carrinho
                let chosen_item_name = b.parentNode.children[2].innerHTML
                
                let chosen_item_price =  b.parentNode.children[3].innerHTML
                
                items.forEach(i => {

                if(i.name === chosen_item_name) {
                    chosen_item_name = i.name
                    chosen_item_price = i.price
                }

                })

                // Remove o carrinho vazio
                if (has_msg_empty) {
                    section_cart.children[1].remove(), section_cart.children[1].remove()
                    has_msg_empty = false
                }
            
                // Cria a seção do item
                const itemSection = document.createElement("section");
                itemSection.className = "order";
            
                const itemHeader = document.createElement("div");
            
                const itemTitle = document.createElement("h1");
                itemTitle.textContent = chosen_item_name;
            
                const removeIcon = document.createElement("img");
                removeIcon.src = "assets/images/icon-remove-item.svg";
                removeIcon.alt = "icon remove item";
                removeIcon.id = "remove";
            
                itemHeader.appendChild(itemTitle);
                itemHeader.appendChild(removeIcon);
            
                const itemDetails = document.createElement("div");
            
                const itemQuantity = document.createElement("p");
                itemQuantity.id = "amount"
                itemQuantity.textContent = quantity + "x";
            
                const itemPrice = document.createElement("p");
                itemPrice.id = "price"
                itemPrice.textContent = "@ $"+ chosen_item_price;
            
                const itemTotal = document.createElement("p"); 
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                itemTotal.id = "total"
            
                itemDetails.appendChild(itemQuantity);
                itemDetails.appendChild(itemPrice);
                itemDetails.appendChild(itemTotal);
            
                itemSection.appendChild(itemHeader);
                itemSection.appendChild(itemDetails);
        
                section_cart.appendChild(itemSection);
                quantity_items_cart++
                msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`

                // pedido_total.push(quantity * chosen_item_price)
                
                pedido_total2 += quantity * chosen_item_price
                console.log(pedido_total2)

                
            //Removendo e Adicionando itens
            img_decrement.addEventListener("click", () => {
                quantity--
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                pedido_total2 = pedido_total2 - chosen_item_price 
                console.log(pedido_total2)

                if (quantity === 0) {
                    itemSection.remove()
                }
            });

            img_increment.addEventListener("click", () => {
                quantity++
                b.childNodes[1].nodeValue = quantity
                itemQuantity.textContent = quantity + "x";
                itemTotal.textContent = "$" + quantity * chosen_item_price;
                //pedido_total.push(chosen_item_price)
                pedido_total2 += chosen_item_price
                console.log(pedido_total2)
            });
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
        };

        if (quantity_items_cart === 0) {
            cart_empty ()
            has_msg_empty = true
        }
    })
}) 

// Mudar nome das variaveis p/ inglês
//verificar classes e ids do html (nome tem que fazer sentido)

function cart_empty () {

    const div_cart_empty = document.createElement("div")
    div_cart_empty.className = "cart_empty"

    const p_empty = document.createElement("p")
    p_empty.textContent = "Your added items will appear here"

    section_cart.appendChild(div_cart_empty)
    section_cart.appendChild(p_empty)
}

function criando_pedido () {
    // Cria a seção do item
    const itemSection = document.createElement("section");
    itemSection.className = "order";

    const itemHeader = document.createElement("div");

    const itemTitle = document.createElement("h1");
    itemTitle.textContent = chosen_item_name;

    const removeIcon = document.createElement("img");
    removeIcon.src = "assets/images/icon-remove-item.svg";
    removeIcon.alt = "";
    removeIcon.id = "remove";

    itemHeader.appendChild(itemTitle);
    itemHeader.appendChild(removeIcon);

    const itemDetails = document.createElement("div");

    const itemQuantity = document.createElement("p");
    itemQuantity.id = "amount"
    itemQuantity.textContent = quantity + "x";

    const itemPrice = document.createElement("p");
    itemPrice.id = "price"
    itemPrice.textContent = "@ $"+ chosen_item_price;

    const itemTotal = document.createElement("p");
    itemTotal.textContent = "$" + quantity * chosen_item_price;

    itemDetails.appendChild(itemQuantity);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemTotal);

    itemSection.appendChild(itemHeader);
    itemSection.appendChild(itemDetails);

    section_cart.appendChild(itemSection);

    quantity_items_cart ++
    msg_quantity.innerHTML = `Your Cart (${quantity_items_cart})`

    const order_total = document.createElement("div")
    order_total.id = "order_total"

    const p1 = document.createElement("p")
    p1.textContent = "Order Total"
    
    const p_total_price = document.createElement("p")
    p_total_price.id = "total_price"
    p_total_price.textContent = pedido_total2
}