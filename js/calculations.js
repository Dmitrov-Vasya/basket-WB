let data = [
  {
    checked: true,
    name: 'Товар 1',
    count: 1,
    amount: 100,
    saleAmount: 90,
    maxCount: 2,
  },
  { checked: true, name: 'Товар 2', count: 1, amount: 100, saleAmount: 90 },
];

//  использование checkbox
const availableCustomCheckbox = document.querySelectorAll(
  '.available__custom-checkbox'
);
const availableCustomCheckboxAllGoods = document.querySelector(
  '.available__custom-checkbox-all-goods'
);

availableCustomCheckboxAllGoods.addEventListener('click', function (e) {
  console.log(e.target.checked);
  availableCustomCheckbox.forEach((checkbox) => {
    checkbox.checked = e.target.checked;
  });
});
availableCustomCheckbox.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    Array.from(availableCustomCheckbox).find(
      (checkbox) => checkbox.checked === false
    )
      ? (availableCustomCheckboxAllGoods.checked = false)
      : (availableCustomCheckboxAllGoods.checked = true);
  });
});

// const checkboxActiveInput = document

// counter
const availableInputContainers = document.querySelectorAll(
  '.available__input-container'
);
availableInputContainers.forEach(function (availableInputContainer) {
  availableInputContainer.addEventListener('change', function (e) {
    const sum = e.target.value * parseInt(e.target.getAttribute('data-price'));
    e.target.parentNode.parentNode.parentNode.querySelector(
      '.available__final-sum'
    ).textContent = sum;
    updateTotalGoodsSum();
  });
});

const availableButtonsContainerMinus = document.querySelectorAll(
  '.available__button-container-minus'
);
availableButtonsContainerMinus.forEach(function (
  availableButtonContainerMinus
) {
  availableButtonContainerMinus.addEventListener('click', function (e) {
    const input = e.target.parentNode.querySelector(
      '.available__input-container'
    );
    if (input.value > 1) {
      input.value = parseInt(input.value) - 1;
      input.dispatchEvent(new Event('change'));
      updateTotalPaymentSum();
    }
  });
});

const availableButtonsContainerPlus = document.querySelectorAll(
  '.available__button-container-plus'
);
availableButtonsContainerPlus.forEach(function (availableButtonContainerPlus) {
  availableButtonContainerPlus.addEventListener('click', function (e) {
    const input = e.target.parentNode.querySelector(
      '.available__input-container'
    );
    input.value = parseInt(input.value) + 1;
    input.dispatchEvent(new Event('change'));
    updateTotalPaymentSum();
  });
});

// подсчет сумм в разделе Итого
const availableWrappersFinal = document.querySelectorAll(
  '.available__wrapper-final'
);
const totalPaymentSum = document.querySelector('.total__subtitle-sum');
const updateTotalPaymentSum = () => {
  let totalAllPayment = 0;
  availableWrappersFinal.forEach(function (availableWrapperFinal) {
    let sumString = availableWrapperFinal.querySelector(
      '.available__final-sum'
    ).textContent;
    let sum = parseFloat(sumString);
    // let availableInputContainer = parseFloat(
    //   document.querySelector('.available__input-container').value
    // );
    totalAllPayment += sum;
  });
  totalPaymentSum.textContent = totalAllPayment + ' сом';
};

// подсчет количества товара в разделе товара
const totalGoodsSum = document.querySelector('.total__goods-sum');
const availableWrapperContainers = document.querySelectorAll(
  '.available__wrapper-container'
);
const updateTotalGoodsSum = () => {
  totalAllGoods = 0;
  availableWrapperContainers.forEach(function (availableWrapperContainer) {
    let sumStringGoods = availableWrapperContainer.querySelector(
      '.available__input-container'
    ).value;
    let sum = parseFloat(sumStringGoods);
    totalAllGoods += sum;
  });
  totalGoodsSum.textContent = totalAllGoods + ' товар(ов)';
};

// сумма товара без учета скидки
const totalSubtitleSum = document.querySelector('.total__subtitle-sum');

// сумма скидки на товар
const totalDiscountSum = document.querySelector('.total__discount-sum');
