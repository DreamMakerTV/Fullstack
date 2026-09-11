// стрілки
const double = (x) => x * 2;
const sum = (a, b) => a + b;
const isAdult = (age) => age >= 18;

console.log(double(4));
console.log(isAdult(17));

// Картка користувача
const user = {
  firstName: "Анатолий",
  lastName: "Кольвах",
  age: 31,
  city: "Днепр",
};

console.log(user.firstName);
console.log(user.city);

user.email = "kolvah95@gmail.com";

console.log(user);

// Товар і ціна зі знижкою
const product = {
  title: "Ноутбук",
  price: 20000,
  discount: 10,
};

const getFinalPrice = ({ price, discount = 0 }) =>
  price - price * (discount / 100);

console.log(getFinalPrice(product));
console.log(getFinalPrice({ title: "Мишка", price: 1000 }));

// Порівняння двох об'єктів
const book1 = { title: "HTML та CSS", author: "Джон Дакетт", pages: 480 };
const book2 = {
  title: "Виразний JavaScript",
  author: "Марейн Хавербек",
  pages: 456,
};

const getLonger = (a, b) => (a.pages > b.pages ? a : b);

console.log(getLonger(book1, book2));
