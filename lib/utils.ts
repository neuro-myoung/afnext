import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert a prisma obj into a JS obj
export function convertToJSObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places for price
export function formatNumberForPrice(num: number): string {
  const [intVal, decimalVal] = num.toString().split('.');
  return decimalVal ? `${intVal}.${decimalVal.padEnd(2,'0')}` : `${intVal}.00`
 }