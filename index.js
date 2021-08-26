var product_total_amount = document.getElementById("product_total_amount");
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amnt = document.getElementById("total_cart_amnt");
var discountCode = document.getElementById("discount_code1");

const decreaseNumber = (incdec, itemprice) => {
  var itemVal = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);
  //   console.log(itemVal.value);
  if (itemVal.value <= 0) {
    itemVal.value = 0;
  } else {
    itemVal.value = parseInt(itemVal.value) - 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
    product_total_amount.innerHTML =
      parseInt(product_total_amount.innerHTML) - 15;
    total_cart_amnt.innerHTML =
      parseInt(product_total_amount.innerHTML) +
      parseInt(shipping_charge.innerHTML);

    itemVal.style.background = "#fff";
    itemVal.style.color = "#000";
    console.log(itemVal.value);
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemVal = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemVal.value >= 5) {
    itemVal.value = 5;
    alert("Maximum 5 are allowed");
    itemVal.style.background = "red";

    itemVal.style.color = "white";
  } else {
    itemVal.value = parseInt(itemVal.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
    product_total_amount.innerHTML =
      parseInt(product_total_amount.innerHTML) + 15;

    total_cart_amnt.innerHTML =
      parseInt(product_total_amount.innerHTML) +
      parseInt(shipping_charge.innerHTML);

    console.log(itemVal.value);
  }
};

const discount_code = () => {
  let totalamncurr = parseInt(total_cart_amnt.innerHTML);

  let error_trw = document.getElementById("error_trw");
  if (discountCode.value === "salman") {
    let newtotalamnt = totalamncurr - 15;
    total_cart_amnt.innerHTML = newtotalamnt;
    error_trw.innerHTML = "Hurray! Code is valid";
  } else {
    error_trw.innerHTML = "This Code is not valid";
  }
};
