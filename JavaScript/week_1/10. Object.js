// 객체
// key-value pair (Java의 map과 유사해 보임.)

// 1. 객체 생성 방법
// 1-1. 기본
let person = {
  name: "이름",
  age: 20,
  gender: "성별",
};

// 1-2. 생성자를 이용한 생성
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("이름", 21, "성별");
let person2 = new Person("이름", 22, "성별");

console.log(person);
console.log(person1);
console.log(person2);

// 2. 객체 메소드
// 객체의 key 값만 반환
let keys = Object.keys(person);
console.log("keys => ", keys);

// 객체의 value 값만 반환
let values = Object.values(person);
console.log("values => ", values);

// 객체의 [key, value] 를 2차원 배열로 반환
let entries = Object.entries(person);
console.log("entries => ", entries);

//객체를 복사.
let assign = {};
Object.assign(assign, person);
console.log("assign => ", assign);

Object.assign(assign, person, { gender: "여자" });
console.log("assign => ", assign);

// 3. 객체 비교
let person3 = new Person("이름", 21, "성별");
let person4 = new Person("이름", 21, "성별");

console.log(person3 === person4); //false. 객체는 주소값을 저장하고 있으니까.
console.log(JSON.stringify(person3) === JSON.stringify(person4)); //true. stringify함수가 객체 내의 값을 string으로 변환하여 비교해줌.

// 4. 객체 병합
let person5 = {
  name: "이름",
  age: 20,
};

let person6 = {
  gender: "성별",
};

// ... : spread operator (객체의 key와 value를 풀어헤쳐줌. ES6에서 생김.)
let perfectPerson = { ...person5, ...person6 };
console.log(perfectPerson);
