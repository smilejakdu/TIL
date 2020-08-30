# react start

react tutorial 를 이제 다시 복습한다 생각하고 공부할 생각입니다.
https://react.vlpt.us/

### 리액트는 어쩌다가 만들어 졌는가 ?

javascript 를 사용한 DOM 변형
DOM 를 상용할려면 selector 를 이용해서 특정 DOM 선택한뒤에 이벤트를 발생해야한다.

```javascript
increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};
```

관리해야할 상태와 이벤트가 다양해지기 때문에 코드가 길어지게 되고 복잡하게 된다.

### 리액트 개발팀의 새로운 발상

실제DOM 과 가상DOM을 구분을 해서 바뀐부분만 체크해서 바뀐부분을 바꿔버린다.

그래서 UI 를 어떻게 업데이트 할지 보단
UI 를 어떻게 보여줄지에 집중하게 된다.

### react 셀프 클로징 , fragment

```javascript
// Fragment
<>
  <div>두개 이상의</div>
  <p>태그는 감싸자</p>
</>
```

```javascript
const name = "test";

return <div>javascript {name}</div>;
```

```javascript
// 셀프클로징
<Hello />
```

# Props

```javascript
import React from "react";
import Hello from "./Hello";
import "./App.css";

const App = () => {
  return (
    <>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </>
  );
};

export default App;
```

```javascript
import React from "react";

const Hello = ({ color, name }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      안녕하세요{name}
    </div>
  );
};

// Hello.defaultProps 는 name props 전달하는것이 없다면 ,
// default 로 이름없음이 찍히게 됩니다.

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
```