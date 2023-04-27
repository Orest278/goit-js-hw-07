import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);

let markup = ``;

galleryItems.map((elem, i) => {
    markup += `<li class = "gallery__item">
    <a class="gallery__link" href="${galleryItems[i].original}">
    <img class="gallery__image" src="${galleryItems[i].preview}" 
    data-source="${galleryItems[i].original}"
    alt="${galleryItems[i].description}"/></a></li>`
});

galleryEl.insertAdjacentHTML(`afterbegin`, markup);
// ========================================================
galleryEl.addEventListener(`click`, onLinkClicl);
let source = ``;
function onLinkClicl(e) {

    e.preventDefault();
    if (e.target.nodeName !== `IMG`) {
        return;
    } 

    const instance = basicLightbox.create(`<img src=${source}>`)
    instance.show();
}
