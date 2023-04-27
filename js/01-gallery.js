import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(createImageMarkup(galleryItems));

const galleryEl = document.querySelector(`.gallery`);
const imageMarkup = createImageMarkup(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, imageMarkup);

function createImageMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
            return `<li class = "gallery__item">
   <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" 
    data-source="${original}"
     alt="${description}"/></a></li>`
    ;
        })
        .join(``);
}

// // ========================================================
galleryEl.addEventListener(`click`, onClick);

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== `IMG`) {
        return;
    }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
    instance.show();
}
