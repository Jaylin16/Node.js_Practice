// 연산자(+, -, *, /, %)

// 1. 더하기 연산자
console.log(1 + 1);
console.log(1 + "1");

// 2. 빼기 연산자
console.log(1 - 1);
console.log(2 - "1");

// 3. 곱하기 연산자
console.log(2 * 3);
console.log("2" * "1");
console.log("2" * 3);

// 4. 나누기 연산자
console.log(4 / 2);
console.log("4" / "2");

// 5. 나누기 연산자 vs 나머지 연산자
console.log(5 / 2);
console.log(5 % 2);

// 6. 할당 연산자
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x);

// 6-2. 더하기 등호 연산자(+=)
x += 5;
console.log(x);

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
let a = 10;
a *= 2;
console.log(a);

// 6-5. 나누기 등호 연산자(/=)
a /= 2;
console.log(a);

// 7. 비교 연산자(--> "ture" or "false"를 반환하는 연산자)
// 7-1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

console.log(2 === 2); // true
console.log("2" === 2); // false
console.log(2 === 3); // false

// 7-2. 불일치 연산자(!==)
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== 3); // true

// 7-3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(2 < 2); // false
console.log(2 <= 2); // true

// 8. 논리 연산자
// 8-1. 논리곱 연산자
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// 8-2. 논리합 연산자
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

// 8-3. 논리부정 연산자
console.log(!true);

a = true;
console.log(!a);

// 9. 삼항 연산자
x = 10;
let result = x < 5 ? "크다" : "작다";
console.log(result);

// 10. 타입 연산자(typeof)
console.log(typeof "5");
