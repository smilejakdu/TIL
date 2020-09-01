# map

리액트환경에선 for 반복문을 이용해 HTML 을 줄일 수도 있습니다.
그냥 반복문 적고 안에 HTML 담으시면 끝입니다.
하지만 JSX 코딩하던 중간중간에 for 반복문을 직접 쓸 수는 없고 특별한 방법이 좀 필요합니다.

### 자바스크립트 map 함수 쓰는법

```javascript
var 어레이 = [2, 3, 4];
어레이.map(function (a) {
  return a * 10;
});
```

```javascript
var 어레이 = [2, 3, 4];
var newArray = 어레이.map(function (a) {
  return a * 10;
});
```

### JSX 안에서 map 으로 반복문을 돌리고 싶을때

```javascript
function App (){
  return (
    <div>
      HTML 잔뜩있는 곳
      ...
      { 글제목.map(function(a){
        return (
        <div className="list">
          <h3  onClick={ ()=>{ 따봉변경(따봉+1) } }>{ a }</h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
      }) }
    </div>
  )
}
```

### 일반 for 반복문을 사용하고 싶다면 ??

그냥 따로 함수를 만들어서 사용해야한다.

1. 따로 일반 함수를 만들고,
2. 함수안에 HTML 을 담을 array 자료를 하나 생성합니다.
3. 함수안에서 for 반복문을 이용해 array 내에 HTML 을 추가해줍니다.
4. 완성된 array 를 return 해줍니다.
5. 그리고 함수를 원하는 곳에 {함수명()} 데이터바인딩 해주시면 됩니다.

```javascript
function App() {
  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }
  return <div>HTML 잔뜩있는 곳{반복된UI()}</div>;
}
```
