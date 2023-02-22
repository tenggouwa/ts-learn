let bool: boolean = false;
let num: number = 123;
let str: string = 'str';

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 1, 2, 3];
let arr3: Array<number|string> = [0, '1'];

let tuple1: [number, string] = [0, '1'];

let add = (x:number, y:number) => x + y;
let compute:(x:number, y:number) => number;
compute = (a, b) => a + b;

let obj:{x:number, y:number} = {x: 1, y: 2};
obj.x = 3;

let s1: symbol = Symbol();
let s2 = Symbol();

let un:undefined = void 0 || undefined;
let nu:null = null;
num = undefined; // strictNullChecks: false

let noReturn = () => {};
let noReturn1: () => void

let any;
any = 1;
any = [112];

let error = () => {
  throw new Error('error');
}

let endless = () => {
  // while (true) {
  // }
}