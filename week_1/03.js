// 2. 문자 : String(문자열)
let str = "Hello~~";
console.log(str);
console.log(typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length);

// 2-2. 문자열 결합하기
let str1 = "First";
let str2 = "Second";
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World";
console.log(str3.substring(3, 5));
console.log(str3.slice(7, 12));

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World"));

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result1 = str5.replace("World", "JS");
console.log(result1);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result2 = 
console.log(str6.split(","));