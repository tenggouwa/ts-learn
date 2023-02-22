import { number } from 'prop-types';
// 声明函数类型的四种方式
function functionAdd1(x: number, y:number) {
  return x + y;
}

let functionAdd2: (x:number, y:number) => number;

type functionAdd3 = (x:number, y:number) => number;

interface functionAdd4 {
  (x:number, y: number): number;
}

// 函数可选参数
function functionAdd5(x: number, y?:number) {
  return y ? x + y : x;
}
functionAdd5(1)

// 函数默认参数
function functionAdd6(x: number, y=0, z: number, q = 1) {
  return x + y + z + q;
}
functionAdd6(1, undefined, 3);

// 函数其它参数
function functionAdd7(x: number, ...rest: number[]) {
  return x + rest.reduce((a, b) => a + b);
}
functionAdd7(1, 2, 3, 4, 5);

// 函数重载
function functionAdd8(...rest: number[]): number;
function functionAdd8(...rest: string[]): string;
function functionAdd8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((a, b) => a + b);
  }
}

functionAdd8(1, 2, 3)
functionAdd8('a', 'b', 'c')



