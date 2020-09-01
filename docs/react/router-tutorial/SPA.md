# SPA

spa 는 single Page Application(싱글 페이지 애플리케이션) 입니다.

말 그대로 한개의 페이지로 이루어진 애플리케이션이라는 의미 입니다.

### spa 의 단점

1. 앱의 규모가 커지면 자바스크립트 파일이 너무 커진다.
2. 리액트 라우터처럼 브라우저에서 자바스크립트를 사용하여 라우팅을 관리하는 것은 자바스브립트를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집해 가지 못한다는단점이 있다.

# example start

npx create-react-app router-tutorial

cd router-tutorial
yarn add react-router-dom

```javascript
// index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
```

### page

```javascript
// home
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <p>홈 , 그 페이지는 가장 먼저 보여지는 페이지</p>
    </div>
  );
};

export default Home;
```

```javascript
// About
import React from "react";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </div>
  );
};

export default About;
```

```javascript
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} exact={true} />
    </div>
  );
}

export default App;
```

### Link 컴포넌트로 사용하기

Link 컴포넌트는 클릭으로 통해 다른 주소로 이동시켜 주는 컴포넌트 입니다. a 태그와 비슷한 기능을 한다고 생각하시면 될것같습니다.

```javascript
import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} exact={true} />
    </div>
  );
}

export default App;
```

### Route 하나에 여러 개의 path 설정하기

Route 하나에 여러 개의 path 를 지정하는 것은 최신 버전의 리액트 라우터 v5 부터 적용된 기능입니다.

```javascript
import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
```
