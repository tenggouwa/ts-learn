class TClassLog<T> {
  run(value:T) {
    console.log(value);
    return value;
  }
}
let tclassLog = new TClassLog<number>();
tclassLog.run(1);

let tclassLogAny = new TClassLog();
tclassLogAny.run({
  abc: '123',
})

// -------泛型约束---------

interface Length {
  length: number
}
function TClassLog1<T extends Length>(value: T): T {
  console.log(value);
  return value
}