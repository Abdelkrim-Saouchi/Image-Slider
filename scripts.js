const previousBtn = document.querySelector('#previous-icon');
const nextBtn = document.querySelector('#next-icon');

const imagesList = Array.from(document.querySelectorAll('.slides img'));
const slides = document.querySelector('.slides');
const dotsIndicator = Array.from(document.querySelectorAll('.dot-indicator'));

function moveImageByPosition(position) {
  imagesList.forEach((image) => {
    image.style.transform = `translateX(${position}%)`;
  });
}

function deleteDotIndicatorClass(className) {
  dotsIndicator.forEach((dotIndicator) => {
    dotIndicator.classList.remove(className);
  });
}

function setCurrentDotIndicator(currentDotIndex) {
  dotsIndicator[currentDotIndex].classList.add('current-slide');
}

let position = 0;
let currentDotIndex = 0;
let imageSizeOnPercentage = 100;

nextBtn.addEventListener('click', () => {
  position -= imageSizeOnPercentage;
  currentDotIndex += 1;
  if (position === -1 * (imagesList.length * imageSizeOnPercentage)) {
    position = 0;
    currentDotIndex = 0;
  }
  moveImageByPosition(position);
  deleteDotIndicatorClass('current-slide');
  setCurrentDotIndicator(currentDotIndex);
});

previousBtn.addEventListener('click', () => {
  if (position < 0) {
    position += imageSizeOnPercentage;
    currentDotIndex -= 1;
    moveImageByPosition(position);
    deleteDotIndicatorClass('current-slide');
    setCurrentDotIndicator(currentDotIndex);
  }
});

dotsIndicator.forEach((dotIndicator) => {
  dotIndicator.addEventListener('click', () => {
    let dotIndex = dotsIndicator.indexOf(dotIndicator);
    let position = imageSizeOnPercentage * dotIndex * -1;
    moveImageByPosition(position);
    deleteDotIndicatorClass('current-slide');
    setCurrentDotIndicator(dotIndex);
  });
});
