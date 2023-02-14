const arr = [1, 2, 3, 4, 5];

// выведи только нечётные элементы массива
// используй цикл for..i

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}

// выведи только нечётные элементы массива
// используй цикл for..of

for (let item of arr) {
  if (item % 2 === 1) {
    console.log(item);
  }
}

// выведи только нечётные элементы массива
// используй метод forEach()

arr.forEach((item) => {
  if (item % 2 !== 0) {
    console.log(item);
  }
});
