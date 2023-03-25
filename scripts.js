const previousBtn = document.querySelector('#previous-icon');
const nextBtn = document.querySelector('#next-icon');

const imagesList = Array.from(document.querySelectorAll('.slides img'));
const slides = document.querySelector('.slides');

let position = 0;
let imageSizeOnPercentage = 100;

nextBtn.addEventListener('click', () => {
  position -= imageSizeOnPercentage;
  if (position === -1 * (imagesList.length * imageSizeOnPercentage)) {
    position = 0;
  }
  imagesList.forEach((image) => {
    image.style.transform = `translateX(${position}%)`;
  });
});

previousBtn.addEventListener('click', () => {
  if (position < 0) {
    position += imageSizeOnPercentage;
    imagesList.forEach((image) => {
      image.style.transform = `translateX(${position}%)`;
    });
  }
});
