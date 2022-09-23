import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallary = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
            <img
                class="gallery__image"
                src=${item.preview}
                data-source=${item.original}
                alt=${item.description}
            />
        </a>
    </div>`,
  ""
);

gallary.insertAdjacentHTML("beforeend", markup);

gallary.addEventListener("click", onClickImage);

function onClickImage(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
        <img
            src=${evt.target.dataset.source}
        />
      </div>`
  );

  instance.show();

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      instance.close();
    }
  });
}
