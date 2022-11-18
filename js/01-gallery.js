import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const imgGallery = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', imgGallery);

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
	`<img src = "${event.target.dataset.source}" width = "800" height = "600">`
  );

    instance.show();
  console.log(event);
  

function onEscapeModalClose(event) {
  if (event.key === "Escape") {
      instance.close();
    }
};

  window.addEventListener("keydown", onEscapeModalClose);
};


