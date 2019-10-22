// task 1 -Write a program that checks if a given element e is in the array a. 

var e = 3;
var a = [5, -4.2, 3, 7];



if (e === a[0] || e === a[1] || e === a[2] || e === a[3]) {
    console.log("yes");
}
else {
    console.log(" no");
}

/*2.nacin ovog gore iznad

var e = 3;
var a = [5, -4.2, 3, 7];
var answer=false;

for (var i = 0; i < a.length; i++) {
 if (e === a[i]) {
   answer=true;
    }
}
if (answer){
    console.log("yes");
}else{
    console.log("no");
}


*/

var e = 3;
var c = [5, -4.2, 18, 7];

for (var i = 0; i < c.length; i++) {
}
if (e === c[i]) {
    console.log("yes");
}
else {
    console.log("no");
}




//???????? 1deo je ok ali kako sve da izlista
/// task 2 -Write a program that multiplies every positive element of a given array by 2.

var a = [-3, 11, 5, 3.4, -8];


for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        console.log(a[i] * 2);
    }
}



// tfali index da se ispise task 3 -Write a program that finds the minimum of a given array and prints out its value and index


var b = [4, 2, 2, -1, 6];
var najmanji = 0;

for (i = 0; i < b.length; i++) {
    if (najmanji > b[i]) {
        najmanji = b[i];

    }


}
console.log(najmanji);



// ????? izlista najveci broj u nizu
//task 4 -Write a program that finds the first element larger than minimum and prints out its value

var bil = [4, 2, 2, -1, 6];
var larger = 0;

for (i = 0; i < bil.length; i++) {
    if (larger < bil[i]) {
        larger = bil[i];
    }
}
console.log(larger);



// task 5 -Write a program that calculates the sum of positive elements in the array.

var a = [3, 11, -5, -3, 2];
sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }

}
console.log("sum of positive elements is " + sum);


//task 6 Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   

var p = [2, 4, -2, 7, -2, 4, 2];




// task 8-Write a program that concatenates two arrays. 

var p = [4, 5, 6, 2];
var l = [3, 8, 11, 9];
var combined = [];


var combined = p + l;
console.log(combined);



//task 9 Write a program that deletes a given element e from the array a. 

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
    }
    else {
        delete a[i];

    }
}
console.log(a);
//

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0, j = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[j] = a[i];
        j++;
    }

}
console.log(b);






var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = []
for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length] = a[i];

    }

}
console.log(b);

//10.Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
//
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var b = [];

for (i = 0; i < a.length; i++) {
    if (i === p) {
        b[b.length] = e;
    }

    b[b.length] = a[i];
}
console.log(b);





var a = "* * * *";
var size = 4;
for (i = 0; i < size; i++) {
    console.log(a);
}

/////

var a = "";
var size = 10;

for (i = 0; i < size; i++) {
    a += " * "

}
for (i = 0; i < size; i++) {
    console.log(a);
}

//////////////////////////////

var size = 6;
var shape = "";


for (var row = 0; row < size; row++) {
    for (var column = 0; column < size; column++) {
        shape += " * ";
    }

    shape += " \n ";

}
console.log(shape);



///// 
var a = "";
var size = 3;
var shape = ''


for (i = 0; i < size; i++) {
    a += "* ";
    shape += a + "\n";
}

console.log(shape);












