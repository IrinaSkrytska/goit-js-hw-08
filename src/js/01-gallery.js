import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function onCreateGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
        </div>`;
    }).join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captiondelay: '250ms',
    
});
console.log(galleryItems);
console.log(galleryItems);