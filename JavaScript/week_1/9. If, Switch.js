// 조건문
// 1. if문
let x = 10;

if (x > 0) {
  console.log("x는 양수 입니다.");
}

let y = "hello world";
if (y.length >= 5) {
  console.log(y.length);
}

// 2. if-else 문
if (y.length <= 5) {
  console.log(y.length);
} else {
  console.log("5보다 길이가 길지 않음.");
}

// 3. if - else if - else 문

if (x < 0) {
  console.log("1");
} else if (x >= 0 && x < 11) {
  console.log("2");
} else {
  console.log("3");
}

// 4. switch 문
let a = "a";

switch (a) {
  case "a":
    console.log("a 입니다.");
    break;
  case "b":
    console.log("b 입니다.");
    break;
  case "c":
    console.log("c 입니다.");
    break;
  default:
    console.log("???");
    break;
}

// 5. 조건문의 중첩
let age = 20;
let gender = "여성";

if (age > 19) {
  if (gender === "여성") {
    console.log("연령정보 :" + age + "성별정보 : 성인 여성 입니다.");
  } else {
    console.log("연령정보 :" + age + "성별정보 : 성인 남성 입니다.");
  }
} else {
  if (gender === "여성") {
    console.log("연령정보 :" + age + "성별정보 : 미성년 여성 입니다.");
  } else {
    console.log("연령정보 :" + age + "성별정보 : 미성년 남성 입니다.");
  }
}

// 6. 조건부 실행
let z = -3;

if (z < 0) {
  console.log("z는 음수입니다.");
}

z < 0 && console.log("z는 음수입니다."); //앞의 조건이 true일 때 뒤를 실행.

// 7. 삼항 연산자와 단축평가
let b; //undefined
let c = b || 20; //b가 undefined 일 때, 20을 기본 값으로 설정.

console.log(c);

// 8. falsy한 값, truthy한 값
if (0) {
  console.log("0은 truthy한 값");
} else {
  console.log("0은 falsy한 값");
}

if (1) {
  console.log("1은 truthy한 값");
} else {
  console.log("1은 falsy한 값");
}

if ("") {
  console.log("빈 문자열은 truthy한 값");
} else {
  console.log("빈 문자열은 falsy한 값");
}

if ("123") {
  console.log("값이 있는 문자열은 truthy한 값");
} else {
  console.log("값이 있는 문자열은 falsy한 값");
}

if (null) {
  console.log("null은 truthy한 값");
} else {
  console.log("null은 falsy한 값");
}

if (undefined) {
  console.log("undefined는 truthy한 값");
} else {
  console.log("undefined는 falsy한 값");
}

if (NaN) {
  console.log("NaN은 truthy한 값");
} else {
  console.log("NaN은 falsy한 값");
}

if ({}) {
  console.log("빈 객체는 truthy한 값");
} else {
  console.log("빈 객체는 falsy한 값");
}
