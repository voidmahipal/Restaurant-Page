import dishImage1 from "./Nigiri-selection.jpeg";
import dishImage2 from "./Wagyu.jpeg"
import dishImage3 from "./omakase.png"

function generateMenu() {
    
    const h1 = document.createElement("h1");
    h1.textContent="Signature Dishes";

    const dish1 = document.createElement("div");
    const img1 = document.createElement("img");
    img1.src=dishImage1;
    const h2_1 = document.createElement("h2");
    h2_1.textContent="NIGIRI SELECTION";
    const para1 = document.createElement("p");
    para1.textContent="Chef's choice of the finest";
    const amt1 = document.createElement("p");
    amt1.textContent="₹ 1,800";
    dish1.appendChild(img1);
    dish1.appendChild(h2_1);
    dish1.appendChild(para1);
    dish1.appendChild(amt1);
    
    const dish2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.src=dishImage2;
    const h2_2 = document.createElement("h2");
    h2_2.textContent="WAGYU ANTICUCHO";
    const para2 = document.createElement("p");
    para2.textContent="Grilled wagyu with traditional";
    const amt2 = document.createElement("p");
    amt2.textContent="₹ 2,900";
    dish2.appendChild(img2);
    dish2.appendChild(h2_2);
    dish2.appendChild(para2);
    dish2.appendChild(amt2);

    const dish3 = document.createElement("div");
    const img3 = document.createElement("img");
    img3.src=dishImage3;
    const h2_3 = document.createElement("h2");
    h2_3.textContent="OMAKASE EXPERIENCE";
    const para3 = document.createElement("p");
    para3.textContent="A 12+ course journey crafted";
    const amt3 = document.createElement("p");
    amt3.textContent="₹ 6,500";
    dish3.appendChild(img3);
    dish3.appendChild(h2_3);
    dish3.appendChild(para3);
    dish3.appendChild(amt3);

    content.appendChild(h1);
    content.appendChild(dish1);
    content.appendChild(dish2);
    content.appendChild(dish3);

}
export {generateMenu};
