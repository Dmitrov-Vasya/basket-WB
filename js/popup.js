// PopupDelivery
const openPopupPaymentButtons = document.querySelectorAll('.payment__btn-card');
const closePopupPaymentButton = document.querySelector(
  '.popup__card-button-close'
);
const radioPopupPayment = document.querySelectorAll(
  '.popup__card-radio-button'
);
const popupPayment = document.querySelector('.popup__card');
const enterPopupPaymentButton = document.querySelector(
  '.popup__card-button-enter'
);
// селекторы, которые будут изменяться
const paymentIcon = document.querySelector('.payment__icon');
const paymentNumberCard = document.querySelector('.payment__number-card');
const totalPaymentImg = document.querySelector('.total__payment-img');
const totalPaymentNumberCard = document.querySelector(
  '.total__payment-number-card'
);

openPopupPaymentButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    popupPayment.style.display = 'block';
  });
});

enterPopupPaymentButton.addEventListener('click', function () {
  const chosenCard = document.querySelector(
    '.popup__card-radio-button:checked'
  );

  let chosenCardImg = '';
  switch (chosenCard.id) {
    case 'maestro':
      chosenCardImg = './images/icons/Maestro.svg';
      break;
    case 'mastercard':
      chosenCardImg = './images/icons/Mastercard.svg';
      break;
    case 'visa':
      chosenCardImg = './images/icons/Visa.svg';
      break;
    case 'mir':
      chosenCardImg = './images/icons/Mir.svg';
      break;
  }

  paymentNumberCard.textContent = chosenCard.value;
  totalPaymentNumberCard.textContent = chosenCard.value;
  paymentIcon.src = chosenCardImg;
  totalPaymentImg.src = chosenCardImg;

  popupPayment.style.display = 'none';
});
closePopupPaymentButton.addEventListener('click', function () {
  popupPayment.style.display = 'none';
  // Изменение состояния чекбокса при закрытии модального окна
  radioPopupPayment.checked = false;
});

// PopupCard
const openPopupDeliveryButton = document.querySelectorAll(
  '.delivery__btn-delivery'
);
const closePopupDeliveryButton = document.querySelector(
  '.popup__delivery-container-button-close'
);
const popupDelivery = document.querySelector('.popup__delivery');
const radioPopupDelivery = document.querySelectorAll(
  'popup__delivery-address-input'
);

const enterPopupDeliveryButton = document.querySelector(
  '.popup__delivery-button-enter'
);
const deliveryAboutText = document.querySelector('.delivery__about-text');
const totalTextDeliveryMesto = document.querySelector(
  '.total__text-delivery-mesto'
);

openPopupDeliveryButton.forEach(function (button) {
  button.addEventListener('click', function () {
    popupDelivery.style.display = 'block';
  });
});

enterPopupDeliveryButton.addEventListener('click', function () {
  const chosenAddress = document.querySelector(
    '.popup__delivery-address-input:checked'
  ).value;

  deliveryAboutText.textContent = chosenAddress;
  totalTextDeliveryMesto.textContent = chosenAddress;
  popupDelivery.style.display = 'none';
});

closePopupDeliveryButton.addEventListener('click', function () {
  popupDelivery.style.display = 'none';
  // Изменение состояния чекбокса при закрытии модального окна
  radioPopupDelivery.checked = false;
});
