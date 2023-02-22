
interface List {
  id: number,
  name: string,
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => console.log(value.id, value.name))
}

let result = {
  data: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ]
}

render(result);

interface StringArray {
  [index: number]: string,
}

let chars: StringArray = ['A', 'B'];

interface Names {
  [x: string]: string;
  [z: number]: string
}

let interfaceAdd1: (x:number, y:number) => number;
interface interfaceAdd2 {
  (x:number, y:number): number;
}

type interfaceAdd3 = (x: number, y: number) => number;

let add1:interfaceAdd3 = (x, y) => x + y;


interface Lib {
  (): void;
  version: string;
  doSomeThing(): void;
}

function getLib() {
  let lib: Lib  = (() => {}) as Lib;
  lib.version = '1.0.0';
  lib.doSomeThing = () => {}
  return lib;
}
let lib1 = getLib();
lib1();
console.log(lib1.version);

let lib2 = getLib();
lib2.doSomeThing();
