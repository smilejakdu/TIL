### Promise

```javascript
p 라는 프로미스 객체는 1000ms 후에 fulfiled 됩니다.

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve(); // fulfiled
    } , 1000)
})
```

```javascript
p 라는 프로미스 객체가 fulfilled 되는 시점에 , p.then 안에 설정한 callback 함수가 실행됩니다.

const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve();
    } ,1000);
});

p.then(/*callback*/);
```

```javascript
p.then 으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback 이 실행됩니다.

const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resoleve(); // fulfilled
    } , 1000)
});

p.then(()=>{
    console.log("1000ms 후에 fulfilled 됩니다..");
});


```

```javascript
/* 
then 을 설정하는 시점을 정확히 하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에 then 을 설정합니다.
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve(); /* fulfilled */
    }, 1000);
  });
}

p().then(() => {
  console.log("1000ms 후에 fulfilled 됩니다.");
});
```

```javascript
/* 
마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행됩니다.
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(); /* rejected */
    }, 1000);
  });
}

p()
  .then(() => {
    console.log("1000ms 후에 fulfilled 됩니다.");
  })
  .catch(() => {
    console.log("1000ms 후에 rejected 됩니다.");
  });
```

```javascript
/* 
executor 의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있습니다. 
	resolve('hello');
	then((message) => { ... })
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log("1000ms 후에 fulfilled 됩니다.", message);
  })
  .catch(() => {
    console.log("1000ms 후에 rejected 됩니다.");
  });
```

```javascript
/* 
마찬가지로, executor 의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있습니다. 
	reject('error');
	then((reason) => { ... })
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log("1000ms 후에 fulfilled 됩니다.", message);
  })
  .catch((reason) => {
    console.log("1000ms 후에 rejected 됩니다.", reason);
  });
```

```javascript
/* 
보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만들어 보냅니다. 
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(new Error("bad"));
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log("1000ms 후에 fulfilled 됩니다.", message);
  })
  .catch((error) => {
    console.log("1000ms 후에 rejected 됩니다.", error);
  });
```

```javascript
/* 
fulfileed 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally() 를 설정하고, 함수를 인자로 넣습니다. 
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      reject(new Error("bad"));
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log("1000ms 후에 fulfilled 됩니다.", message);
  })
  .catch((error) => {
    console.log("1000ms 후에 rejected 됩니다.", error);
  })
  .finally(() => {
    console.log("end");
  });
```

```javascript
/*
보통 비동기 작업을 할때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다. 
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다. 

callback 헬이라는 얘기가 여기서 나오게 된다.
결과 자체는 문제가 없을것이다.
*/

function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

c(() => {
  console.log("1000ms 후에 callback 함수가 실행됩니다.");
});

c(() => {
  c(() => {
    c(() => {
      console.log("3000ms 후에 callback 함수가 실행됩니다.");
    });
  });
});
```

```javascript
/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
then 에 함수를 넣는 여러 방법을 확인해봅시다.
*/

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p().then(() => {
    then p();
})
.then(() => p())
.then(p)
.then(() => {
    console.log('4000ms 후에 fulfiled 됩니다');
});
```

```javascript
/* 
value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다. 
	value 가 프로미스 객체면, resolve 된 then 메서드를 실행합니다. 
	value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행합니다. 
*/

Promise.resolve(/* value */);
Promise.resolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  })
).then((data) => {
  console.log(
    "프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됩니다.",
    data
  );
});

Promise.resolve("bar").then((data) => {
  console.log("then 메소드가 없는 경우,  fulfilled 됩니다.", data);
});
```

```javascript
/*
Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경됩니다. 
value 는 주로 에러객체가 된다고 생각하면 된다.
then 을 넣는다고 크게 의미가 없고 바로 catch 쪽으로 넘어가게 된다.
*/

Promise.reject(/* value */);

Promise.reject(new Error("reason"))
  .then((error) => {})
  .catch((error) => {
    console.log(error);
  });
```

```javascript
/* 
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all 을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다. 
then 의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다. 
*/

// Promise.all([프로미스 객체들]);

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
  console.log("모두 fulfilled 된 이후에 실행됩니다.", messages);
});
```

```javascript
/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race 를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다. 
then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려줍니다. 
*/
// Promise.race([프로미스 객체들]);

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

Promise.race([p(1000), p(2000), p(3000)]).then((message) => {
  console.log("가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.", message);
});
```
