import React from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

// 区别
// 1.在函数参数中隐式声明children属性
const Hello: React.FC<Greeting> = ({ name, firstName, lastName }) => {
  return (
    <div>
      <Button>Hello {name}</Button>
      {props.children}
    </div>
  )
}


export default Hello;