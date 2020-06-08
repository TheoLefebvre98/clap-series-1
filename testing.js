const array1 = [5, 6, 7]
const array2 = [5, 4, 3]

function plusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, curr) => acc + curr);
}

console.log(plusArray(array1, array2));