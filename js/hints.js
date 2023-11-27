// поиск всех элементов по ID в секции available
const tooltipButton1 = document.getElementById(
  'available__tooltip-button-market-1'
);
const tooltip1 = document.getElementById('tooltip-info-market-1');

const tooltipButton2 = document.getElementById(
  'available__tooltip-button-market-2'
);
const tooltip2 = document.getElementById('tooltip-info-market-2');

const tooltipButton3 = document.getElementById(
  'available__tooltip-button-market-3'
);
const tooltip3 = document.getElementById('tooltip-info-market-3');

// открытие tooltip
tooltipButton1.addEventListener('click', function () {
  tooltip1.classList.toggle('show');
});
tooltipButton2.addEventListener('click', function () {
  tooltip2.classList.toggle('show');
});
tooltipButton3.addEventListener('click', function () {
  tooltip3.classList.toggle('show');
});

// поиск всех элементов по ID в секции  delivery
const tooltipButtonDelivery = document.getElementById(
  'delivery__cancel-text-snap'
);
const tooltipDelivery = document.getElementById('delivery__tooltip-info');
const tooltipButtonTotal = document.getElementById(
  'total__text-delivery-info-add'
);
const tooltipTotal = document.getElementById('total__tooltip-info');
// открытие tooltip
tooltipButtonDelivery.addEventListener('click', function () {
  tooltipDelivery.classList.toggle('show');
});
tooltipButtonTotal.addEventListener('click', function () {
  tooltipTotal.classList.toggle('show');
});

//

// поиск всех элементов по ID в секции  discount
const tooltipButtonDiscount1 = document.getElementById(
  'available__wrapper-general1'
);
const tooltipButtonDiscount2 = document.getElementById(
  'available__wrapper-general2'
);
const tooltipButtonDiscount3 = document.getElementById(
  'available__wrapper-general3'
);
const tooltipDiscount1 = document.getElementById(
  'available__tooltip-info-discount1'
);
const tooltipDiscount2 = document.getElementById(
  'available__tooltip-info-discount2'
);
const tooltipDiscount3 = document.getElementById(
  'available__tooltip-info-discount3'
);
tooltipButtonDiscount1.addEventListener('click', function () {
  tooltipDiscount1.classList.toggle('show');
});
tooltipButtonDiscount2.addEventListener('click', function () {
  tooltipDiscount2.classList.toggle('show');
});
tooltipButtonDiscount3.addEventListener('click', function () {
  tooltipDiscount3.classList.toggle('show');
});

// Лайк и корзина

// let likeAvailableButton = document.getElementsByClassName(
//   '.available__icon-like'
// );
// const likeUnavailableButton = document.querySelector('.unavailable__icon-like');
// const basketAvailableButton = document.querySelector(
//   '.unavailable__icon-delete'
// );
// const basketUnavailableButton = document.querySelector(
//   '.unavailable__icon-delete'
// );

// for (var i = 0; i < likeAvailableButton.length; i++) {
//   likeAvailableButton[i].addEventListener('click', function () {
//     this.classList.toggle('violet');
//   });
// }
// for (var i = 0; i < likeUnavailableButton.length; i++) {
//   likeUnavailableButton[i].addEventListener('click', function () {
//     likeUnavailableButton.classList.toggle('red');
//   });
// }
// for (var i = 0; i < basketAvailableButton.length; i++) {
//   basketAvailableButton[i].addEventListener('click', function () {
//     basketAvailableButton.classList.toggle('red');
//   });
// }
// for (var i = 0; i < basketUnavailableButton.length; i++) {
//   basketUnavailableButton[i].addEventListener('click', function () {
//     basketUnavailableButton.classList.toggle('red');
//   });
// }
