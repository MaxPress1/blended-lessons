// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// let number = prompt('Введіть число');

// number = Number(number);

// if (number === 10) {
//     alert('Вірно');
// } else {
//     alert('Невірно');

// }

// alert(number === 10 ? "Вірно" : "Невірно");




// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 14) {
//     alert(`${min} входить в першу чверть`);
// } else if (min >= 15 && min <= 30) {
//     alert(`${min} входить в другу чверть`);
// } else if (min >= 31 && min <= 44) {
//     alert(`${min} входить в третю чверть`);
// } else {
//     alert(`${min} входить в останню чверть`);
// }


// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const number = prompt('Виберіть число від 1 до 4');

// switch (number) {
//     case '1':
//         alert('Зима');
//         break;
//     case '2':
//         alert('Весна');
//         break;
//     case '3':
//         alert('Літо');
//         break;
//     case '4':
//         alert('Осінь');
//         break;
//     default:
//         alert('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
//         break;
// } 


// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const minutes = prompt('Введіть кількість хвилин');

// const hours = Math.floor(minutes / 60);
// const formattingMinutes = minutes % 60;

// const stringHours = String(hours).padStart(2, '0');
// const stringMinutes = String(formattingMinutes).padStart(2, '0');

// alert(`${stringHours}:${stringMinutes}`);



// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt('Введіть ваш логін');

// if (login === 'Адмін') {
    
//     const password = prompt('Введіть ваш пароль');

//     if (password === 'Я головний') {
//         alert('Добрий день!');
//     } else {
//         alert('Невірний пароль!');
//     }
// } else {
//     alert('Скасовано');
// }



// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.


//     let index = 0; 

// while (index <= 20) {
//     console.log(index);
    
//     index++;
// }






// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//     let total = 0;

//     for (let index = min; index <= max; index++) {
//         if (index % 2 === 0) {
//             total += index;
//         }
//     }

//     while (min <= max) {
//         console.log(max);
//         --max;
//     }
    
//     return total;
// }

// console.log(getNumbers(20, 30));




// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a === "number" && typeof b === "number") {  
//         if (a > b) {
//             return b;
//         } else {
//             return a;
//         }
//     } else {
//         return `Not a number!`;
//     }
// }

// console.log(min(32, 2));


// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// function isAdult(age) {
    
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('Ви точно хочете продовжити?'); 
//     }
// }

// console.log(isAdult(12));


// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//     for (let index = 1; index <= num; index++) {
//         if (index % 3 === 0 && index % 5 === 0 ) {
//             console.log('fizzBuzz');
//         } else if (index % 3 === 0) {
//             console.log('fizz');
//         } else if (index % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(index);
//         }
//     }
// }

// console.log(fizzBuzz(122));


// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.

// function extractAfterSubstring(str, substr) {

//     const indexStr = str.indexOf(substr);

//     if (indexStr >= 0) {
//         return str.slice(indexStr + substr.length);
//     } else {
//         return `""`;
//     }
// }

// // Приклади використання:
// console.log(extractAfterSubstring('Hello, world!', 'world')) // "!"
// console.log(extractAfterSubstring('Hello, world!', 'JavaScript')) // ""
// console.log(extractAfterSubstring('Hello, world!', 'Hello')) // ", world!"

// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

// function removeCharacter(str, char) {

//     let index = str;

//     while (index.includes(char)) {
//         index = index.replace(char, "");
//     }
//     return index;
// }

// Приклади використання:
// console.log(removeCharacter('Hello, world!', 'o')) // "Hell, wrld!"
// console.log(removeCharacter('JavaScript', 'a')) // "JvScript"
// console.log(removeCharacter('12345', '3')) // "1245"


//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = 'abcde' // тестовий рядок 1
// const stringSecond = 'bcde' // тестовий рядок 2

// function str(strings) {
//     if (strings.startsWith("a")) {
//         return `Так`;
//     } else {
//         return `Hі`;
//     }
// }

// console.log(str(stringSecond));
// console.log(str(string));


// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

// function countOccurrences(str, char) {
//     let count = 0; 

//     for (let index = 0; index < str.length; index++) {
//         if (str[index] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// Приклади використання:
// console.log(countOccurrences('Hello, world!', 'o')) // 2
// console.log(countOccurrences('JavaScript', 'a')) // 2
// console.log(countOccurrences('12345', '3')) // 1

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// for (let product of products) {
//   if (product.name === productName) {
//     return product.price;
//   } else {
//       return null;
//   }
// }
  
// }

// console.log(getProductPrice("Radar"));


