function initCarousel() {
  const arrowNext = document.querySelector('.carousel__arrow_right');
  const arrowPrev = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  let carouselInnerCSS;
  let currentSlideIndex = 1;
  let howManySlides = carouselInner.querySelectorAll('.carousel__slide').length;
  let slideWidth = parseInt(document.querySelector('.carousel__slide').offsetWidth);

  function getTranslateX(style) {
    const matrix = style.transform || style.webkitTransform || style.mozTransform;

    if (matrix === 'none') {
      return 0;
    }

    const matrixType = matrix.includes('3d') ? '3d' : '2d'; // Can either be 2d or 3d transform
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

    if (matrixType === '2d') {
      return matrixValues[4];
    }

    if (matrixType === '3d') {
      return matrixValues[12];
    }
  }

  function checkArrowHide() {
    (currentSlideIndex < howManySlides) ? arrowNext.style.display = '' : arrowNext.style.display = 'none'; 
    (currentSlideIndex < 2) ? arrowPrev.style.display = 'none' : arrowPrev.style.display = ''; 
  }

  checkArrowHide()

  arrowNext.addEventListener('click', (event) => {
    carouselInnerCSS = window.getComputedStyle(carouselInner);
    currentSlideIndex ++;
    carouselInner.style.transform = `translateX(-${slideWidth - parseInt(getTranslateX(carouselInnerCSS))}px)`;
    checkArrowHide();
  });

  arrowPrev.addEventListener('click', (event) => {
    carouselInnerCSS = window.getComputedStyle(carouselInner);
    currentSlideIndex --;
    carouselInner.style.transform = `translateX(${slideWidth + parseInt(getTranslateX(carouselInnerCSS))}px)`;
    checkArrowHide();
  });

}
