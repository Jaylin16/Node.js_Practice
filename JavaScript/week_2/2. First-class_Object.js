// 일급 객체로서의 함수

// 1. 변수에 함수를 할당할 수 있다.
// 함수가 하나의 객체이자 값으로 취급된다.
// 변수에 할당된 함수는 나중에 사용할 수 있다.

const sayWorld = function () {
  console.log("Hello, World!");
};

// 2. 함수를 인자로 다른 함수에 전달 가능하다.
// 2-1. 콜백함수: 매개변수로 쓰이는 함수
// 2-2. 고차함수: 함수를 인자로 받거나 return하는 함수

function callWorld(func) {
  func();
}

callWorld(sayWorld);

// // 아래는 함수를 반환하는 고차 함수의 예시
function counter(num) {
  return function (x) {
    return x + num;
  };
}

const createNum = counter(5);
console.log(createNum(10));

/*  순서대로 풀어보자!
//  Step.1
function counter(5) {
  return function (x) {
    return x + 5;
  };
}

//  Step.2
const createNum = function (x) {
  return x + 5;
};

//  Step.3
const createNum = function (10) {
  return 10 + 5;
}; */

// 3. 객체 내에서도 함수를 추가할 수 있다.

const cat = {
  type: "cat",
  age: 2,
  isJoined: false,
  createNewPet: function () {
    console.log("새로운 동물" + this.type + "이 추가되었습니다.");
    console.log(`새로운 동물 ${this.type}의 나이는 ${this.age}살 입니다.`);
  },
  checkJoin: () => {
    if (cat.isJoined === false) {
      console.log(`${cat.type}은 신규 회원입니다.`);
    } else {
      console.log(`${cat.type}은 기존 회원입니다.`);
    }
  },

  //   !! 화살표 함수는 this를 바인딩 하지 않는다 !!
  //   checkJoin: () => {
  //     if (this.isJoined === false) {
  //       console.log(`${this.type}은 신규 회원입니다.`);
  //     } else {
  //       console.log(`${this.type}은 기존 회원입니다.`);
  //     }
  //   },
};

cat.createNewPet();
cat.checkJoin();

// 4. 배열의 요소로 함수를 할당할 수 있다.

const arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(`더하기 실행 ==> ${arr[0](2, 1)}`);
console.log(`빼기 실행 ==> ${arr[1](2, 1)}`);

// 연습해보기
function sayName(type) {
  return function (name) {
    return `${name} 는 ${type}`;
  };
}

function sayAll(x, y) {
  return `${x} 이고 ${y} 이에요.`;
}

const sayNameWithDog = sayName("dog");
const sayNameWithCat = sayName("cat");

console.log(sayNameWithDog("Jelly"));
console.log(sayNameWithCat("Coke"));

const result = sayAll(sayNameWithDog("Jelly"), sayNameWithCat("Coke"));
console.log(result);
