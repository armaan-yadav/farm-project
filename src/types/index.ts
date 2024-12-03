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

export interface FarmData {
  listingId: string;
  isVerified: boolean;
  // overview
  title: string;
  media: string[];
  area: string;
  areaUnit: string;
  ownership: string;
  description: string;
  price: number;

  //land related
  farmType: FarmType;
  suitableCrops: string[];
  soilType: string;

  //location related
  location: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  landmarks?: string;
  duration: string;

  //additional details
  waterAvailable?: boolean;
  electricityAvailable?: boolean;
  isIrrigated?: boolean;
  boundaryWall?: boolean;
  numOfSidesOpen?: number;
  labourProvided?: boolean;
  laboutCost?: string;
}

export type FarmType = "Organic" | "Non-Organic";
