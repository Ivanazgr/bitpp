// 1.
var day = 1;
var result = ""

switch (day) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = 'Tuesday';
        break;
    default:
        result = 'Ne znam koji je danas dan';

}
console.log(result);

//2.

var dayInWeek = 1;
var result = "";
switch (dayInWeek) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;

    default:
        result = 'Input must be a number between 1 and 7';
        break;
}
console.log(result);

/* 3.
Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend.
All other cases output a message explaining that input must be a number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var isWeekDayOrNot = 1;
var result = "";

switch (isWeekDayOrNot) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'Its a week day'
        break;
    case 6:
    case 7:
        result = 'Its weekend';
        break;

    default:
        result = 'Input must be a number between 1 and 7';
        break;
}

console.log(result);

/* 4. Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name.
All other cases output a message explaining that input must be a number between 1 and 12.
		For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var month = 1;
var result = "";

switch (month) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;

    default:
        result = 'Input must be a number between 1 and 12';
        break;
}

console.log(result);

/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what season it is.
All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.*/

var monthAndSeason = 1;
var result = "";

switch (monthAndSeason) {
    case 1:
        result = "January" + "-winter";
        break;
    case 2:
        result = "February" + "-winter";
        break;
    case 3:
        result = "March" + "-winter";
        break;
    case 4:
        result = "April" + "-winter";
        break;
    case 5:
        result = "May" + "spring";
        break;
    case 6:
        result = "June" + "spring";
        break;
    case 7:
        result = "July" + "summer";
        break;
    case 8:
        result = "August" + "summer";
        break;
    case 9:
        result = "September" + "summer";
        break;
    case 10:
        result = "October" + "fall";
        break;
    case 11:
        result = "November" + "fall";
        break;
    case 12:
        result = "December" + "winter is coming";
        break;

    default:
        result = 'Input must be a number between 1 and 12';
        break;
}

console.log(result);

/* 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that 
grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". 
 Input different from letters A-F outputs a message "Unknown grade". */

var grades = 'C';
var result = '';

switch (grades) {
    case 'A':
        result = 'Good Job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'F':
        result = 'Failed';
        break;

    default:
        result = 'Unknown grade';
        break;

}
console.log(result);

/* 7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself,
however there has to be at least 5 countries and 15 cities.
Note that each country must have a different number of cities.
Input different from the listed cities should output a message"Please choose a different city" */

var city = 'Belgrade';
var result = '';

switch (city) {
    case 'Belgrade':
    case 'NoviSad':
        result = 'Serbia';
        break;

    case 'London':
    case 'Liverpool':
        result = 'England';
        break;

    default:
        result = 'Please choose a different city';
        break;
}
console.log(result);

/* 8. Write a program that takes as input two numbers and a string
denoting the operation (“+”, “-”, “*”, “/”) and
prints out the appropriate result. Watch out for division by zero! */

var inputNumber = 5 + 5;
var result = '';

switch (inputNumber) {
    case 10:
        result = 'Result is 10'
        break

}


console.log(result);




