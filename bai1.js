/**
 * bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
Input: [0, 5, 4, 2, 8]
Output: 19
 */
function sumCalc(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
console.log(sumCalc([0, 5, 4, 2, 8]));

function sumCalc_ver2(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}
console.log(sumCalc_ver2([0, 5, 4, 2, 8]));

function sumCalc_ver3(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumCalc_ver3([0, 5, 4, 2, 8]));
