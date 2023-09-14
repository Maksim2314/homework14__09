//3 задача - вернуть только строчгные элементы

// const max = {
//     someArr: ["Max", "maksim", 1, 2, 3]
// }

// function fn(myName) {
//     for(i = 0; i < myName.length; i = i + 1) {
//         if(myName[i] === String(myName[i]) )
//         console.log(myName[i])
//     }
// }

// fn(max.someArr)

// 2 задача: вернуть сумму всех элементов массива числовых
// const array = [36, 33, 22, 1234, 2414, 1, "maksim", "max", "Podolsk", "Moscow", "Russia", 5, 10, 12]

// function fn(all) {
//     let sum = 0 
//     for(i = 0; i <= all.length; i = i + 1) {
//         if(all[i] === Number(all[i])) {
//             sum += all[i]
//         }
//     }
//     console.log(sum)
// }

// fn(array)

// 3.Создать массив, занеси туда 10 цифр от 1 до 10 и 5 строк
// Необходимо создать функцию, что вернет нам с помощью цикла только те элементы чисел, что кратны 3

// const array = [36, 33, 22, 1234, 2414, 1, 5, "maksim"]

// function fn(number) {
//     for(i = 0; i < number.length; i = i + 1) {
//         if(number[i] % 3 === 0)
//         console.log(number[i])
//     }
// }

// fn(array)

// 4. написать массив infoAboutMe, где нужно проверить является ли первый элемент массива моим именем, если является, то вытащить все строчные элементы
// если нет то все Number элементы

    const infoAboutMe = ["Maksim", "Maks", 1, 2, 3] 

function fn(myName) {
    for(let i = 0; i < myName.length; i = i + 1) {
        if(myName[0] === "Maksim") {
            if(myName[i] === String(myName[i])) {
                console.log(myName[i])
            }
        } 
        else {
        if(myName[i] === Number(myName[i])) {
            console.log(myName[i])
            } 
        }
    }
}

fn(infoAboutMe)

