import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(createGallery(galleryItems));

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
}

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery')) {
        return;
    }

    const instance = basicLightbox.create(
	`<img src = "${event.target.dataset.source}"> width = "800" height = "600"`
);
    instance.show();
    console.log(event.target);
}