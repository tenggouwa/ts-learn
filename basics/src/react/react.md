## React常用ts写法
### 声明函数组件 `React.FC<props>`
```jsx
interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}
const Hello: React.FC<Greeting> = ({ name, firstName, lastName }) => <Button>Hello {name}</Button>
```

### 声明类组件 `Component<Greeting, State>`
```jsx
interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}
interface State { count: number }
class HelloClass extends Component<Greeting, State> {
  state: State = { count: 0 }
  static defaultProps = {
    firstName: '',
    lastName: '',
  }
  render () {
    return <Button onClick={this.handleClick}>Hello {this.props.name}</Button>
  }
}
```

### 声明高阶函数 `HelloHoc<P>(WrappedComponent: React.ComponentType<P>)`
```jsx
interface Loading { loading: boolean }
function HelloHoc<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props} = this.props;
      return loading ? <div>Loading...<div/> : <WrappedComponent {...props as P} />
    }
  }
}
```
### 事件处理 `e: React.FormEvent<P>`
```jsx
// input
const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  console.log(e.currentTarget.value)
}
```
### 类型保护-防止未catch得错误
```tsx
getTotal = () => {
  let total: number;
  if (typeof this.state.list !== undefined) {
    total = this.state.list.length;
  } else {
    total = 0;
  }
  return (
  // <div>共 {this.state.list.length} 条数据</div>
    <div>共 {total} 条数据</div>
  )
}
```