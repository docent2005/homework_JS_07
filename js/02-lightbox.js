import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery");


galleryItems.forEach(element => {
    gallery.insertAdjacentHTML('beforeend', `
        <li class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
        </a>
        </li>`);
});
    var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);
