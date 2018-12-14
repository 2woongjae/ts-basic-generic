function helloArray<T>(messages: T[]): T {
  return messages[0];
}

function helloTuple<T, K>(messages: [T, K]): T {
  return messages[0];
}

console.log(helloArray(['Hello', 'World']));
console.log(helloArray(['Hello', 1]));
console.log(helloTuple(['Hello', 'World']));
console.log(helloTuple(['Hello', 1]));
// console.log(helloTuple(['Hello', 'world', 1])); // Error
