

document.addEventListener('DOMContentLoaded', function () {

  new Swiper('.image-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    //бесконечная прокрутка
    loop: true,
    //скорость
    speed: 1500,
    //Количество слайдов для показа
    slidesPerView: 3,
    //Автопрокрутка 
    autoplay: {
      delay: 1000,
    },
    simulateTouch: true,
    spaceBetween: 15,
  });

})
