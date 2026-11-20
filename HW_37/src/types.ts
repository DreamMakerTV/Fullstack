export type ID = number | string;

export type Theme = "light" | "dark";

export type RequestStatus = "pending" | "fulfilled" | "rejected";

export enum OrderStatus {
  Created = "created",
  Shipped = "shipped",
  Delivered = "delivered",
}

export enum HttpStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}

export interface Order {
  id: ID;
  title: string;
  status: OrderStatus;
}

export interface BillingProperties {
  billingAddress: string;
  city: string;
}

export interface ProfileUser {
  id: ID;
  name: string;
  email: string;
  age: number;
  properties: BillingProperties;
}

export interface UserGeo {
  lat: string;
  lng: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeo;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface AppState<T> {
  data: T[];
  error: string | null;
  isLoading: boolean;
  status: RequestStatus;
}
