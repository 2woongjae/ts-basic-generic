interface Person8 {
  name: string;
  age: number;
}

const person8: Person8 = {
  name: 'Mark',
  age: 36
};

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

setProperty(person8, 'name', 'Anna');
// setProperty(person8, 'name', 24);
console.log(getProperty(person8, 'name'));
// console.log(getProperty(person8, 'fullname'));
