/**
 * 생성자를 통해서 프로미스 객체를 만들 수 있습니다.
 * 생성자의 인자로 executor 라는 함수를 이용합니다.
 */

new Promise(/* executor */);

/**
  executor 함수는 resolve 와 reject 를 인자로 가집니다.
  (resolve , reject)=>{...}
  resolve 와 reject 는 함수입니다.
  resolve ()  , reject()
 */

new Promise(/* executor*/ (resolve, reject) => {});

/*
 생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다
 */

new Promise((resolve, reject) => {}); // pending

/* 
executor 함수 인자 중 하나인 resolve 함수를 실행하면 , fulfilled (이행) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
  //
  // ...
  resolve(); // fulfilled 이행된 이라는 상태로 돌입하게 됩니다.
});

/*
executor 함수 인자 중 하나인 reject 함수를 실행하면 , rejected (거부) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
  reject(); // rejected 상태가 됩니다.
});

/* 
p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다.
*/
