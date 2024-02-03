"use strict";

// 1. Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue = parseInt(
  currentMaxValue.toString().split("").reverse().join("")
);

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

// 2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let results = resultsArray.flat(Infinity);
let productOfArray = 1;
for (let result of results) {
  productOfArray *= result;
}

console.log(productOfArray);
