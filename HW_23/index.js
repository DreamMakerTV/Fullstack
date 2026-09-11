// Створення та наповнення телефонної книги
const phoneBook = new Map();
phoneBook.set("Оля", "050-111-22-33");
phoneBook.set("Іван", "067-444-55-66");
phoneBook.set("Марія", "093-777-88-99");

function findPhone(name) {
  if (phoneBook.has(name)) {
    return phoneBook.get(name);
  }
  return "Контакт не знайдено";
}

function removeContact(name) {
  if (phoneBook.delete(name)) {
    console.log("Контакт видалено");
  } else {
    console.log("Такого контакту нема");
  }
}

function printAll() {
  for (const [name, phone] of phoneBook) {
    console.log(`${name}: ${phone}`);
  }
}

console.log(findPhone("Іван"));
console.log(findPhone("Петро"));

removeContact("Оля");
removeContact("Оля");

printAll();

// Створення списку дозволених кодів
const allowedCodes = new Set();
allowedCodes.add(101);
allowedCodes.add(205);
allowedCodes.add(333);

function checkCode(code) {
  if (allowedCodes.has(code)) {
    console.log("Доступ дозволено");
  } else {
    console.log("Доступ заборонено");
  }
}

checkCode(205);
checkCode(999);
