const arr = [1, 2, 3, 4, 5];

// создай новый массив, содержащий только нечётные элементы массива arr и выведи его в консоль
// используй цикл for..i

// создать новый пустой массив
// создать цикл от 0 до длины массива
//   условие, если элемент нечетный
//     добавить его в новый массив
// вывести в консоль новый массив

const myArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    myArr.push(arr[i]);
  }
}
console.log(myArr);

// создай новый массив, содержащий только нечётные элементы массива arr и выведи его в консоль
// используй цикл for..of

const myArr_2 = [];

for (let item of arr) {
  if (item % 2 !== 0) {
    myArr_2.push(item);
  }
}
console.log(myArr_2);

// создай новый массив, содержащий только нечётные элементы массива arr и выведи его в консоль
// используй метод forEach()

const myArr3 = [];

arr.forEach((item) => {
  if (item % 2 !== 0) {
    myArr3.push(item);
  }
});
console.log(myArr3);

// создай новый массив, содержащий только нечётные элементы массива arr и выведи его в консоль
// используй метод filter()

const myArr4 = arr.filter((item) => {
  return item % 2 !== 0;
});

console.log(myArr4);

/////////////

console.log('--------------------');

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
const t = sum(2, 2);
console.log(t);

function isOdd(num) {
  console.log('num:', num);
  return num % 2 !== 0;
}

console.log('--------------------');

const myArr5 = arr.filter(isOdd);

console.log(myArr5);
