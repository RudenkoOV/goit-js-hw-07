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
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    };

    function checkEscape(event) {
    if (event.code == 'Escape') {
    instance.close();
    }
    }
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
        onShow: (instance) => {
            window.addEventListener('keydown', checkEscape);
        },
        onClose: (instance) => { window.removeEventListener('keydown', checkEscape) }
    });
    instance.show();
}

   