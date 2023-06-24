// 1. Map
//Map은 key가 정렬된 순서로 저장됨.
//Map의 기능 : 검색, 삭제, 제거, 여부 확인

const map = new Map();
map.set("key", "value");

console.log(map.get("key"));

// 1-1. keys();
// key들을 돌려주는 메소드
const numMap = new Map();
numMap.set("일", 1);
numMap.set("이", 2);
numMap.set("삼", 3);

console.log(numMap.keys());

for (const key of numMap.keys()) {
  console.log(key);
}

// 1-2. values();
// value 들을 돌려주는 메소드
console.log(numMap.values());

for (const value of numMap.values()) {
  console.log(value);
}

// 1-3. entries();
// [key - value] 을 돌려주는 메소드
console.log(numMap.entries());

for (const entrie of numMap.entries()) {
  console.log(entrie);
}

// 1-4. size
// map의 사이즈를 알 수 있다.
console.log(numMap.size);

// 1-5. has
// key 기반으로 검색
console.log(numMap.has("이"));
