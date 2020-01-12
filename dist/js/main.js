$(document).ready(function () {
  var modal = $('.modal--application'),
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

  new WOW().init();

  // валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          var modalThanks = $('modal--thanks');

          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal--visible');
        }
      });
    }
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"}); 

});