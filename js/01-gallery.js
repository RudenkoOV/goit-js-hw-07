import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEls = document.querySelector('.gallery');

galleryEls.insertAdjacentHTML(`beforeend`, galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`)
    .join(''));

galleryEls.addEventListener('click', getUrlBigPicture);
function getUrlBigPicture(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    };
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {onShow: (instance) => {
        document.onkeydown = function (e)  {
            e.preventDefault();
            if (e.code == 'Escape') {
                instance.close();
            }
        }
    } })
    instance.show();
}
