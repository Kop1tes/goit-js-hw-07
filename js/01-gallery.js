import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const imgGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', imgGallery);
console.log(createGallery);

function createGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    }).join('');
};

gallery.addEventListener('click', onGalleryClick);



function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

const instance = basicLightbox.create(
	`<img src = "${event.target.dataset.source}"/>`
  );

  instance.show();
};

function onOpenModal(evt) {
  const instance = basicLightbox.create(`<img src=${imgUrl}>`)
  instance.show();
  document.addEventListener('keydown', onEscapeModalClose);
  instance.close();
};

// function onEscapeModalClose(eve) {
//   if (eve.key === "Escape") {
//     modalWindow.close();
//   }
// };

// onShow: (instance) => {
//   document.addEventListener('keydown', onGalleryClick)
// };

// onClose: (instance) => {
//   document.removeEventListener("keydown", onGalleryClick)
// };
