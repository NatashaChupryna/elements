

// Задачка з кодеворс
// Знайти і вивести в консоль середні елементи строки
function getMiddle(s)
{
    return s.length % 2 === 0 ?
        s.slice(s.length / 2 - 1, s.length / 2 + 1 ) :
        s.slice(s.length / 2, s.length / 2 + 1);
  
}
console.log(getMiddle("Nata"))




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