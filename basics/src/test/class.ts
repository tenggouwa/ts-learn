class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string;
  // name: string = 'dog'; // 需要赋初始值
  run() { }
  // 私有
  private pri(){};
  // 不能被实例化，可以被继承
  protected pro(){};
  // 只读属性
  readonly legs: number = 4;
  // 静态成员 只能通过父类调用 不能被子类调用 也可以被继承
  static food: string = 'bones';
}

console.log(Dog.prototype);
let dog = new Dog('wangwang');
// dog.pri();
console.log(dog);

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
    // this.pri()
    this.pro();
  }
  color: string;
}

