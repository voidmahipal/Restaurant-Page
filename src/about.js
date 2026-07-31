import aboutImage from "./caption.jpg";

function generateAbout() {

    const about = document.createElement("div");
    const abouth1 = document.createElement("h3");
    abouth1.textContent="Our Story";
    const para = document.createElement("p");
    para.textContent="At Maido, we celebrate the harmony of Japanese technique and Peruvian passion. Every dish is a reflection of our journey. our culture, and our commitment to excellence.";
    about.appendChild(abouth1);
    about.appendChild(para);
    
    const storyImage = document.createElement("img");
    storyImage.src=aboutImage;

    const visitus = document.createElement("div");
    const add = document.createElement("p");
    add.textContent="123 Culinary Street,Lima,Peru.";
    visitus.appendChild(add);

    const contact = document.createElement("div");
    const email1 = document.createElement("p");
    email1.textContent =  "real@fake.com";
    const email2 = document.createElement("p");
    email2.textContent =  "real@fake.com";
    const email3 = document.createElement("p");
    email3.textContent =  "real@fake.com";
    contact.appendChild(email1);
    contact.appendChild(email2);
    contact.appendChild(email3);

    content.appendChild(about);
    content.appendChild(storyImage);
    content.appendChild(visitus);
    content.appendChild(contact);
}
export {generateAbout};