import  menupage  from "./menu.js";
import createWebsite from "./index.js";


export default function homepage() {
    const content = document.querySelector("#content");
    content.textContent = " ";
    content.className = " ";
    const menu = document.querySelector(".menubutton");
    const contact = document.querySelector(".contact");

    content.classList.add("firstcontent");
    const main = document.createElement("div");
    const maincontent = document.createElement("p");
    const order = document.createElement("button");
    order.addEventListener("click",() => {
        contact.className = " ";
        home.className = " ";
        menu.classList.add("active");
        menupage();
    } );

    main.classList.add("main");
    maincontent.classList.add("maincontent");
    order.classList.add("order");

    maincontent.textContent = "Try our creamy, vegan, delicious ice cream with variety of options now! We use our handmade almond, soy, and coconut milk with fresh fruits, delightful chocolate and high quality nuts to make the best ice cream in town. "
    order.textContent = "Order Now"
    
    content.appendChild(main);
    main.appendChild(maincontent);
    main.appendChild(order)
} 