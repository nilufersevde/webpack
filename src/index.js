import  homepage  from "./homepage.js";
import  menupage  from "./menu.js";
import  contactpage  from "./contact.js";


const home = document.createElement("button");
home.classList.add("active");
const menu = document.createElement("button");
const contact = document.createElement("button");
contact.classList.add("contact");
menu.classList.add("menubutton");
         

function homepagecreate() {
    homepage();
    const orderbutton = document.querySelector(".order");  
    orderbutton.addEventListener("click",() => {
        contact.className = " ";
        home.className = " ";
        menu.classList.add("active");
        menupage();
    } );
}

homepagecreate();

home.addEventListener("click",() => {
    homepagecreate();
    menu.className = " ";
    contact.className = " ";
    home.classList.add("active");
    
} )

menu.addEventListener("click",() => {
    contact.className = " ";
    home.className = " ";
    menu.classList.add("active");
    menupage();
} )



contact.addEventListener("click",() => {
    menu.className = " ";
    home.className = " ";
    contact.classList.add("active");
    contactpage();
} )


function createWebsite() {
    const header = document.querySelector("#header");
    const footer = document.querySelector("#footer");
    const footercontent = document.createElement("p");
    const firstpart = document.createElement("div");
    const secondpart = document.createElement("div");
    const sticker = document.createElement("img");
    const brand = document.createElement("p");
    
    header.appendChild(firstpart);
    header.appendChild(secondpart);
    firstpart.appendChild(sticker);
    firstpart.appendChild(brand);
    secondpart.appendChild(home);
    secondpart.appendChild(menu);
    secondpart.appendChild(contact);
    footer.appendChild(footercontent);


    footercontent.innerHTML = "Mon-Thurs:8am-8pm   /   Fri-Sun:8am-11pm";
    brand.textContent = "gelato";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";
    sticker.src = "images/sticker.png";


    header.classList.add("header");
    sticker.classList.add("sticker");
    firstpart.classList.add("firstpart");
    secondpart.classList.add("secondpart");
}

createWebsite();















