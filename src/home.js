import heroImage from "./Maido-restaurant-3.jpg";

function generateHome() {

    const banner = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.textContent="MAIDO";
    const tagline = document.createElement("h2");
    tagline.textContent="Experience Nikkei Cuisine";
    const description = document.createElement("h2");
    description.textContent="Where Japanese precision meets Peru";
    const bannerImage = document.createElement("img");
    bannerImage.src=heroImage;
    banner.appendChild(h1);
    banner.appendChild(tagline);
    banner.appendChild(description);
    banner.appendChild(bannerImage);


    content.appendChild(banner);
}
export {generateHome};