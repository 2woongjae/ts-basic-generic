class Person<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person('Mark');
// new Person<string>(35); (X)
