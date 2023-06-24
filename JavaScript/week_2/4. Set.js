// Set
// 고유한 값을 저장하는 자료구조로 key (X) value (O)
// Set의 기능 : 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인

const numSet = new Set();
numSet.add("1");
numSet.add("3");
numSet.add("2");
numSet.add("1");

console.log(numSet);

// 1-1. values();
// value 들을 돌려주는 메소드
console.log(numSet.values());

for (const value of numSet.values()) {
  console.log(value);
}

// 1-2. size
// set의 사이즈를 알 수 있다.
console.log(numSet.size);

// 1-3. has
// value 기반으로 검색
console.log(numSet.has("2"));
