(()=>{"use strict";function e(){const e=document.querySelector("#content");e.textContent=" ",e.className=" ",e.classList.add("secondcontent");const n=document.createElement("div");e.appendChild(n),n.classList.add("menu"),n.appendChild(t("Chocolate","chocolate.png")),n.appendChild(t("Mint","mint.png")),n.appendChild(t("Pistacchio","pistacchio.png")),n.appendChild(t("Mango","mango.png")),n.appendChild(t("Strawberry","strawberry.png")),n.appendChild(t("Ube","ube.png")),n.appendChild(t("Vanilla","vanilla.png")),n.appendChild(t("Chocolate Chip","chocolate-chip.png"))}function t(e,t){const n=document.createElement("div"),a=document.createElement("img");a.src=`images/${t}`,a.classList.add("ice-cream");const c=document.createElement("p");return c.classList.add="nameOfItem",c.textContent=`${e}`,n.appendChild(a),n.appendChild(c),n.classList.add("menuItem"),n}const n=document.createElement("button");n.classList.add("active");const a=document.createElement("button"),c=document.createElement("button");function d(){!function(){const t=document.querySelector("#content");t.textContent=" ",t.className=" ";const n=document.querySelector(".menubutton"),a=document.querySelector(".contact");t.classList.add("firstcontent");const c=document.createElement("div"),d=document.createElement("p"),s=document.createElement("button");s.addEventListener("click",(()=>{a.className=" ",home.className=" ",n.classList.add("active"),e()})),c.classList.add("main"),d.classList.add("maincontent"),s.classList.add("order"),d.textContent="Try our creamy, vegan, delicious ice cream with variety of options now! We use our handmade almond, soy, and coconut milk with fresh fruits, delightful chocolate and high quality nuts to make the best ice cream in town. ",s.textContent="Order Now",t.appendChild(c),c.appendChild(d),c.appendChild(s)}(),document.querySelector(".order").addEventListener("click",(()=>{c.className=" ",n.className=" ",a.classList.add("active"),e()}))}c.classList.add("contact"),a.classList.add("menubutton"),d(),n.addEventListener("click",(()=>{d(),a.className=" ",c.className=" ",n.classList.add("active")})),a.addEventListener("click",(()=>{c.className=" ",n.className=" ",a.classList.add("active"),e()})),c.addEventListener("click",(()=>{a.className=" ",n.className=" ",c.classList.add("active"),function(){const e=document.querySelector("#content");e.textContent=" ",e.className=" ",e.classList.add("thirdcontent");const t=document.createElement("div");t.classList.add("contactinfo");const n=document.createElement("p"),a=document.createElement("p"),c=document.createElement("p"),d=document.createElement("img");n.textContent="Phone Number : +34 678 890",a.textContent="Address : 12234543 Street Rimini/Italy",c.textContent=d.src="images/map.png",d.classList.add("map"),e.appendChild(t),t.appendChild(n),t.appendChild(a),t.appendChild(d)}()})),function(){const e=document.querySelector("#header"),t=document.querySelector("#footer"),d=document.createElement("p"),s=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img"),l=document.createElement("p");e.appendChild(s),e.appendChild(o),s.appendChild(i),s.appendChild(l),o.appendChild(n),o.appendChild(a),o.appendChild(c),t.appendChild(d),d.innerHTML="Mon-Thurs:8am-8pm   /   Fri-Sun:8am-11pm",l.textContent="gelato",n.textContent="Home",a.textContent="Menu",c.textContent="Contact Us",i.src="images/sticker.png",e.classList.add("header"),i.classList.add("sticker"),s.classList.add("firstpart"),o.classList.add("secondpart")}()})();