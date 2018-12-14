type HelloFunctionGeneric = <T>(message: T) => T;

const helloFunction: HelloFunctionGeneric = <T>(message: T): T => {
  return message;
};

console.log(helloFunction<string>('Hello').length);
