import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// Створюємо одну картинку

function createImgEl ({preview, original, description}) {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
};

// Перебираємо масив об'єктів

const galleryMarkupEl = galleryItems.map(img => createImgEl(img)).join('');



galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupEl);


let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250 });
gallery.on('show.simplelightbox', function () {
	// Do something…
  
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});
