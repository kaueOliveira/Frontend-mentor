setTimeout(()=>{
    const btn_add_item = document.querySelectorAll(".btn_add");
    const msg_quantity = document.getElementById("msg_quantity");
    const cart = document.getElementById("cart");
    
    const cart_details = {
        quantity_items_cart: 0,
        total_order_value: 0,
        has_msg_empty: true,
        order_made: false,
        msg_order_total: false,
    }

    let order_total = 0;
    
    btn_add_item.forEach(btn => {
        let quantity_items = 0;
        btn.addEventListener("click", (evt)=> {

            if (btn.classList.contains("inative")) {
                let product_image = btn.parentNode.firstChild;
                product_image.className += " selected";

                const img_increment = document.createElement("img");
                img_increment.src = "assets/images/icon-increment-quantity.svg";
                img_increment.id = "img_increment";
                img_increment.className = "btn_quant";

                const img_decrement = document.createElement("img");
                img_decrement.src = "assets/images/icon-decrement-quantity.svg";
                img_decrement.id = "img_decrement";
                img_decrement.className = "btn_quant";

                quantity_items ++;
                btn.classList.remove("inative");
                btn.classList.add("ative");

                btn.childNodes[0];
                btn.innerHTML = " ";
                
                btn.appendChild(img_decrement);
                btn.append(quantity_items);
                btn.appendChild(img_increment);

                const chosen_item_name = btn.parentNode.querySelector(".name").textContent;
                const chosen_item_price = btn.parentNode.querySelector(".price").textContent.replace("$", "");
                
                if (cart_details.has_msg_empty) { // Tira a imagem e a msg do cart 
                    const img_cake = cart.querySelector(".cart_empty");
                    img_cake.className = "cart_filled";
                    const paragraph = cart.querySelector(".paragraph").remove();
                    cart_details.has_msg_empty = false;
                }

                ////////////////////////////////////////////////////////////////
                //Criando pedido
                const div_order = document.createElement("div");
                div_order.id = "div_order";
                div_order.className = "div_order";

                const section_order = document.createElement("section");
                section_order.id = "section_order";

                const item_name = document.createElement("h1");
                item_name.textContent = chosen_item_name;

                const div_details = document.createElement("div");
                div_details.id = "details";

                const p_quantity = document.createElement("p");
                p_quantity.id = "quantity";
                p_quantity.textContent = `${quantity_items} x`;

                const p_price = document.createElement("p");
                p_price.id = "price";
                p_price.textContent = `@ $${parseFloat(chosen_item_price).toFixed(2)}`;
                //p_price.textContent = `@ $${chosen_item_price}`;

                const p_total_price = document.createElement("p");
                p_total_price.id = "total_price";

                let total = quantity_items * parseFloat(chosen_item_price).toFixed(2);
                p_total_price.textContent = `$ ${parseFloat(total).toFixed(2)}`;

                const remove_icon = document.createElement("img");
                remove_icon.className = "btn_remove";
                remove_icon.id = "btn_remove";
                remove_icon.src = "assets/images/icon-remove-item.svg";
                remove_icon.alt = "Remove Icon";

                // remove_icon.addEventListener("click", (evt) => {
                //     evt.target.parentNode.remove()
                // })

                div_details.appendChild(p_quantity);
                div_details.appendChild(p_price);
                div_details.appendChild(p_total_price);

                section_order.appendChild(item_name);
                section_order.appendChild(div_details);
                
                div_order.appendChild(section_order);
                div_order.appendChild(remove_icon);

                cart.appendChild(div_order);

                cart_details.quantity_items_cart ++
                msg_quantity.textContent = `Your Cart(${cart_details.quantity_items_cart})`;

                //////////////////////////////////////////////////////////////
                // Atualizando valor total
                order_total += total

                let div_ord_tot = document.createElement("div");
                div_ord_tot.id = "div_tot";
                div_ord_tot.className = "div_tot";

                remove_children(cart_details)

                let p_ord_tot = document.createElement("p");
                p_ord_tot.id = "p_tot";
                p_ord_tot.textContent = "Order Total";

                let val_ord_tot = document.createElement("p");
                val_ord_tot.id = "val_tot";
                val_ord_tot.textContent = `$ ${parseFloat(order_total).toFixed(2)}`;

                div_ord_tot.appendChild(p_ord_tot);
                div_ord_tot.appendChild(val_ord_tot);

                cart.appendChild(div_ord_tot);
                cart_details.msg_order_total = true; 

                //////////////////////////////////////////////////////////////
                // Msg Carbon e Botão "Confirm Order"

                carbon_confirmOrder(cart_details);

                ////////////////////////////////////////////////////////////////

                img_decrement.addEventListener("click", (evt)=> {
                    quantity_items --;
                    btn.childNodes[2].nodeValue = quantity_items;
                   
                    p_quantity.textContent = `${quantity_items} x`;
                    p_total_price.textContent = `$ ${parseFloat(quantity_items * chosen_item_price).toFixed(2)}`;

                    if (quantity_items === 0) {
                        div_order.remove();
                        product_image.classList.remove("selected");
                    }

                    // Atualizando valor total
                    order_total = order_total - total
                    let div_ord_tot = document.createElement("div");
                    div_ord_tot.id = "div_tot";
                    div_ord_tot.className = "div_tot";

                    remove_children(cart_details)

                    let p_ord_tot = document.createElement("p");
                    p_ord_tot.id = "p_tot";
                    p_ord_tot.textContent = "Order Total";

                    let val_ord_tot = document.createElement("p");
                    val_ord_tot.id = "val_tot";
                    val_ord_tot.textContent = `$ ${parseFloat(order_total).toFixed(2)}`;

                    div_ord_tot.appendChild(p_ord_tot);
                    div_ord_tot.appendChild(val_ord_tot);

                    cart.appendChild(div_ord_tot);

                    carbon_confirmOrder();
                    cart_details.msg_order_total = true; 
                });

                img_increment.addEventListener("click", (evt)=> {
                    quantity_items ++;
                    btn.childNodes[2].nodeValue = quantity_items;

                    p_quantity.textContent = `${quantity_items} x`;
                    p_total_price.textContent = `$ ${parseFloat(quantity_items * chosen_item_price).toFixed(2)}`;
                    
                    // Atualizando valor total
                    order_total += total
                    let div_ord_tot = document.createElement("div");
                    div_ord_tot.id = "div_tot";
                    div_ord_tot.className = "div_tot";

                    remove_children(cart_details)

                    let p_ord_tot = document.createElement("p");
                    p_ord_tot.id = "p_tot";
                    p_ord_tot.textContent = "Order Total";

                    let val_ord_tot = document.createElement("p");
                    val_ord_tot.id = "val_tot";
                    val_ord_tot.textContent = `$ ${parseFloat(order_total).toFixed(2)}`;

                    div_ord_tot.appendChild(p_ord_tot);
                    div_ord_tot.appendChild(val_ord_tot);

                    cart.appendChild(div_ord_tot);

                    carbon_confirmOrder();
                    cart_details.msg_order_total = true; 
                });
            }; 

            if (quantity_items === 0) {
                btn.classList.remove("ative");
                btn.classList.add("inative");

                const icon_cart = document.createElement("img");
                icon_cart.src = "../assets/images/icon-add-to-cart.svg";
                
                btn.innerHTML = " ";
                btn.append(icon_cart);
                btn.innerHTML += "Add to Cart";

                cart_details.quantity_items_cart --;
                msg_quantity.textContent = `Your Cart(${cart_details.quantity_items_cart})`;
            }

            if (cart_details.quantity_items_cart === 0) {
                const img_cake = cart.querySelector(".cart_filled");
                img_cake.className = "cart_empty";

                const p = document.createElement("p");
                p.className = "paragraph";
                p.textContent = `Your added items will appear here`;
                cart.appendChild(p);

                remove_children(cart_details)
                order_total = 0;

                cart_details.has_msg_empty = true;
                cart_details.msg_order_total = false;
            }

            const btn_newOrder = document.getElementById("btn_new_order");
            btn_newOrder.addEventListener("click", ()=>{
                location.reload();
            });
        });
    });

}, 500);

function carbon_confirmOrder () {
    const div_msg_carbon = document.createElement("div"); 
    div_msg_carbon.id = "div_msg_carbon";
    div_msg_carbon.className = "div_msg_carbon";

    const img_carbon = document.createElement("img");
    img_carbon.src = "assets/images/icon-carbon-neutral.svg";
    img_carbon.id = "img_carbon";

    const p_carbon = document.createElement("p");
    p_carbon.textContent = "This is a carbon-neutral delivery"; 

    div_msg_carbon.appendChild(img_carbon);
    div_msg_carbon.appendChild(p_carbon);

    cart.appendChild(div_msg_carbon);

    const btn_confirmOrder = document.createElement("div");
    btn_confirmOrder.id = "confirm_order";
    btn_confirmOrder.className = "confirm_order";
    btn_confirmOrder.textContent = "Confirm Order";

    cart.appendChild(btn_confirmOrder);

    let margin = document.createElement("p");
    margin.id = "margin";
    margin.className = "margin";

    cart.appendChild(margin);

    btn_confirmOrder.addEventListener("click", ()=>{
        const background = document.getElementById("background");
        background.style.width = "100vw";
        background.style.height = "100vh";
        background.style.overflow = "auto";

        const msg_box_orders = document.getElementById("msg_box_orders");    
        const pedidos = [...document.getElementsByClassName("div_order")];

        pedidos.forEach(pedido => {
            const btn_remove1 = document.getElementById("btn_remove");
            btn_remove1.remove();

            const div_item = document.createElement("div");
            div_item.className = "div_item";

            const img_pedido = document.createElement("img");

            let nome_pedido = pedido.firstChild.firstChild.textContent;

            switch (nome_pedido) {
                case "Waffle with Berries":
                    img_pedido.src = "./assets/images/image-waffle-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Vanilla Bean Crème Brûlée":
                    img_pedido.src = "./assets/images/image-creme-brulee-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Macaron Mix of Five":
                    img_pedido.src = "./assets/images/image-macaron-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Classic Tiramisu":
                    img_pedido.src = "./assets/images/image-tiramisu-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Pistachio Baklava":
                    img_pedido.src = "./assets/images/image-baklava-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Lemon Meringue Pie":
                    img_pedido.src = "./assets/images/image-meringue-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Red Velvet Cake":
                    img_pedido.src = "./assets/images/image-cake-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Salted Caramel Brownie":
                    img_pedido.src = "./assets/images/image-brownie-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
                case "Vanilla Panna Cotta":
                    img_pedido.src = "./assets/images/image-panna-cotta-thumbnail.jpg";
                    div_item.appendChild(img_pedido);
                    div_item.appendChild(pedido);
                    break;
            }

            msg_box_orders.appendChild(div_item);
        });

        const orderTotal_value = document.getElementById("div_tot");
        msg_box_orders.appendChild(orderTotal_value);
        
    });
}

function remove_children (cart_details) {
    if (cart_details.msg_order_total) {
        cart.children.div_tot.remove();
        cart.children.div_msg_carbon.remove();
        cart.children.confirm_order.remove();
        cart.children.margin.remove();
    }
}

// tirar o reload
// Remover item especifico do carrinho.
// Melhorar método de adicionar Imagens.
// tentar usar async.

// -> Melhorias do gpt

// Trocar innerHtml = "" por textContent = ""
// Tentar Trocar setTimeout pelo DOMContentLoaded
//Criar/remover elementos repetidamente pode ser custoso. Atualizar o conteúdo diretamente pode ser mais eficiente.