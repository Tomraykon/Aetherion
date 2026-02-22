document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("gallery-container");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let images = [];
  let currentIndex = 0;

  fetch("../scripts/gallery.json")
    .then(res => res.json())
    .then(data => {
      images = data;

      images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = `../gallery/${image}`;
        img.alt = image;

        img.addEventListener("click", () => openLightbox(index));

        container.appendChild(img);
      });
    })
    .catch(err => console.error("Error cargando gallery:", err));

  function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.add("active");
    lightboxImg.src = `../gallery/${images[currentIndex]}`;
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = `../gallery/${images[currentIndex]}`;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = `../gallery/${images[currentIndex]}`;
  }

  closeBtn?.addEventListener("click", closeLightbox);
  nextBtn?.addEventListener("click", showNext);
  prevBtn?.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

});