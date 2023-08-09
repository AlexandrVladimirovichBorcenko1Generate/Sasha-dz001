function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  const number = 5;
  const factorial = factorialRecursive(number);
  console.log(`Факториал ${number} равен ${factorial}`);

  const text = "My name 457 is Alex";
const nonDigits = text.replace(/\d/g, '');
console.log(nonDigits);

const texT = "Hello\tWorld\nTest";
const whitespaceChars = texT.match(/\s/g);
console.log(whitespaceChars);

function countChar(str, char) {
    const charRegex = new RegExp(char, 'g');
    const matches = str.match(charRegex);
    return matches ? matches.length : 0;
  }
  
  const inputString = 'loremipsumdolor';
  const charToCount = 'o';
  const count = countChar(inputString, charToCount);
  console.log(`Символ '${charToCount}' встречается ${count} раз(а)`);
  