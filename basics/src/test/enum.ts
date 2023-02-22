// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
}

// 字符串枚举
enum Message {
  Success = '成功',
  Error = '失败'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1+3,
  d = Math.random(),
  e = '123'.length,
}

// 枚举常量
const enum Month {
  Jan,
  Feb,
  Mar
}

// 枚举类型