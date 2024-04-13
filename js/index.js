function getProduct1() {
  getPrductsName("products-list", "prod1");
  getPrice("price1", "totalPrice");
}

function getProduct2() {
  getPrductsName("products-list", "prod2");
  getPrice("price2", "totalPrice");
}
function getProduct3() {
  getPrductsName("products-list", "prod3");
  getPrice("price3", "totalPrice");
}
function getProduct4() {
  getPrductsName("products-list", "prod4");
  getPrice("price4", "totalPrice");
}
function getProduct5() {
  getPrductsName("products-list", "prod5");
  getPrice("price5", "totalPrice");
}
function getProduct6() {
  getPrductsName("products-list", "prod6");
  getPrice("price6", "totalPrice");
}
function getProduct7() {
  getPrductsName("products-list", "prod7");
  getPrice("price7", "totalPrice");
}
function getProduct8() {
  getPrductsName("products-list", "prod8");
  getPrice("price8", "totalPrice");
}
function getProduct9() {
  getPrductsName("products-list", "prod9");
  getPrice("price9", "totalPrice");
}
document.getElementById("inpField").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const btn = document.getElementById("applyBtn");
  if (text === "SELL200") {
    btn.removeAttribute("disabled", true);
  } else {
    btn.setAttribute("disabled", true);
  }
});

document.getElementById("applyBtn").addEventListener("click", getTotalPrice);

function getTotalPrice() {
  const tPrice = document.getElementById("totalPrice").textContent;
  const tDiscount = document.getElementById("totalDiscount");
  const payAmount = document.getElementById("payablAmount");
  const convTprice = parseFloat(tPrice);
  console.log(convTprice);
  const prevDiscount = parseFloat(tDiscount.innerText);
  console.log(tDiscount);
  const discountAmount = convTprice * (20 / 100);
  const discount = discountAmount + parseFloat(prevDiscount);
  console.log(discount);
  const convPay = parseFloat(payAmount.innerText);
  const netAmount = convTprice - discount + convPay;
  tDiscount.innerText = discount.toFixed(2);
  payAmount.innerText = netAmount;
  return discount;
}

function getPrductsName(productname, text) {
  const listItem = document.getElementById(productname);
  const getText = document.getElementById(text).textContent;
  const li = document.createElement("li");
  li.innerText = getText;
  if (li.innerText === getText) {
    listItem.appendChild(li);
  }
  return;
}
function getPrice(id1, id2) {
  const price = document.getElementById(id1);
  const priviusPrice = document.getElementById(id2);
  const pri = parseFloat(price.innerText);
  const setTotal = parseFloat(priviusPrice.innerText) + pri;
  priviusPrice.innerText = setTotal;
  return setTotal;
}
