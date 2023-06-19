// for문
for (let i = 0; i < 5; i++) {
  console.log("i 값 ===>", i); // String과 변수 i (number type)가 각각 순서대로 찍힘.
  console.log("i 값 ===>" + i); // 앞서 배웠듯 String + String(변수 i)으로 찍힘.
}

// 예시: 0 ~ 10 중 2배수만 log 찍기.
for (let i = 0; i <= 10; i++) {
  if (i !== 0 && i % 2 === 0) {
    console.log(i, "는 2의 배수");
  }
}

// for ~ in 문
// 객체의 속성을 출력하는 문법
let person = {
  name: "이름",
  age: "나이",
  gender: "성별",
};

for (let key in person) {
  console.log(key, person[key]);
}

// while문
let i = 3;

while (i < 5) {
  console.log(i);
  i++;
}

// 예시: 3초과 100미만의 숫자 중 5의 배수만 log 찍기.
// !주의! 조건: 3 < i < 100 === (3 < i) < 100 => 결과 값 : 0(false) < 100 || 1(true) < 100
// 즉, 조건식이 항상 'true'이므로 무한루프 발생.

while (3 < i && i < 100) {
  if (i % 5 === 0 && i >= 5) {
    console.log(i, "는 5의 배수");
  }

  console.log(i, "<< 밖에 있따");

  i++;
}

// do ~ while 문

do {
  console.log("1번째 while 문", i);
  i++;
} while (i < 10);

do {
  console.log("2번째 while 문", i);
} while (i < 5);

// continue 와 break 문

for (let y = 0; y <= 10; y++) {
  if (y % 5 === 0 && y >= 5) {
    console.log("if 문 안에 있는", y);
    break;
  }
  y++;
  console.log("if 밖에 있는", y);
  continue;
}
