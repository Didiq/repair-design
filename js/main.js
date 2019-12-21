// нативный JavaScript

// document.addEventListener("DOMContentLoaded", (event) => {
//   const modal = document.querySelector('.modal');
//   const modalButton = document.querySelectorAll('[data-toggle]');
//   const closeButton = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalButton.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeButton.addEventListener('click', switchModal);

// });


// jQuery 

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  const  switchModal = () => {
        modal.toggleClass('modal--visible');
  };

  modalBtn.click(switchModal);
  closeBtn.click(switchModal);

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var arrowSpace = 20;

  next.css('left', prev.width() + arrowSpace + bullets.width() + arrowSpace)
  bullets.css('left', prev.width() + arrowSpace)

});