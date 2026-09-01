// #1 та #2
const userObj = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(userObj.fullName());

// #3
function defUpperStr(str) {
  return (str || "Default text").toUpperCase();
}
console.log(defUpperStr("My text"));
console.log(defUpperStr());

// #4
function evenFn(n) {
  const arr = [];
  for (let i = 2; i <= n; i += 2) {
    arr.push(i);
  }
  return arr;
}
console.log(evenFn(10));

// #5
function weekFn(n) {
  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return null;
  }
}
console.log(weekFn(1));
console.log(weekFn(9));

// #6
function ageClassification(n) {
  return n <= 0
    ? null
    : n <= 24
      ? "Дитинство"
      : n <= 44
        ? "Молодість"
        : n <= 65
          ? "Зрілість"
          : n <= 75
            ? "Старість"
            : n <= 90
              ? "Довголіття"
              : n <= 122
                ? "Рекорд"
                : null;
}
console.log(" 24.01 :", ageClassification(24.01));

// #7
function oddFn(n) {
  const arr = [];
  let i = 1;
  while (i <= n) {
    arr.push(i);
    i += 2;
  }
  return arr;
}
console.log(oddFn(10));

// #8
function mainFunc(a, b, cb) {
  if (typeof cb !== "function") return false;
  return cb(a, b);
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, "not a func"));
