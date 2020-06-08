function discount(price, percent) {
  return price*(1 - percent/100) + "€";
}

console.log(discount(100, 30));