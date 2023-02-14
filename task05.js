const message = 'I have a pen';

// разверни строку задом наперёд и выведи её в консоль

// применить метод split для того, чтобы перевести строку в массив букв
// применить метод reverse к массиву, чтобы развернуть массив
// применить метод join, чтобы преобразовать массив в строку
// вывести результат в консоль

const myArr = message.split('');

console.log(myArr.reverse());

console.log(myArr.join(''));

/////////////

console.log(message.split('').reverse().join(''));
