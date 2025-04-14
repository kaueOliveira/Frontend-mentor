const msg_unread = [...document.getElementsByClassName("unread")];
const btn_mark_all_read = document.getElementById("btn");
const quantity = document.getElementById("quantity");

btn_mark_all_read.addEventListener("click", ()=>{
    msg_unread.forEach(el => {
        el.classList.remove("unread");
        el.classList.add("read")

        const icon_unread = document.querySelectorAll(".icon_unread");

        icon_unread.forEach(icon => {
            icon.remove();
        })

        quantity.innerHTML = "0";
    });
});