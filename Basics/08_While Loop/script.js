// WHile Loop

/* 

Syntax:

while (condition) {

    //    code

]

*/

// Do WHile Loop

/* 

Syntax:

do{

    // code

} while (condition)

*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//while Loop - first look condition then execute the code
var i = 0;

while (i<12){

    document.write(i + 1 + " " +months[i] + "<br>");
    i++;
}

//do while Loop - first execute the code then look the condition

var i =0;
do{

    document.write(i + 1 + " " + months[i] + "<br>");
    i++;

}while(i<12);