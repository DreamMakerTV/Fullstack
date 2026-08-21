/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
const myNum = 10;

// ім'я змінної: myStr, значення: 'some string'
const myStr = "some string";

// ім'я змінної: myBool, значення: true
const myBool = true;

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
const myArr = [1, 2, 3, 4, 5];

// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
const myObj = { first: "First Name", last: "Last Name" };

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2
const decimal2 = myNum.toFixed(2);

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt
let myBigInt = 123n;
myBigInt = myBigInt + 1n;

console.log(myNum); // 10
console.log(myStr); // 'some string'
console.log(myBool); // true
console.log(myArr); // [1, 2, 3, 4, 5]
console.log(myObj); // { first: 'First Name', last: 'Last Name' }
console.log(decimal2); // 10.00
console.log(myBigInt); // 124n
