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
// awiat is only valid in async function
// 이라고 되어있습니다.
```

```javascript
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// 위의 에러가 났기때문에
// async function 안에 await 를 감싸줍니다.
(async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행된다`);
})();
```

```javascript
// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch 를 이용한다.

function p(ms) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}
// 앞에서 사용했던 p 함수를 계속 사용합니다.

(async function main() {
  try {
    const ms = await p(1000);
  } catch (error) {
    console.log(error);
  }
})();

// 위의함수가 정상적으로 끝났다는것은 resolve 됬다는것입니다.
// 근데 우리가 resolve 말고 reject 를 합니다.
```

```javascript
// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  return "Usong";
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();
```

```javascript
// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject(new Error('reason'));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return "Usong: " + ms;
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();
```

```javascript
// error의 전파

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return "Usong: " + ms;
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();
```

```javascript
// finally

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return "Usong: " + ms;
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
})();
```

```javascript
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

// Promise

p(1000)
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
    console.log("300 ms 후에 실행");
  });

// async await

(async function main() {
  await p(1000);
  await p(1000);
  await p(1000);
  console.log("300 ms 후에 실행");
})();
```

```javascript
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

// Promise.all
(async function main() {
  const results = await Promise.all([p(1000), p(2000), p(3000)]);
  console.log(results);
})();

// Promise.race
(async function main() {
  const result = await Promise.race([p(1000), p(2000), p(3000)]);
  console.log(result);
})();
```
