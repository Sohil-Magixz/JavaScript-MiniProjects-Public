let arr1 = [1,2,3]

let arr2 = [...arr1,4,5];
console.log(arr2);

let arr3 = arr1;
console.log(arr3);

let arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);