Link : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/statements/async_function

- 어떤 비동기 처리가 로직의 아래로 흘러가도록 표현 가능하다는 것이 가장 큰 장점
- async function 함수이름(){} const 함수이름 = async() =>{}

# 언제 사용하는걸까 ??

// Promise 객체 리턴하는 함수

```javascript
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}
```

// Promise 객체를 이용해서 비동기 로직을 수행할때

```javascript
p(1000).then((ms) => {
  console.log(`${ms} ms 후에 실행된다.`);
});
```

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

```javascript
const ms = await p(1000);
console.log(`${ms} ms 후에 실행된다.`);
// 이상태로 실행하면 에러가 발생하게 된다.
```

```javascript
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}
(async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행된다`);
})();
```
