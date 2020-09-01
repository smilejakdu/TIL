# props

```javascript
unction App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      ...
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

1. <Model 전송할이름={state명}> 이렇게 원하는 state 를 적어주시면 됩니다.
2. 그리고 function Modal(props){} 이렇게 Modal 함수 소괄호 내에 파라미터를 하나 추가해줍니다.

3. 그럼 이제 props. 전송할 이름 이렇게 쓰시면 전송된 props 를 사용가능합니다.
