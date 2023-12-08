let dataBasket = [
  {
    id: '1',
    checked: true,
    name: 'T-shirt',
    count: 1,
    amount: 1051,
    maxCount: 2,
    sale: [
      {
        // saleAmount
        percent: 10,
        description: 'Скидка покупателя 10%',
      },
      {
        percent: 55,
        description: 'Скидка 55%',
      },
    ],
  },
  {
    id: '2',
    checked: true,
    name: 'Telephone',
    count: 1,
    amount: 10500,
    sale: [
      {
        // saleAmount
        percent: 10,
        description: 'Скидка покупателя 10%',
      },
      {
        percent: 55,
        description: 'Скидка 55%',
      },
    ],
  },
  {
    id: '3',
    checked: true,
    name: 'Pencil',
    count: 1,
    amount: 450,
    maxCount: 2,
    sale: [
      {
        // saleAmount
        percent: 10,
        description: 'Скидка покупателя 10%',
      },
      {
        percent: 55,
        description: 'Скидка 55%',
      },
    ],
  },
];

dataBasket.forEach((item) => {
  let totalSaleAmount = 0;
  item.sale.forEach((s) => {
    const saleAmount = Math.floor((s.percent / 100.0) * item.amount);
    s.saleAmount = saleAmount;
    totalSaleAmount += saleAmount;
  });
  item.saleAmount = totalSaleAmount;
});

//  использование checkbox
const availableCustomCheckbox = document.querySelectorAll(
  '.available__custom-checkbox'
);
const availableCustomCheckboxAllGoods = document.querySelector(
  '.available__custom-checkbox-all-goods'
);

availableCustomCheckboxAllGoods.addEventListener('click', function (e) {
  console.log(e.target.checked);
  dataBasket.forEach((item) => {
    item.checked = e.target.checked;
  });

  availableCustomCheckbox.forEach((checkbox) => {
    const id = checkbox.getAttribute('data-id');
    const item = dataBasket.find((x) => x.id == id);
    if (item) checkbox.checked = item.checked;
  });
});
availableCustomCheckbox.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    Array.from(availableCustomCheckbox).find(
      (checkbox) => checkbox.checked === false
    )
      ? (availableCustomCheckboxAllGoods.checked = false)
      : (availableCustomCheckboxAllGoods.checked = true);

    updateTotalPaymentSum();
  });
});

// counter
const availableInputContainers = document.querySelectorAll(
  '.available__input-container'
);
availableInputContainers.forEach(function (availableInputContainer) {
  availableInputContainer.addEventListener('change', function (e) {
    const id = e.target.getAttribute('data-id');
    const item = dataBasket.find((x) => x.id == id);
    if (item) item.count = parseInt(e.target.value);

    updateGoodSum();
    updateGoodDiscount();
    updateTotalGoodsSum();
    updateTotalDiscount();
    updateSumGoodsNoDiscount();
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

// функция  обновления общей стоимости за товар
const updateGoodSum = () => {
  const availableFinalSums = document.querySelectorAll('.available__final-sum');
  availableFinalSums.forEach(function (availableFinalSum) {
    const id = availableFinalSum.getAttribute('data-id');
    const item = dataBasket.find((x) => x.id == id);
    if (item)
      availableFinalSum.textContent =
        item.count * (item.amount - item.saleAmount);
  });
};

//функция обновления общей стоимости скидки на товар
const updateGoodDiscount = () => {
  const availableGeneralDiscounts = document.querySelectorAll(
    '.available__general-sum'
  );
  availableGeneralDiscounts.forEach(function (availableGeneralDiscount) {
    const id = availableGeneralDiscount.getAttribute('data-id');
    const item = dataBasket.find((x) => x.id == id);
    if (item)
      availableGeneralDiscount.textContent = item.count * item.amount + 'сом';
  });
};

// подсчет сумм в разделе Итого
const updateTotalPaymentSum = () => {
  let totalAllPayment = 0;
  const totalPaymentSum = document.querySelector('.total__subtitle-sum');
  dataBasket.forEach(function (item) {
    if (item.checked) {
      totalAllPayment += item.count * (item.amount - item.saleAmount);
    }
  });
  totalPaymentSum.textContent = totalAllPayment + ' сом';
};
// подсчет суммы скидки в разделе Итого
const updateTotalDiscount = () => {
  let totalAllDiscount = 0;
  const totalDiscount = document.querySelector('.total__discount-sum');
  dataBasket.forEach(function (item) {
    if (item.checked) {
      totalAllDiscount += item.count * item.saleAmount;
    }
  });
  totalDiscount.textContent = '-' + totalAllDiscount + ' сом';
};

// подсчет количества товара в разделе товара

const updateTotalGoodsSum = () => {
  let totalAllGoods = 0;
  const totalGoodsSum = document.querySelector('.total__goods-sum');
  dataBasket.forEach(function (item) {
    if (item.checked) {
      totalAllGoods += item.count;
    }
  });

  totalGoodsSum.textContent = totalAllGoods + ' товар(ов)';
};

// сумма товара без учета скидки
const updateSumGoodsNoDiscount = () => {
  let totalAllSumGoodsNoDiscount = 0;
  const totalPaymentSum = document.querySelector('.total__payment-sum');
  dataBasket.forEach(function (item) {
    if (item.checked) {
      totalAllSumGoodsNoDiscount  += item.count * item.amount
    }
  });
  totalPaymentSum.textContent = totalAllSumGoodsNoDiscount + ' сом'
}
