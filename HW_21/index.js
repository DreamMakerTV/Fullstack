// Площа
function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(3, 4));
console.log(getRectangleArea(10, 5));
console.log(getRectangleArea(7, 2));

// Знижка
function applyDiscount(price, discount = 0) {
  return price - price * (discount / 100);
}

console.log(applyDiscount(1000, 15));
console.log(applyDiscount(1000));

// Привітання
function greet(name) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return `Привіт, ${capitalize(name)}!`;
}

console.log(greet("оЛЕГ")); // "Привіт, Олег!"
