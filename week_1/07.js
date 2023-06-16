// 함수 = function(기능)
// input 과 output을 가지고 있는 기능의 단위.

// 1. 함수 선언문
function add(x, y) {
  return x + y;
}

// 2.함수 표현식
let add2 = function (x, y) {
  return x + y;
};

console.log(add(2, 3));

let result = add2(10, 20);
console.log(result);
