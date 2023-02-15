const message = "Time flies when you're having fun";

// удали из строки message все буквы 'e' и выведи полученную строку в консоль
// используй метод массивов filter() и другие, которые сочтёшь нужными

// применить метод split, чтобы перевести строку в массив со значениями
// использовать метод filter, чтобы удалить все значения e
// вывести в консоль полученный массив, применив к нему метод join

const myArr = message.split('');
console.log(myArr);

const myArrFilter = myArr.filter((item) => {
  return item !== 'e';
});
console.log(myArrFilter.join(''));

console.log('-----------------');

const result = message
  .split('')
  .filter((item) => {
    return item !== 'e';
  })
  .join('');

console.log(result);

// удали из строки message все буквы 'e' и выведи полученную строку в консоль
// используй метод массивов map() и другие, которые сочтёшь нужными

const myArr_1 = message.split('');
console.log(myArr_1);

const myArrMap = myArr_1.map((item) => {
  if (item !== 'e') {
    return item;
  }
});

console.log(myArrMap);
console.log(myArrMap.join(''));
