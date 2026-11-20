import { HttpStatus, OrderStatus } from "./types";
import type { ID, Order, ProfileUser, Theme } from "./types";

const getUserById = (id: ID): string => {
  return `Fetching user with ID: ${id}`;
};

const applyTheme = (theme: Theme): string => {
  return `Active theme: ${theme}`;
};

const updateOrder = (order: Order, nextStatus: OrderStatus): Order => {
  switch (nextStatus) {
    case OrderStatus.Created:
      return { ...order, status: OrderStatus.Created };
    case OrderStatus.Shipped:
      return { ...order, status: OrderStatus.Shipped };
    case OrderStatus.Delivered:
      return { ...order, status: OrderStatus.Delivered };
    default:
      return order;
  }
};

const checkHttpStatus = (code: HttpStatus): string => {
  switch (code) {
    case HttpStatus.Ok:
      return "200 OK";
    case HttpStatus.Created:
      return "201 Created";
    case HttpStatus.BadRequest:
      return "400 Bad Request";
    case HttpStatus.NotFound:
      return "404 Not Found";
    default:
      return "Unknown status";
  }
};

const getFirstElement = <T>(items: T[]): T | undefined => {
  return items[0];
};

const filterById = <T extends { id: ID }>(
  items: T[],
  targetId: ID,
): T | undefined => {
  return items.find((item) => item.id === targetId);
};

type OptionalProfileUser = Partial<ProfileUser>;
type RequiredProfileUser = Required<OptionalProfileUser>;
type ReadonlyProfileUser = Readonly<ProfileUser>;
type ProfileBillingOnly = Pick<ProfileUser, "properties">;
type PublicProfileUser = Omit<ProfileUser, "properties" | "age">;

export const runTypeScriptPractice = (): void => {
  const currentTheme: Theme = "dark";
  console.log(
    getUserById(37),
    getUserById("user-uuid-42"),
    applyTheme(currentTheme),
  );

  const initialOrder: Order = {
    id: 101,
    title: "Mechanical Keyboard",
    status: OrderStatus.Created,
  };
  const shippedOrder = updateOrder(initialOrder, OrderStatus.Shipped);
  const deliveredOrder = updateOrder(shippedOrder, OrderStatus.Delivered);
  console.log(
    initialOrder,
    shippedOrder,
    deliveredOrder,
    checkHttpStatus(HttpStatus.Ok),
  );

  const firstNumber = getFirstElement([10, 20, 30]);
  const firstWord = getFirstElement(["TypeScript", "Vite", "React"]);
  const gadgets = [
    { id: 1, name: "PS5 DualSense" },
    { id: 2, name: "ASUS ZenBook" },
    { id: 3, name: "Fifine AM8" },
  ];
  const firstGadget = getFirstElement(gadgets);
  const foundGadget = filterById(gadgets, 2);
  console.log(firstNumber, firstWord, firstGadget, foundGadget);

  const partialUser: OptionalProfileUser = {
    name: "Anatolii",
  };

  const fullUser: RequiredProfileUser = {
    id: 1,
    name: "Anatolii Kolvakh",
    email: "kolvah95@gmail.com",
    age: 31,
    properties: {
      billingAddress: "Naberezhna Peremohy, 42",
      city: "Dnipro",
    },
  };

  const frozenUser: ReadonlyProfileUser = { ...fullUser };

  const userBilling: ProfileBillingOnly = {
    properties: {
      billingAddress: "Naberezhna Peremohy, 42",
      city: "Dnipro",
    },
  };

  const publicUser: PublicProfileUser = {
    id: 1,
    name: "Anatolii Kolvakh",
    email: "kolvah95@gmail.com",
  };

  console.log(partialUser, fullUser, frozenUser, userBilling, publicUser);
};
