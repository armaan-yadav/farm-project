import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAuthErrorByCode = ({
  errorCode,
}: {
  errorCode: number;
}): string => {
  switch (errorCode) {
    case 400:
      return "Request Timed out. Try again!";
    case 401:
      return "Incorrect OTP! Try again!";
    default:
      return "Something went wrong. Try again!";
  }
};
