const arr = [1, 2, 3, 4, 5];

// выведи в консоль все элементы массива
// используй цикл for..i

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// выведи в консоль все элементы массива
// используй цикл for..of

for (let item of arr) {
  console.log(item);
}

// выведи в консоль все элементы массива
// используй метод forEach()

arr.forEach((item) => {
  console.log(item);
});
