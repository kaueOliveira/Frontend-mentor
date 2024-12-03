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

function Propiedades_do_pedido () {
    // Adicionando no Carrinho
    let chosen_item_name = b.parentNode.children[2].innerHTML
                
    let chosen_item_price =  b.parentNode.children[3].innerHTML
          
    items.forEach(i => {
        if(i.name === chosen_item_name) {
            chosen_item_name = i.name
            chosen_item_price = i.price
        }
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
function criarPedido () {
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

    pedido_total2 += quantity * chosen_item_price
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comfirmandoPedido () {
    if (order_made) {
        section_cart.children.confirm_order.remove()
    }

        const order_total = document.createElement("div")
        order_total.id = "order_total"

        const p1 = document.createElement("p")
        p1.textContent = "Order Total"

        const p_total_price = document.createElement("p")
        p_total_price.id = "total_price"

        intervalo = setInterval(() => {
            p_total_price.textContent = "$ " + pedido_total2
        }, 1000);

        order_total.appendChild(p1)
        order_total.appendChild(p_total_price)

        const p_img = document.createElement("p")
        p_img.id = "p_img"

        const img = document.createElement("img")
        img.id = "img_carbon"
        img.src = "assets/images/icon-carbon-neutral.svg"

        p_img.appendChild(img)

        p_img.innerHTML += " This is a carbon-neutral delivery"

        const btn_confirm_order = document.createElement("div")
        btn_confirm_order.id = "btn_confirm_order"
        btn_confirm_order.innerHTML = "Confirm Order"

        const section_confirm_order = document.createElement("section")
        section_confirm_order.id = "confirm_order"

        section_confirm_order.appendChild(order_total)
        section_confirm_order.append(p_img)
        section_confirm_order.append(btn_confirm_order)

        section_cart.appendChild(section_confirm_order)

        order_made = true
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function incremento_decremento () {
    const img_decrement = document.getElementById("decrement") // ADD
    const img_increment = document.getElementById("increment") // ADD

    //Removendo e Adicionando itens
    img_decrement.addEventListener("click", () => {
        quantity--
        b.childNodes[1].nodeValue = quantity
        itemQuantity.textContent = quantity + "x";
        itemTotal.textContent = "$" + quantity * chosen_item_price;
        pedido_total2 = pedido_total2 - chosen_item_price 

        if (quantity === 0) {
            itemSection.remove()
        }

    });

    img_increment.addEventListener("click", () => {
        quantity++
        b.childNodes[1].nodeValue = quantity
        itemQuantity.textContent = quantity + "x";
        itemTotal.textContent = "$" + quantity * chosen_item_price;
        pedido_total2 += chosen_item_price
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removendoCarrinho () {
    if (quantity_items_cart === 0) {
        cart_empty ()
        section_cart.children.confirm_order.remove()
        has_msg_empty = true
        order_made =  false
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cart_empty () {
    const div_cart_empty = document.createElement("div")
    div_cart_empty.className = "cart_empty"

    const p_empty = document.createElement("p")
    p_empty.textContent = "Your added items will appear here"

    section_cart.appendChild(div_cart_empty)
    section_cart.appendChild(p_empty)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////