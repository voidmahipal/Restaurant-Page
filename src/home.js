import heroImage from "./Maido-restaurant-3.jpg";

function generateHome() {

    const banner = document.createElement("div");
    banner.classList.add("banner");
    const h1 = document.createElement("h1");
    h1.classList.add("name");
    h1.textContent="MAIDO";
    const tagline = document.createElement("h2");
    tagline.classList.add("tagline");
    tagline.textContent="Experience Nikkei Cuisine";
    const description = document.createElement("i");
    description.classList.add("description");
    description.textContent="Where Japanese precision meets Peru";
    const bannerImage = document.createElement("img");
    bannerImage.classList.add("hero");
    bannerImage.src=heroImage;
    banner.appendChild(tagline);
    banner.appendChild(h1);
    banner.appendChild(description);
    

    content.appendChild(bannerImage);
    content.appendChild(banner);
}
export {generateHome};