// 출처 : https://school.programmers.co.kr/learn/courses/30/lessons/133502

// 햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. 함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고, 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. 상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. 상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, 재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.

// 예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때, 상수는 여섯 번째 재료가 쌓였을 때, 세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고, 아홉 번째 재료가 쌓였을 때, 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다. 즉, 2개의 햄버거를 포장하게 됩니다.

// 상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, 상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

// 제한사항
// 1 ≤ ingredient의 길이 ≤ 1,000,000
// ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.

// 시간 초과된 풀이
function solution(ingredient) {
  var answer = 0;
  const burger = [1, 2, 3, 1];

  let check = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let sliceArr = arr.slice(i, i + 4);

      if (JSON.stringify(sliceArr) === JSON.stringify(burger)) {
        ingredient.splice(i, 4);
        answer++;

        return check(ingredient);
      } else if (i === ingredient.length - 3) {
        break;
      }
    }
  };

  check(ingredient);

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0
console.log(
  solution([
    1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
  ])
); //5

// 시간 초과된 풀이
function solution2(ingredient) {
  var answer = 0;
  const burger = [1, 2, 3, 1];

  let sameCheck = (arr) => {
    if (JSON.stringify(arr) === JSON.stringify(burger)) {
      answer++;
      return true;
    } else {
      return false;
    }
  };

  let check = (ingredient) => {
    if (ingredient.length > 3) {
      for (let i = 0; i < ingredient.length; i++) {
        let sliceArr = ingredient.slice(i, i + 4);

        if (sameCheck(sliceArr)) {
          ingredient = [
            ...ingredient.slice(0, i),
            ...ingredient.slice(i + 4, ingredient.length),
          ];

          return check(ingredient);
        }

        if (i === ingredient.length - 3) {
          break;
        }
      }
    }
  };

  check(ingredient);

  return answer;
}

console.log(solution2([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
console.log(solution2([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0
console.log(
  solution2([
    1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
  ])
); //5

function solution3(ingredient) {
  var answer = 0;

  let stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      answer++;
    }
  }

  return answer;
}

console.log(solution3([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
console.log(solution3([2, 1, 2, 1, 2, 3, 1, 3, 1])); //2
console.log(solution3([1, 3, 2, 1, 2, 1, 3, 1, 2])); //0
console.log(
  solution3([
    1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1,
  ])
); //5
