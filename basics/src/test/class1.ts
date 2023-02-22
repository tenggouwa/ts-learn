abstract class Animal {
  eat() {
    console.log('eat');
  }
  abstract sleep():void;
}
// let animal = new Animal();
class Dog1  extends Animal {
  constructor(name: string) {
    super();
    this.name = name
  }
  name: string;
  // name: string = 'dog'; // 需要赋初始值
  run() { };
  sleep() {
    console.log('sleep');
    
  }
}
let dog1 = new Dog1('wang');
dog1.eat();

// 多态
class Cat extends Animal {
  sleep(): void {
    console.log('cat， sleep');
  }
}
let cat = new Cat();
let animals: Animal[] = [dog1, cat];

animals.forEach(i => {
  i.sleep();
})

// 链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().next().step1().next().step2();

