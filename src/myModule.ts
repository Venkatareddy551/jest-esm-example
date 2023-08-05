import {getResponse} from "./index.js";
// src/myModule.ts
export const add = (a: number, b: number): number => a + b;
export const multiply = (a: number, b: number): number => a * b;

console.log("---------->>>"+add(2,5));
export const result = async () => await getResponse();
//console.log(await getResponse())
export const abc = 10;