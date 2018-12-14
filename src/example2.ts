function helloBasic<T>(message: T): T {
  return message;
}

console.log(helloBasic<string>('Mark'));
const age = helloBasic(36);
// helloBasic<number>('36'); (X)
