import "./styles.css";

import { generateHome } from "./home.js";
import { generateMenu } from "./menu.js";
import { generateAbout } from "./about.js";

const content = document.querySelector("#content");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");

generateHome();

home.addEventListener("click",()=>{
    content.replaceChildren();
    generateHome();
});
menu.addEventListener("click",()=>{
    content.replaceChildren();
    generateMenu();
});
about.addEventListener("click",()=>{
    content.replaceChildren();
    generateAbout();
})