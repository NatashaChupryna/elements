

// Задачки з кодеворс
// Знайти і вивести в консоль середні елементи строки
// function getMiddle(s)
// {
//     return s.length % 2 === 0 ?
//         s.slice(s.length / 2 - 1, s.length / 2 + 1 ) :
//         s.slice(s.length / 2, s.length / 2 + 1);
  
// }
// console.log(getMiddle("Nata"))




// Приймає число і сортує його в порядку спадання
// function descendingOrder(n){
//     let newN = Number(String(n).split('').sort((a,b) => b-a).join(''))
//     return newN
// }
// console.log(descendingOrder(12345))



// Вертає парне число з масива непарних і навпаки, 
function findOutlier(integers){
    let newArr = [];

    for (const number of integers) {
         if (i % 2 === 0) {
           return newArr.push(i)
        };
        return newArr
    }
//     for (let i = 0; i < integers.length; i += 1) {
//          if (i % 2 === 0) {
//             newArr.push(i)
//         };

//         return newArr
// }
    }

console.log(findOutlier([2,6,8,10,3])) 

// 2)
const numbers = [14, 1, 10, 12, 0, 28, 35, 44, 26]
const secondNumbers = 5
const both = [...numbers, secondNumbers]
// console.log(both)
// console.log(both.join(' '))




// 3)
const planets = [["Земля"], "Марс", ["Венера"], "Юпітер"];

// const other = planets.flatMap(2)
// console.log(other)