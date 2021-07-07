const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  gallery: document.querySelector('ul.js-gallery'),
  lightbox: document.querySelector('div.lightbox'),
  linhtboxImg: document.querySelector('img.lightbox__image'),
  linhtboxBtn: document.querySelector('button[data-action="close-lightbox"]'),

};
// -->> Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и предоставленному шаблону.

// const makeImagesTemplateMarkup = images => {
//   const { preview, description } = images;
//   return `
//   <li class="gallery__item">
//   <img class="gallery__image"
//   src=${preview}
//   alt=${description}
//   />
//   </li>
//   `;
// };

const makeImagesTemplateMarkup = images => {
  const { preview, original, description } = images;
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `;
};

const makeImagesTemplate = galleryItems.map(makeImagesTemplateMarkup).join('');

refs.gallery.insertAdjacentHTML('beforeend', makeImagesTemplate);

// -->> Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения.
refs.gallery.addEventListener('click', galleryClickHandler);

function galleryClickHandler(event) {
  
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.dir(event.target);

  // Открытие модального окна по клику на элементе галереи.
  modalOpenClick(event);
  // Закрытие модального окна по клику на кнопку
  refs.linhtboxBtn.addEventListener('click', modalClose);

};

function modalOpenClick(event) {
 refs.lightbox.classList.add('is-open');
   console.dir(event);
  refs.linhtboxImg.src = event.target.dataset.source;
  refs.linhtboxImg.alt = event.target.alt; 
};

// Закрытие модального окна по клику на кнопку

function modalClose() {
  refs.lightbox.classList.remove('is-open');
  refs.linhtboxBtn.removeEventListener('click', modalClose);
  refs.linhtboxImg.src = '';
  refs.linhtboxImg.alt = '';
};