export default function menupage() {
    const content = document.querySelector("#content");
    content.textContent=" ";
    content.className = " ";
    content.classList.add("secondcontent");

    const menu = document.createElement("div");
    content.appendChild(menu);
    menu.classList.add("menu");


    menu.appendChild(createMenuItem("Chocolate","chocolate.png"));
    menu.appendChild(createMenuItem("Mint","mint.png"));
    menu.appendChild(createMenuItem("Pistacchio","pistacchio.png"));
    menu.appendChild(createMenuItem("Mango","mango.png"));
    menu.appendChild(createMenuItem("Strawberry","strawberry.png"));
    menu.appendChild(createMenuItem("Ube","ube.png"));
    menu.appendChild(createMenuItem("Vanilla","vanilla.png"));
    menu.appendChild(createMenuItem("Chocolate Chip","chocolate-chip.png"));

} 


function createMenuItem(name,imagename) {
    const menuItem  = document.createElement("div");

    const images = document.createElement("img");
    images.src = `images/${imagename}`
    images.classList.add("ice-cream")

    const nameOfItem = document.createElement("p");
    nameOfItem.classList.add = ("nameOfItem");
    nameOfItem.textContent = `${name}`;

    menuItem.appendChild(images);
    menuItem.appendChild(nameOfItem);
    menuItem.classList.add("menuItem");

    return menuItem;
}
