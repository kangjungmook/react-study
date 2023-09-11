# 3일차

## props
- properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음

### 1. JSX 내부에서 props 렌더링
- props 값은 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있음
```jsx
// MyComponent.js
import React from 'react';
const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
export default MyComponent;
```

### 2. 컴포넌트를 사용할 때 props 값 지정하기
```jsx
// App.js
import React from 'react';
import MyComponent from './MyComponent';
const App = () => {
  return <MyComponent name="React"/>;
};
export default App;
```

### 3. props 기본값 설정 : defaultProps
```jsx
// MyComponent.js
import React from 'react';
const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
MyComponent.defaultProps = {
    name: '기본 이름'
};
export default MyComponent;
```

### 4. 태그 사이의 내용을 보여 주는 children
- `children` : 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 props
```jsx
// App.js
import React from 'react';
import MyComponent from './MyComponent';
const App = () => {
  return <MyComponent>리액트</MyComponent>;
};
export default App;
```
```jsx
// MyComponent.js
import React from 'react';
const MyComponent = props => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name}입니다 <br/>
            children 값은 {props.children} 입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본 이름'
};
export default MyComponent;
```

### 5. 비구조화 할당 문법을 통해 props 내부 값 추출하기
- `비구조화 할당(destructuring assignment)` : 객체에서 값을 추출하는 문법으로 구조 분해 문법이라고도 부름
    + 함수의 파라미터 부분에서도 사용할 수 있음. 만약 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용
```jsx
// MyComponent.js
import React from 'react';
// const MyComponent = props => {
    // const {name, children} = props;
const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다 <br/>
            children 값은 {children} 입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    name: '기본 이름'
};
export default MyComponent;
```
