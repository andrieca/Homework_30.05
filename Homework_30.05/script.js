
// Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке.
// Пример строки: 'uncopyrightable'. Ожидаемый результат: 'abceghilnoprtuy'
// function alphabetorder(str) {
//    // Your code
// }
// document.writeln(alphabetorder("uncopyrightable")); 



// LEVEL 1
function alphabetOrder(str){
    return str.split('').sort().join('');
  }
document.writeln(alphabetOrder("gjrnas"));
  
  
// Напишите функцию JavaScript, которая принимает строку в качестве параметра и находит самое длинное слово в строке.
// function findlongestword(str) {
//  // Your code
// }
// document.writeln(findlongestword('Web Development In Telran'));



function findLongestWord(str){
    return str.split(' ').reduce((a, b) => b.length > a.length ? b : a);
  
  }
  document.writeln(findLongestWord('Wen Development In Teleran'));