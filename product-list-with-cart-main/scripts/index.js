const section = document.getElementById("first");
const endPoint = "data.json";

const info = (endPoint, section) => {
  fetch(endPoint)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((el) => {
        const div_item = document.createElement("div");
        div_item.className = "item";

        const div_img = document.createElement("div");
        div_img.id = `${el.id}_img`;
        div_img.className = "div_img";

        const category = document.createElement("p");
        category.className = "category";
        category.textContent = el.category;

        const name = document.createElement("p");
        name.className = "name";
        name.textContent = el.name;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = "$" + parseFloat(el.price).toFixed(2);

        const btn_add = document.createElement("div");
        btn_add.className = "btn_add inative";

        const img_icon_add_cart = document.createElement("img");
        img_icon_add_cart.src = "../assets/images/icon-add-to-cart.svg";
        img_icon_add_cart.style.userSelect = "none";
        btn_add.appendChild(img_icon_add_cart);
        btn_add.innerHTML += "Add to cart";

        div_item.appendChild(div_img);
        div_item.appendChild(category);
        div_item.appendChild(name);
        div_item.appendChild(price);
        div_item.appendChild(btn_add);

        section.appendChild(div_item);
      });

      const btn_add_item = document.querySelectorAll(".btn_add");
      const msg_quantity = document.getElementById("msg_quantity");
      const cart = document.getElementById("cart");

      let quantity_items_cart = 0;
      let order_total = 0;

      class Product {
        constructor(name, quantity, product_price, total_price, category) {
          this.name = name;
          this.quantity = quantity;
          this.product_price = product_price;
          this.total_price = total_price;
          this.category = category;
        }
      }

      btn_add_item.forEach((btn) => {
        let quantity_items = 0;
        btn.addEventListener("click", (evt) => {
          if (btn.classList.contains("inative")) {
            quantity_items++;

            let chosen_item_price =
              btn.parentNode.querySelector(".price").textContent;

            chosen_item_price = chosen_item_price.replace("$", "");
            chosen_item_price = parseFloat(chosen_item_price);
            let total = parseFloat(quantity_items * chosen_item_price);

            const product = new Product(
              btn.parentNode.querySelector(".name").textContent,
              quantity_items,
              chosen_item_price,
              parseFloat(total),
              btn.parentNode.querySelector(".category").textContent,
            );

            let product_image = btn.parentNode.querySelector(".div_img ");
            product_image.className += " selected";

            const img_increment = document.createElement("img");
            img_increment.src = "assets/images/icon-increment-quantity.svg";
            img_increment.id = "img_increment";
            img_increment.className = "btn_quant";

            const img_decrement = document.createElement("img");
            img_decrement.src = "assets/images/icon-decrement-quantity.svg";
            img_decrement.id = "img_decrement";
            img_decrement.className = "btn_quant";

            btn.classList.remove("inative");
            btn.classList.add("ative");
            btn.innerHTML = " ";

            btn.appendChild(img_decrement);
            btn.append(quantity_items);
            btn.appendChild(img_increment);

            if (cart.querySelector(".cart_empty")) {
              const img_cake = cart.querySelector(".cart_empty");
              img_cake.className = "cart_filled";

              const paragraph = cart.querySelector(".paragraph");
              paragraph.remove();
            }

            //Criando pedido
            const div_order = document.createElement("div");
            div_order.id = "div_order";
            div_order.className = "div_order";

            const section_order = document.createElement("section");
            section_order.id = "section_order";

            const item_name = document.createElement("h1");
            item_name.textContent = product.name;

            const div_details = document.createElement("div");
            div_details.id = "details";

            const p_quantity = document.createElement("p");
            p_quantity.id = "quantity";
            p_quantity.textContent = `${product.quantity} x`;

            const p_price = document.createElement("p");
            p_price.id = "price";
            p_price.textContent = `@ $${parseFloat(
              product.product_price
            ).toFixed(2)}`;

            const p_total_price = document.createElement("p");
            p_total_price.id = "total_price";
            p_total_price.textContent = `$ ${parseFloat(
              product.total_price
            ).toFixed(2)}`;

            const remove_icon = document.createElement("img");
            remove_icon.className = "btn_remove";
            remove_icon.id = "btn_remove";
            remove_icon.src = "assets/images/icon-remove-item.svg";
            remove_icon.alt = "Remove Icon";

            remove_icon.addEventListener("click", (evt) => {
              product.quantity = 0
              quantity_items = 0
              quantityChecker()
              quantityChecker_2()
              console.log(quantity_items_cart)
              if(quantity_items_cart >= 1) {
                order_total = order_total - product.total_price
                creatingTotalOrderDiv()
              }
              quantityItensCart()

            })

            div_details.appendChild(p_quantity);
            div_details.appendChild(p_price);
            div_details.appendChild(p_total_price);

            section_order.appendChild(item_name);
            section_order.appendChild(div_details);

            div_order.appendChild(section_order);
            div_order.appendChild(remove_icon);

            cart.appendChild(div_order);

            quantity_items_cart++;
            msg_quantity.textContent = `Your Cart(${quantity_items_cart})`;

            // Atualizando valor total
            order_total += product.total_price;
            creatingTotalOrderDiv(product);
            
            img_decrement.addEventListener("click", (evt) => {
              decrementOrIncrement(
                "decrement",
                product,
                btn,
                p_total_price,
                p_quantity,
                div_order
              );
            });

            img_increment.addEventListener("click", (evt) => {
              decrementOrIncrement(
                "increment",
                product,
                btn,
                p_total_price,
                p_quantity,
                div_order
              );
            });

            function quantityChecker() {
              if (product.quantity === 0) {
                div_order.remove();
                product_image.classList.remove("selected");
              }
            }
          }

          const btn_newOrder = document.getElementById("btn_new_order");
          btn_newOrder.addEventListener("click", () => {
            location.reload();
          });

          function quantityChecker_2 () {  //declarar aqui e chamar em cima passando parametro 
            if (quantity_items === 0) {
              btn.classList.remove("ative");
              btn.classList.add("inative");

              const icon_cart = document.createElement("img");
              icon_cart.src = "../assets/images/icon-add-to-cart.svg";
              icon_cart.style.userSelect = "none";

              btn.innerHTML = " ";
              btn.append(icon_cart);
              btn.innerHTML += "Add to Cart";

              quantity_items_cart--;
              msg_quantity.textContent = `Your Cart(${quantity_items_cart})`;
            }; 
          };
          quantityChecker_2()

          function quantityItensCart () {
            if (quantity_items_cart === 0) {
              const img_cake = cart.querySelector(".cart_filled");
              img_cake.className = "cart_empty";

              const p = document.createElement("p");
              p.className = "paragraph";
              p.textContent = `Your added items will appear here`;
              cart.appendChild(p);

              remove_children();
              order_total = 0;
            }
          };
          quantityItensCart()

          function creatingTotalOrderDiv(product) {
            let div_ord_tot = document.createElement("div");
            div_ord_tot.id = "div_tot";
            div_ord_tot.className = "div_tot";

            if (cart.querySelector("#div_tot")) remove_children();

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
          }

          function remove_children() {
            cart.querySelector("#div_tot").remove();
            cart.children.div_msg_carbon.remove();
            cart.children.confirm_order.remove();
            cart.children.margin.remove();
          }

          function decrementOrIncrement(
            operation,
            product,
            btn,
            p_total_price,
            p_quantity
          ) {
            operation == "increment" ? quantity_items++ : quantity_items--;
            product.total_price = quantity_items * product.product_price;
            product.quantity = quantity_items;

            btn.childNodes[2].nodeValue = product.quantity;

            p_quantity.textContent = `${product.quantity} x`;
            p_total_price.textContent = `$ ${parseFloat(
              product.total_price
            ).toFixed(2)}`;

            quantityChecker();

            // Atualizando valor total
            operation == "increment"
              ? (order_total += product.product_price)
              : (order_total = order_total - product.product_price);
            creatingTotalOrderDiv();
          }

          function carbon_confirmOrder() {
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

            btn_confirmOrder.addEventListener("click", () => {
              const background = document.getElementById("background");
              background.style.width = "100vw";
              background.style.height = "100vh";
              background.style.overflow = "auto";
            
              const msg_box_orders = document.getElementById("msg_box_orders");
              const pedidos = [...document.getElementsByClassName("div_order")];
              pedidos.forEach((pedido) => {
                const btn_remove1 = document.getElementById("btn_remove");
                btn_remove1.remove();
                
                const div_item = document.createElement("div");
                div_item.className = "div_item";
                
                const img_pedido = document.createElement("img");
                
                let nome_pedido = pedido.firstChild.firstChild.textContent;
                
                addProductImage(nome_pedido, img_pedido, pedido, div_item);

                msg_box_orders.appendChild(div_item);
              });

              function addProductImage(nome_pedido, img_pedido, pedido, div_item) {
                const semAcentos = nome_pedido.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                const formatado = semAcentos.replace(/\s+/g, "-").toLowerCase();
            
                console.log(formatado)
                img_pedido.src = `./assets/images/image-${formatado}-thumbnail.jpg`;
                div_item.appendChild(img_pedido);
                div_item.appendChild(pedido);
              }

              const orderTotal_value = document.getElementById("div_tot");
              msg_box_orders.appendChild(orderTotal_value);
            });
          }
        });
      });
    });
};

info(endPoint, section);
// tirar o reload.