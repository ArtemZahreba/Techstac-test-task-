function processarrayTasks(arr) {
    // Reverse the array manually
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    // Calculate sum of even numbers at even positions
    let evenSum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        }
    }

    // Check if array is palindrome
    let isPalindrome = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    return {
        reversedArray: reversedArray,
        evenSum: evenSum,
        isPalindrome: isPalindrome
    };
}

// Test the function
let inputArray = [1, 2, 1];
let result = processarrayTasks(inputArray);
console.log(result.reversedArray);
console.log(result.evenSum);
console.log(result.isPalindrome);

