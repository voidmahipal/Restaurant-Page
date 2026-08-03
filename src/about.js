import aboutImage from "./caption.jpg";

function generateAbout() {

    const aboutus = document.createElement("div");
    aboutus.classList.add("aboutus");

    const about = document.createElement("div");
    about.classList.add("story");
    const abouth3 = document.createElement("h3");
    abouth3.textContent="Our Story";
    const para = document.createElement("p");
    para.textContent="At Maido, we celebrate the harmony of Japanese technique and Peruvian passion. Every dish is a reflection of our journey. our culture, and our commitment to excellence.";
    const btn = document.createElement("button");
    btn.classList.add("Learnbtn");
    btn.textContent="LEARN MORE →";
    about.appendChild(abouth3);
    about.appendChild(para);
    about.appendChild(btn);
    
    const storyImage = document.createElement("img");
    storyImage.src=aboutImage;

    aboutus.appendChild(about);
    aboutus.appendChild(storyImage);

    const foot = document.createElement("div");
    foot.classList.add("foot");
    const visitus = document.createElement("div");
    visitus.classList.add("visit");
    const visit_h3 = document.createElement("h3");
    visit_h3.textContent="VISIT US";
    const add = document.createElement("p");
    add.textContent="123 Culinary Street,Lima,Peru.";
    visitus.appendChild(visit_h3);
    visitus.appendChild(add);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    const contacth3 = document.createElement("h3");
    contacth3.textContent="CONTACT";
    const email1 = document.createElement("p");
    email1.textContent =  "real@fake.com";
    const email2 = document.createElement("p");
    email2.textContent =  "real@fake.com";
    const email3 = document.createElement("p");
    email3.textContent =  "real@fake.com";
    contact.appendChild(contacth3);
    contact.appendChild(email1);
    contact.appendChild(email2);
    contact.appendChild(email3);

    foot.appendChild(visitus);
    foot.appendChild(contact);

    content.appendChild(aboutus);
    content.appendChild(foot);
}
export {generateAbout};