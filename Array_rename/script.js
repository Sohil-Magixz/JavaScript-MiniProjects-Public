// Function to multiply each value of an array by ten
function multiplyByTen(myArray) {
    // Use the map() method to create a new array with each element multiplied by 10
    const resultArray = myArray.map(num=>num*10);
    return resultArray;
}

// Sample Input 1
const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Sample Output 1:", output1);