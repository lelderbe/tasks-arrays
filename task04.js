const arr = [1, 2, 3, 4, 5];

// выведи все элементы массива в обратном порядке (начиная с конца)
// используй цикл for..i

// цикл от длины массива до 0 с декрементом
//   вывести в консоль значения по индексу

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// выведи все элементы массива в обратном порядке (начиная с конца). Исходный массив не изменяй.
// используй цикл for..of, методы reverse() и slice()

//   копия массива методом slice
//   разворот массива методом reverse
//   цикл перебора элементов
//     вывод в консоль текущий элемент

const myArr = arr.slice();
// console.log(myArr);
myArr.reverse();
// console.log(myArr);

for (let item of myArr) {
  console.log(item);
}

// выведи все элементы массива в обратном порядке (начиная с конца). Исходный массив не изменяй.
// используй методы forEach(), reverse() и slice()

// копия массива методом slice
// разворот массива методом reverse
// цикл перебора методом forEach
//    вывод в консоль текущий элемент

const elseMyArr = [...arr]; // деструктуризация
// const elseMyArr = arr.slice();
elseMyArr.reverse();

elseMyArr.forEach((item) => {
  console.log(item);
});

[...arr].reverse().forEach((item) => {
  console.log(item);
});
