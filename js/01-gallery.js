import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery_list");
gallery.classList.add('gallery');

galleryItems.forEach(element => {
    gallery.insertAdjacentHTML('beforeend', `
<li class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`);
});


gallery.addEventListener('click', event => {
    event.preventDefault();
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show();
});

    

console.log(galleryItems);
