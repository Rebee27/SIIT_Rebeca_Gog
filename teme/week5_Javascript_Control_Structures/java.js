//display in the console the numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

//display in the console the odd numbers from 1 to 20
for (var i = 1; i <= 20; i = i + 2) {
    console.log(i);
}

//compute the sum of the elements of an array and display it in the console
var array = new Array(23, 47, 3, 5, 92, 23, 5, 18);
var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log('sum=', sum);

//compute the maximum of the elements of an array and display it in the console 
var max = array[0];

for (var i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log('max=', max);

//compute how many times a certain element appears in an array
var element = 23;
var nr = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] === element) { nr = nr + 1; }
}
console.log('nr=', nr);
