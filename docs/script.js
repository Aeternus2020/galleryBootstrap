// "use strict";

// let second;

// const arr = [
//     `<img src="/pictures/1.webp" alt="Pictures_1"/>`,
//     `<img src="/pictures/2.webp" alt="Pictures_2"/>`,
//     `<img src="/pictures/3.webp" alt="Pictures_3"/>`
// ];

// const container = document.createElement("container");
// container.className = "list_img";

// function creat() {
//     arr.forEach((element) => {
//         let div = document.createElement("div");
//         div.innerHTML = `${element}`;
//         div.className = "img";
//         if (element === arr[1]) div.className = "img activeSlider";
//         container.append(div);
//     });
//     document.querySelector('.scroll_gallery').append(container);
// }

// creat(arr);

// document.getElementById('right').addEventListener('click', () => {
//     scroll(rightScroll, "-220px")
// })

// document.getElementById('left').addEventListener('click', () => {
//     scroll(leftScroll, "220px")
// })

// function rightScroll() {
//     let elm = arr.shift(0);
//     arr.push(elm);
//     container.innerHTML = '';
//     creat(arr);
//     second = document.querySelector('.activeSlider');
//     scrollUl("220px");
// }

// function leftScroll() {
//     let elm = arr.pop(3);
//     arr.unshift(elm);
//     container.innerHTML = '';
//     creat(arr);
//     second = document.querySelector('.activeSlider');
//     scrollUl("-220px");
// }

// function scroll(side, y) {
//     second = document.querySelector('.activeSlider');
//     second.animate([
//         { transform: 'scale(1.3)' },
//         { transform: 'scale(1)' },
//     ], 1000);
//     container.animate([
//         { transform: 'translate(0, 0)', opacity: 1 },
//         { transform: `translate(${y}, 0)`, opacity: 0 }
//     ], 1000);
//     setTimeout(side, 500);
// }

// function scrollUl(y) {
//     container.animate([
//         { transform: `translate(${y}, 0)`, opacity: 0 },
//         { transform: 'translate(0, 0)', opacity: 1 }
//     ], 1000);
//     second.animate([
//         { transform: 'scale(1)' },
//         { transform: 'scale(1.3)' },
//     ], 1000);
// }

// function rightScroll() {
//     let elm = arr.shift(0);
//     arr.push(elm);
//     container.innerHTML = '';
//     creat(arr);
//     second = document.querySelector('.activeSlider');
//     scrollUl("220px");
// }

// function leftScroll() {
//     let elm = arr.pop(3);
//     arr.unshift(elm);
//     container.innerHTML = '';
//     creat(arr);
//     second = document.querySelector('.activeSlider');
//     scrollUl("-220px");
// }

const bigImgHospital = document.querySelector('.img_hospital_big');
const imgsHospital = document.querySelectorAll('.img_hospital');
const carousel = document.getElementById("carouselExampleControls");
const prevButton = carousel.querySelector(".carousel-control-prev");
const nextButton = carousel.querySelector(".carousel-control-next");
let currentImageIndex = 0;

function updateBigImageAndClasses() {
  const currentImage = imgsHospital[currentImageIndex];
  bigImgHospital.innerHTML = `<img src="${currentImage.src}" class="d-block w-100 img_big" alt="${currentImage.alt}">`;
  imgsHospital.forEach(function(img) {
    img.classList.remove("active");
  });
  currentImage.classList.add("active");
}

document.querySelector(".hospital").addEventListener("click", (event) => {
  if (event.target.parentElement !== bigImgHospital && event.target.tagName === 'IMG') {
    currentImageIndex = Array.from(imgsHospital).indexOf(event.target);
    updateBigImageAndClasses();
  }
});

prevButton.addEventListener("click", function() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imgsHospital.length - 1;
  }
  updateBigImageAndClasses();
});

nextButton.addEventListener("click", function() {
  currentImageIndex++;
  if (currentImageIndex >= imgsHospital.length) {
    currentImageIndex = 0;
  }
  updateBigImageAndClasses();
});

updateBigImageAndClasses();

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.img');
const prevButtonSecond = document.querySelector('.prev-button');
const nextButtonSecond = document.querySelector('.next-button');
let currentIndex = 1;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(220px)`;
        if (i === index) {
            slide.classList.add('current');
        } else {
            slide.classList.remove('current');
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    // slider.style.transform = `translateX(-220px)`;
}

prevButtonSecond.addEventListener('click', prevSlide);
nextButtonSecond.addEventListener('click', nextSlide);

// showSlide(currentIndex);


