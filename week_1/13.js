// // ES6 문법

// // 1. 구조분해할당 : destructuring

// // 1-1. 배열인 경우
// let [v1, v2] = [1, 2];
// console.log("v1==>", v1);
// console.log("v2==>", v2);

// let arr = [1, 2, 3];
// let [a, b, c] = arr;

// console.log("a==>", a);
// console.log("b==>", b);
// console.log("c==>", c);

// let [e, f, g, h = 4] = arr;
// console.log("e==>", e);
// console.log("f==>", f);
// console.log("g==>", g);
// console.log("h==>", h); // 초기값이 4로 세팅됨. 만약 해당 자리에 다른 값이 있다면 그 값을 우선함.

// // 1-2. 객체인 경우
// let user = {
//   name: "이름",
//   age: "나이",
// };

// let { name, age } = user;

// console.log("name ==>", name);
// console.log("age ==>", age);

// // 새로운 이름으로 할당
// let { name: newName, age: newAge } = user;

// console.log("newName ==>", newName);
// console.log("newAge ==>", newAge);

// let user2 = {
//   name2: "이름2",
//   age2: "나이2",
// };

// let { name2, age2, gender = 2 } = user2;
// console.log("name2 ==>", name2);
// console.log("age2 ==>", age2);
// console.log("gender2 ==>", gender);

// // 2. 단축 속성명 : property shorthand
// // key와 value가 동일한 단어일 때 생략 가능.
// const fruit = "과일";
// const market = "온라인";

// const obj = { fruit, market };
// const obj2 = { fruit: fruit, market: market };

// console.log(obj);
// console.log(obj2);

// // 3. 전개 구문 = spread operator

// // 3-1. 배열인 경우
// let arr2 = [1, 2, 3];

// let newArr = [...arr2, 4];

// console.log(arr2);
// console.log(...arr2);
// console.log(newArr);

// // 3-2. 객체인 경우
// let cat = {
//   sort: "종류",
//   age: "나이",
// };

// let cat2 = { ...cat };

// console.log(cat);
// console.log(cat2);

// // 4. 나머지 매개변수(rest parameter)
// function example(a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(args);
//   console.log(...args);
// }

// example(1, 2, 3, 4, 5, 6, 7);

// 5. 템플릿 리터럴(Template Literal)
// `(백틱) 을 사용해서 안에 자바스크립트 코드를 넣을 수 있다.
const test = "안녕 자바스크립트";
console.log(`Hello World ${test}`);
console.log(`Hello World ${3 * 2}`);
console.log(`
    여러줄을
        다양한 모양으로 쓸 수 있게
    지원해주는
            템플릿 리터럴!!
`);
