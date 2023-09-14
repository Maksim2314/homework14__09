// //Решить следующие задачи:
// for(i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// for (i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Напишите цикл for, который выводит в консоль  все числа от 100 до 10

// for (i = 100; i >= 10; i--) {
//     console.log(i)
// }


// Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6]
// for (i = 0; i < numbers.length; i = i + 1) {
//     console.log(numbers[i])
// }


// // Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
// const numbers = [3, 5, 11, 2, 8, 1, 6]
// const numbers_squared = []
// for(i = 0; i < numbers.length; i = i + 1) {
//         const result = Math.pow(numbers[i], 2) 
//         numbers_squared.push(result)
//     }
// console.log(numbers_squared)
// // Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

// let last_elem 
// last_elem = numbers_squared[6] 
// console.log(last_elem)

// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
first_name: 'Maksim', 
last_name: 'Kulikov', 
age: 18, 
salary: 500
}

console.log(" моё имя " + user.first_name + ", а моя фамилия " + user.last_name + ", мой возраст " + user.age + ", а моя зарплата " + user.salary) 
