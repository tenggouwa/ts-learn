function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<string[]>(['a', 'b']);
log(['a', 'b']);

type Log = <T>(value: T) => T;
let myLog: Log = log;

interface Log1 {
  <T>(value: T): T
}
interface Log2<T = string> {
  (value: T): T
}
let myLog1: Log2 = log
myLog1('1');