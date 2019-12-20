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

  modalBtn.click(function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.click(function() {
    modal.toggleClass('modal--visible');
  });
});