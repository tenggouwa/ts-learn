import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  // 自动推断
  const [count, setCount] = useState(0);
  // 联合类型的约束
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setText('超过5次')
    }
  }, [count])
  

  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}{text}</p>
      <Button onClick={handleClick}>{props.name}</Button>
    </div>
  )

}


export default HelloHooks;