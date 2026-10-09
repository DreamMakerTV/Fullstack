function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Очікував ${expected}, отримав ${actual}`);
      }
    },
  };
}

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}\n   ${error.message}`);
  }
}

function getAgeCategory(age) {
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    return "некоректний вік";
  }
  if (age <= 12) {
    return "дитина";
  }
  if (age <= 17) {
    return "підліток";
  }
  if (age <= 64) {
    return "дорослий";
  }
  return "пенсіонер";
}

function calculateTotal(price, quantity, discount = 0) {
  if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
    return null;
  }
  const total = price * quantity;
  return total - total * (discount / 100);
}

test("getAgeCategory: 5 років -> дитина", () => {
  expect(getAgeCategory(5)).toBe("дитина");
});

test("getAgeCategory: межа 12 років -> дитина", () => {
  expect(getAgeCategory(12)).toBe("дитина");
});

test("getAgeCategory: межа 13 років -> підліток", () => {
  expect(getAgeCategory(13)).toBe("підліток");
});

test("getAgeCategory: межа 17 років -> підліток", () => {
  expect(getAgeCategory(17)).toBe("підліток");
});

test("getAgeCategory: межа 18 років -> дорослий", () => {
  expect(getAgeCategory(18)).toBe("дорослий");
});

test("getAgeCategory: межа 64 роки -> дорослий", () => {
  expect(getAgeCategory(64)).toBe("дорослий");
});

test("getAgeCategory: межа 65 років -> пенсіонер", () => {
  expect(getAgeCategory(65)).toBe("пенсіонер");
});

test("getAgeCategory: від'ємне число -> некоректний вік", () => {
  expect(getAgeCategory(-5)).toBe("некоректний вік");
});

test("getAgeCategory: рядок замість числа -> некоректний вік", () => {
  expect(getAgeCategory("20")).toBe("некоректний вік");
});

test("getAgeCategory: NaN -> некоректний вік", () => {
  expect(getAgeCategory(NaN)).toBe("некоректний вік");
});

test("calculateTotal: без знижки (за замовчуванням)", () => {
  expect(calculateTotal(100, 3)).toBe(300);
});

test("calculateTotal: зі знижкою 10%", () => {
  expect(calculateTotal(100, 3, 10)).toBe(270);
});

test("calculateTotal: знижка 0%", () => {
  expect(calculateTotal(200, 2, 0)).toBe(400);
});

test("calculateTotal: знижка 100%", () => {
  expect(calculateTotal(150, 4, 100)).toBe(0);
});

test("calculateTotal: кількість 0", () => {
  expect(calculateTotal(50, 0, 10)).toBe(0);
});

test("calculateTotal: некоректні дані (від'ємна ціна)", () => {
  expect(calculateTotal(-100, 2, 10)).toBe(null);
});

test("calculateTotal: некоректні дані (знижка більше 100)", () => {
  expect(calculateTotal(100, 2, 110)).toBe(null);
});
