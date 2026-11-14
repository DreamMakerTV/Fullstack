import "./style.css";

let username: string = "DreamMakerTV";
username = "Anatolii";

let city: string = "Dnipro";
city = "Kyiv";
city = "Lviv";

let currentLesson: number = 36;
currentLesson = 37;

let isPublished: boolean = true;
isPublished = false;

let empty: null = null;

console.log(username, city, currentLesson, isPublished, empty);

const prices: number[] = [150, 320, 480, 900];
const oldPrices: Array<number> = [100, 250, 500];

const getTotalSum = (items: number[]): number => {
  let result = 0;

  for (const price of items) {
    result += price;
  }

  return result;
};

console.log(getTotalSum(prices), oldPrices);

let data: string | null = null;
data = "Loaded data";
console.log(data);

type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";
direction = "up";
direction = "right";

const getDirection = (dir: Direction): Direction => {
  return dir;
};

console.log(getDirection(direction));

const sum = (a: number, b: number): number => {
  return a + b;
};

const sumToString = (a: number, b: number): string => {
  return (a + b).toString();
};

console.log(sum(15, 25), sumToString(10, 5));

const lettersRegexp: RegExp = /^[A-Za-z]+$/;
console.log(lettersRegexp.test("Anatolii"));

type ShortUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const shortUser: ShortUser = {
  id: 1,
  name: "Anatolii Kolvakh",
  username: "DreamMakerTV",
  email: "kolvah95@gmail.com",
};

const getInfoUser = (user: ShortUser): string => {
  return `Hello! My name is ${user.username.toUpperCase()}`;
};

console.log(getInfoUser(shortUser));

interface BaseUser {
  name: string;
  password: string;
}

interface Admin extends BaseUser {
  isAdmin: boolean;
}

const admin: Admin = {
  name: "Anatolii",
  password: "qwerty12345",
  isAdmin: true,
};

const viewer: BaseUser = {
  name: "Guest",
  password: "user12345",
};

console.log(admin, viewer);

interface Geo {
  lat: string;
  lng: string;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string | null;
  website?: string;
  company: Company;
}

const user: User = {
  id: 1,
  name: "Anatolii Kolvakh",
  username: "DreamMakerTV",
  email: "kolvah95@gmail.com",
  address: {
    street: "Naberezhna Peremohy",
    suite: "Apt. 42",
    city: "Dnipro",
    zipcode: "49000",
    geo: {
      lat: "48.4647",
      lng: "35.0462",
    },
  },
  phone: "+380991234567",
  website: "dreammakertv.dev",
  company: {
    name: "DreamMaker Studio",
    catchPhrase: "Full-Stack JS & Hardware Modding",
    bs: "web development and electronics",
  },
};

console.log(user);
