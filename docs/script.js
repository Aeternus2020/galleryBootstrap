const bigImgHospital = document.querySelector('.img_hospital_big');
const imgsHospital = document.querySelectorAll('.img_hospital');
const carousel = document.getElementById("carouselExampleControls");
const prevButton = carousel.querySelector(".carousel-control-prev");
const nextButton = carousel.querySelector(".carousel-control-next");
let currentImageIndex = 0;

function updateBigImageAndClasses() {
  const currentImage = imgsHospital[currentImageIndex];
  bigImgHospital.innerHTML = `<img src="${currentImage.src}" class="d-block w-100 img_big" alt="${currentImage.alt}"> <div class="imgTitle">${currentImage.alt}</div>`;
  imgsHospital.forEach(img => img.classList.remove("active"));
  imgsHospital[currentImageIndex].classList.add("active");
}

document.querySelector(".hospital").addEventListener("click", (event) => {
  if (event.target.parentElement !== bigImgHospital && event.target.tagName === 'IMG') {
    currentImageIndex = Array.from(imgsHospital).indexOf(event.target);
    updateBigImageAndClasses();
  }
});

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + imgsHospital.length) % imgsHospital.length;
  updateBigImageAndClasses();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imgsHospital.length;
  updateBigImageAndClasses();
});

updateBigImageAndClasses();

const btnNext = document.querySelector(".next-button");
const btnPrev = document.querySelector(".prev-button");
const slides = document.querySelectorAll(".slideSecond");
const sliders = [];

function draw() {
  document.querySelector(".slider").innerHTML = ""; 
  for (let i = currentImageIndex; i < currentImageIndex + 3; i++) {
    let slideIndex = i % slides.length;
    let slide = document.createElement("div");
    slide.classList.add("slideSecond");
    slide.style.left = (i - currentImageIndex) * 100 + "%";
    slide.appendChild(sliders[slideIndex]);
    if (i - currentImageIndex === 1) {
      slide.classList.add("current");
    }
    document.querySelector(".slider").appendChild(slide);
  }
}

btnNext.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imgsHospital.length;
  draw();
});

btnPrev.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + imgsHospital.length) % imgsHospital.length;
  draw();
});

slides.forEach((slide) => {
  sliders.push(slide.querySelector("img"));
});

draw();

const images = document.querySelectorAll('.image-zoom');
const modalImage = document.querySelector('.modalImage');

images.forEach((image) => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  });
});
