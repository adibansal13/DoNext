let products = document.querySelectorAll(".product");
let cart = document.querySelector(".cart_section");
let cartTotal = document.querySelector(".cart_section h1 span");
let total = 0;
for (let item of products) {
  let btn = item.querySelector("button");
  let price = item.querySelector("p span");
  let name = item.querySelector("h2");
  btn.onclick = function () {
    cartItem(name.innerText, price.innerText, btn);
    btn.innerText = "GO To Cart";
    btn.disabled = true;
    total += parseInt(price.innerText);
    cartTotal.innerText = total;
  };
}

function cartItem(name, price, btn) {
  let item = document.createElement("div");
  let itemname = document.createElement("h2");
  let itemPrice = document.createElement("p");
  let removeBtn = document.createElement("button");
  let incBtn = document.createElement("button");
  let amount = document.createElement("span");
  let decBtn = document.createElement("button");
  let count = 1;
  incBtn.innerText = "+";
  decBtn.innerText = "-";
  amount.innerText = count;
  removeBtn.innerText = "Remove";
  incBtn.onclick = function () {
    count++;
    amount.innerText = count;
    total += parseInt(price);
    cartTotal.innerText = total;
  };
  decBtn.onclick = function () {
    if (count != 1) {
      count--;
      total -= parseInt(price);
      cartTotal.innerText = total;
      amount.innerText = count;
    }
  };
  removeBtn.onclick = function () {
    total -= count * parseInt(price);
    this.parentElement.remove();
    cartTotal.innerText = total;
    btn.innerText = "Add Cart";
    btn.disabled = false;
  };
  item.classList.add("cart_item");
  itemname.innerText = name;
  itemPrice.innerHTML = `price : <span>${price}</span>`;
  item.append(itemname);
  item.append(itemPrice);
  item.append(removeBtn);
  item.append(incBtn);
  item.append(amount);
  item.append(decBtn);
  cart.append(item);
}
