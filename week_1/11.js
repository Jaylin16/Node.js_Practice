// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["멜론", "체리", "블루베리"];

// 1-2. 크기 지정
let number = new Array(5);

// 2. 요소 접근
console.log(fruits[0]);

// 3. 배열 메소드
// 3-1. push (마지막에 요소 추가)
fruits.push("수박");
console.log("push 실행 결과 =>", fruits);

// 3-2. pop (마지막 요소 삭제)
fruits.pop();
console.log("pop 실행 결과 =>", fruits);

// 3-3. shift (첫번째 요소 삭제)
fruits.shift();
console.log("shift 실행 결과 =>", fruits);

// 3-4. unshift (첫번째에 요소 추가)
fruits.unshift("수박");
console.log("unshift 실행 결과 =>", fruits);

// 3-5. splice (~ 부터 ~개를 삭제하고 ~~를 추가)
fruits.splice(1, 1, "포도");
console.log("splice 실행 결과 =>", fruits);

// 3-6. slice
let fruitSlice = fruits.slice(1, 3);
console.log("slice 실행 결과 =>", fruitSlice);

// 3-7. forEach
let numbers = [1, 2, 3, 4, 5];

// 매개변수에 function 을 넣었을 때 이를 "콜백함수" 라 부른다.
numbers.forEach(function (i) {
  console.log("i 값 =>", i);
});

// 3-8. map : 항상 원본 배열의 길이만큼 return 된다.
let newNumbers = numbers.map(function (i) {
  return i + 1;
});

console.log("newNumbers =>", newNumbers);

// 3-9. filter
let filterNum = numbers.filter(function (i) {
  return i > 3;
});

console.log("filterNum =>", filterNum);

// 3-10. find : 첫번째로 조건에 맞는 값만 반환
let findNum = numbers.find(function (i) {
  return i > 3;
});

console.log("findNum =>", findNum);
