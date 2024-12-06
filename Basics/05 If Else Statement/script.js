console.log('hi');
/*
if else condition

if (condition){
    do this if ture
} else {
    do this if false
}

\\\\\ short version of if else statement

(condition) ? true : false;

condition ? do this if true : do this if false


 */

var hour = 8;

if (hour < 12) {
    alert('Good Morning');
} else {
    alert('Good Afternoon');
}

/*
let currentTime = new Date();
console.log(currentTime);
//2024-03-12T07:14:22.217Z

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
//Current Time: 7:14:22

\\\\\\\\\\\\Formatting the Time
function formatTime(number) {
    return number < 10 ? '0' + number : number;
}

let now = new Date();
let hours = formatTime(now.getHours());
let minutes = formatTime(now.getMinutes());
let seconds = formatTime(now.getSeconds());

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

// /Current Time: 07:14:21


*/

let now = new Date();
let hours = now.getHours();//anything can you use let or var


//method 1
if (hours < 12) {
    alert('Good Morning');
} else {
    alert('Good Afternoon');
}

//method 2
(hours < 12) ? alert('Good Morning') : alert('Good Afternoon');



//method 01
if(hours < 12){
    alert('Good Morning');
}else if (hours >= 12 && hours < 18){
    alert("Good Afternoon")
}else{
    alert('Good Evening');
}

//method 02
if(hours > 18){
    alert('Good Evening');
}else if (hours >= 12 ){
    alert("Good Afternoon")
}else{
    alert('Good Morning');
}


