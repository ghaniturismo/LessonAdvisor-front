import {Address} from "./adresse";

export interface Person {
  id?: string;
  photo?: string;

  firstname: string;
  lastname: string;

  email: string;
  phone: string;

  address: Address;

  teachers: string[];
  students: string[];
}
