// 형 변환
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적 (자동으로 바뀜.)
// 1-1. 문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// {}, null, undefined + "1" => 문자열

// 1-2. 숫자
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// 연산자가 있을 때 숫자타입을 우선한다.

// 2. 명시적 형 변환
// 2-1. Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log("============아래는 true============");
console.log(Boolean("false"));
console.log(Boolean({}));
console.log(Boolean(1));
console.log(Boolean(-5));

// 값이 있는 문자열, 객체(비었어도), 숫자('0' 제외)는 "true"로 반환

// 2-2. 문자열
let result5 = String(123);
console.log(result5);
console.log(typeof(result5));

result5 = String(true);
console.log(result5);
console.log(typeof(result5));

result5 = String(null);
console.log(result5);
console.log(typeof(result5));

result5 = String(undefined);
console.log(result5);
console.log(typeof(result5));

// 1-3. Number
let result6 = Number("123");
console.log(result6);
console.log(typeof(result6));