/**
 * bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
Input:	arr1 = ['John', 'Pete', 'Mary']
	arr2 = ['Mary', 'Henry', 'Harry']
Output: ['John', 'Pete', 'Mary', 'Henry']
 */
function myFunc(array1, array2) {
  const newArr = [];
  array1.forEach((element) => {
    if (array2.includes(element) !== true) {
      newArr.push(element);
    }
  });
  array2.forEach((element) => {
    if (array1.includes(element) !== true) {
      newArr.push(element);
    }
  });
  return newArr;
}
console.log(myFunc(["John", "Pete", "Mary"], ["Mary", "Henry", "Harry"]));
