import { Models } from "appwrite";
export interface UserData {
  accountId: string;
  name: string;
  age: number;
  profileUrl: string;
  email: string | null;
  phone: string | null;
  state: string;
  city: string;
  village: string | null;
  pinCode: string;
}

export interface User extends UserData, Models.Document {}
