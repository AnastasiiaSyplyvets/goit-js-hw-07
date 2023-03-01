import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Знайшли гелері
const galleryEl = document.querySelector('.gallery');

// Окрема картинка null?
const imgEl = document.querySelector('img');



// Створюємо одну картинку

function createImgEl ({preview, original, description}) {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
};

// Перебираємо масив об'єктів

const galleryMarkupEl = galleryItems.map(img => createImgEl(img)).join('');



galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupEl);



// Вішаємо слухача на галерею


galleryEl.addEventListener("click", (event) => {
    event.preventDefault();
if(event.target.nodeName !== "IMG") {
return
}
const instance = basicLightbox.create(
	` <img src="${event.target.dataset.source}" width="800" height="600">`
)
instance.show();
  console.log("hello")
});


let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
