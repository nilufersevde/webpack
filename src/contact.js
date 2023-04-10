export default function contactpage() {
    const content = document.querySelector("#content");
    content.textContent=" "; 
    content.className = " "
    content.classList.add("thirdcontent");
    
    const contactinfo = document.createElement("div");
    contactinfo.classList.add("contactinfo");
    const number = document.createElement("p");
    const address = document.createElement("p");
    const hours = document.createElement("p");
    const image = document.createElement("img");


    number.textContent = "Phone Number : +34 678 890";
    address.textContent = "Address : 12234543 Street Rimini/Italy";
    hours.textContent = 
    image.src="images/map.png";
    image.classList.add("map");

    content.appendChild(contactinfo);
    contactinfo.appendChild(number);
    contactinfo.appendChild(address);
    contactinfo.appendChild(image);
}