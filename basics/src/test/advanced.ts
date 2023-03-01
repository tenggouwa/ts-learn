// 映射类型
interface Obj {
  a: string,
  b: string,
  c: string,
}

type ReadOnlyObj = Readonly<Obj>;
type PartialObj = Partial<Obj>;
type PickObj = Pick<Obj, 'a' | 'b'>;
type RecordObj = Record<'x' | 'y', Obj>;

type test = Readonly<Partial<Pick<Obj, 'a' | 'b'>>>


// 条件类型
// T extends U ? X : Y
type TypeName<T> =
  T extends string ? 'string':
  T extends number ? 'number':
  T extends boolean ? 'boolean':
  T extends undefined ? 'undefined':
  T extends Function ? 'Function':
  'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// A extends U ? X : Y | B extends U ? X : Y
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>

// Exclude // Diff
// Extract<T, U> // 与diff相反
// NonNullable // NotNull
// ReturnType<T> 
type T7 = ReturnType<() => string>