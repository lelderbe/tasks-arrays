const message = "Time flies when you're having fun";

// выведи новый массив, который будет содержать слова из строки message, длина которых меньше 5
// используй метод filter() и прочие, которые сочтёшь нужными

const myArr = message.split(' ');
// console.log(myArr);

myArrFilter = myArr.filter((item) => {
  return item.length < 5;
});
console.log(myArrFilter);
