// 1
{
  const queue = ["Аня", "Богдан"];
  queue.push("Віра");
  queue.unshift("Гліб");
  console.log("1. Масив та довжина:", queue, queue.length);
}

// 2
{
  const numbers = [10, 20, 30, 40];
  const first = numbers.shift();
  const last = numbers.pop();
  console.log("2. Сума та залишок:", first + last, numbers);
}

// 3
{
  const tasks = [
    { id: 1, title: "Вивчити HTML", done: true },
    { id: 2, title: "Вивчити CSS", done: false },
  ];
  tasks.push({ id: 3, title: "Купити хліб", done: false });
  tasks.shift();
  console.log("3. Задачі:", tasks);
}

// 4
{
  const addUser = (users, name) => {
    const nextId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push({ id: nextId, name });
    return users;
  };

  const usersList = [{ id: 1, name: "Іван" }];
  const updatedUsers = addUser(usersList, "Марія");
  console.log("4. Додано користувача:", updatedUsers);
}

// 5
{
  const numbers = [3, 8, 12, 5, 20];
  const firstOver10 = numbers.find((num) => num > 10);
  console.log("5. Перше число > 10:", firstOver10);
}

// 6
{
  const animals = ["кіт", "собака", "пес", "ведмідь"];
  const longWord = animals.find((word) => word.length > 5);
  // Відповідь на питання: якщо таких слів немає, метод find поверне undefined
  console.log("6. Слово > 5 символів:", longWord);
}

// 7
{
  const numbers = [4, 0, -2, 7, -9];
  const firstNegative = numbers.find((num) => num < 0);
  const result =
    firstNegative !== undefined ? firstNegative : "Від'ємних немає";
  console.log("7. Перше від'ємне:", result);
}

// 8
{
  const users = [
    { id: 1, name: "Аня", age: 25 },
    { id: 2, name: "Богдан", age: 17 },
    { id: 3, name: "Віра", age: 32 },
  ];
  const user = users.find((u) => u.id === 2);
  console.log("8. Користувач з id 2:", user ? user.name : "Не знайдено");
}

// 9
{
  const users = [
    { id: 1, name: "Аня", age: 25 },
    { id: 2, name: "Богдан", age: 17 },
    { id: 3, name: "Віра", age: 32 },
  ];

  const getUserName = (usersArray, id) => {
    const user = usersArray.find((u) => u.id === id);
    return user ? user.name : "Невідомий";
  };

  const name1 = getUserName(users, 3);
  const name2 = getUserName(users, 99);
  console.log("9. Імена користувачів:", name1, ",", name2);
}

// 10
{
  const products = [
    { name: "Ноутбук", price: 30000, inStock: true },
    { name: "Миша", price: 800, inStock: false },
    { name: "Клавіатура", price: 2500, inStock: false },
  ];
  const missingProduct = products.find((p) => p.inStock === false);
  console.log(
    "10. Немає в наявності:",
    missingProduct ? missingProduct.name : "Все є",
  );
}

// 11
{
  const words = ["кіт", "собака", "кінь", "миша", "корова"];
  const kWords = words.filter((word) => word.startsWith("к"));
  console.log('11. Починаються на "к":', kWords);
}

// 12
{
  const removeAll = (array, value) => {
    return array.filter((item) => item !== value);
  };
  const filteredArray = removeAll([1, 2, 1, 3, 1], 1);
  console.log("12. Масив без 1:", filteredArray);
}

// 13
{
  const products = [
    { name: "Ноутбук", price: 30000, inStock: true },
    { name: "Миша", price: 800, inStock: false },
    { name: "Клавіатура", price: 2500, inStock: true },
    { name: "Килимок", price: 300, inStock: true },
  ];
  const availableAndCheap = products.filter(
    (p) => p.inStock && p.price <= 5000,
  );
  console.log("13. Доступні до 5000:", availableAndCheap);
}

// 14
{
  const numbers = [1, 2, 3, 4];
  const squares = numbers.map((num) => num ** 2);
  console.log("14. Квадрати:", squares);
}

// 15
{
  const animals = ["кіт", "собака", "пес"];
  const lengths = animals.map((word) => word.length);
  console.log("15. Довжини слів:", lengths);
}

// 16
{
  const prices = [100, 250];
  const formattedPrices = prices.map((price) => `${price} грн`);
  console.log("16. Форматовані ціни:", formattedPrices);
}

// 17
{
  const users = [
    { id: 1, name: "Аня", age: 25 },
    { id: 2, name: "Богдан", age: 17 },
  ];
  const userNames = users.map((user) => user.name);
  console.log("17. Імена:", userNames);
}
