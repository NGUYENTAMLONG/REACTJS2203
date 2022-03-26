/**
 * bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
Input: const person = [
	{ name: 'John', age: 24 },
	{ name: Pete, age: 25 },
	{ name: Mary', age: 28 }
]
Output: ['John', 'Pete', 'Mary'].
 */
function myFunc(array) {
  const newArr = array.map((element, index) => {
    return element.name;
  });
  return newArr;
}
console.log(
  myFunc([
    { name: "John", age: 24 },
    { name: "Pete", age: 25 },
    { name: "Mary", age: 28 },
  ])
);
function myFunc2(array) {
  const newArr = [];
  array.forEach((element) => {
    newArr.push(element.name);
  });
  return newArr;
}
console.log(
  myFunc2([
    { name: "John", age: 24 },
    { name: "Pete", age: 25 },
    { name: "Mary", age: 28 },
  ])
);
