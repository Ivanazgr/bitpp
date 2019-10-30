"use strict";


//1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input: [3, 500, 12, 149, 53, 414, 1, 19]
// Output: [3, 1, 12, 149, 53, 414, 500, 19]
//


function minmax(numbers) {
    var minIndex = 0;
    var maxIndex = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }

        if (numbers[maxIndex] < numbers[i]) {
            maxIndex = i;
        }
    }

    var tmp = numbers[minIndex];
    numbers[minIndex] = numbers[maxIndex];
    numbers[maxIndex] = tmp;

    return numbers;
}
console.log(minmax([3, 500, 12, 149, 53, 414, 1, 19]));




function minmax(numbers) {
    var min = numbers[0];
    var minIndex = 0;

    var maxIndex = 0;
    var max = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
            minIndex = i;
        }

        if (max < numbers[i]) {
            max = numbers[i];
            maxIndex = i;
        }
    }

    numbers[minIndex] = max;
    numbers[maxIndex] = min;

    return numbers;
}
console.log(minmax([3, 500, 12, 149, 53, 414, 1, 19]));


//2.Use the following array to make a new one by dividing its values by two and adding 5. 
//If a given element's value is 0, change it to 20.
Input: [3, 500, -10, 149, 53, 414, 1, 19]


function newone(numbers) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        var rez = numbers[i] / 2 + 5;

        if (rez === 0) {
            rez = 20;
        }

        transformed[i] = rez;
    }

    return transformed;
}
console.log(newone([3, 500, -10, 149, 53, 414, 1, 19]));