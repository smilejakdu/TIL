# props2

h3 글을 누르면 뭐 변해야하는데
개발하면 ㅇ리단 복잡하니까 .
button 을 만드는데 각 버튼을 누르면 각 다른 제목의 모달 제목이 떠야합니다.

```javascript
function App() {
  return (
    <div>
      ...
      <button onClick={() => {}}>버튼1</button>
      <button onClick={() => {}}>버튼2</button>
      <button onClick={() => {}}>버튼3</button>
      모달 어쩌구 있는곳 <Modal></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[방금누른글번호]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

1. button 3개를 만들어 줍니다.
2. 각 버튼을 누르면 글 제목이 수정되어야 하기때문에 ..Modal이라는 컴포넌트안에 제목부분을 **props.글제목[방금누른글번호]** 라구 수정했습니다.

방금 누른 글 번호라는 변수는 어디에서 만들까..

```javascript
function App() {
  let [누른제목, 누른제목변경] = useState(0);
  return (
    <div>
      ...
      <button onClick={() => {}}>버튼1</button>
      <button onClick={() => {}}>버튼2</button>
      <button onClick={() => {}}>버튼3</button>
      모달 어쩌구 있는곳 <Modal></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

1.  App 안에 누른제목이라는 이름의 state 를 만들고 기본값을 0 으로 주었습니다.

2.  그리고 모달창에 props.글제목[누른제목] 이라고 사용했습니다.

### 부모가 가진 가진 state 를 쓰려면 props 로 전달하고 사용해야 합니다.

```javascript
function App() {
  let [누른제목, 누른제목변경] = useState(0);
  return (
    <div>
      ...
      <button onClick={() => {}}>버튼1</button>
      <button onClick={() => {}}>버튼2</button>
      <button onClick={() => {}}>버튼3</button>
      모달 어쩌구 있는곳 <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

### 버턴을 눌렀을 때 state 를 변경하려면 ??

0 번째 버튼을 누르면 누른제목이라는 state 가 0이 되어야합니다.
1 번째 버튼을 누르면 누른제목이라는 state 가 1이 되어야 합니다.

state 변경함수를 사용해야합니다.

```javascript
function App() {
  let [누른제목, 누른제목변경] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          누른제목변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른제목변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른제목변경(2);
        }}
      >
        버튼3
      </button>
    </div>
  );
}
```

```javascript
function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  return (
    <div>
      ...
      <Modal 글제목={글제목}></Modal>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 {props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

# 글 제목부분에 가서 누르면 state 가 변경

```javascript

function App (){
  return (
    <div>
      ...
      { 글제목.map(function(a){
        return (
        <div className="list">
          <h3 onClick={ ()=>{ 누른제목변경(0) } }>{ a } <span>👍</span> </h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
      }) }
    </div>
  )
}
```

- 0 을 하드코딩하지말고 ,
  \_\_누른 제목변경(반복문 돌때마다 차례레 0 , 1 , 2 가 되는 변수)

이걸 집어넣으면 됩니다.

map 반복문을 쓸 때 i라는 파라미터를 뒤에 추가해주시면 됩니다.

두번째 파라미터는 바로 반복문이 돌면서 0,1,2,3 … 이렇게 하나씩 증가하는 정수를 뜻합니다.

전문 개발용어로 enumerate한다 라고 하는데 그건 알필요가 없고

그냥 i 저렇게 써주시면 0,1,2,3,4… 이런 변수입니다.

그래서 그걸 이용해서 누른제목변경(i) 이렇게 입력한 것입니다.

기능개발 끝!
