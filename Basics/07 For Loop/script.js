/*
For Loop 
Syntax


for (initialization; condition; increment) {
    // code block to be executed
}

for (start; condition; step) {
    // code block to be executed
}



*/

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//display in html file
//document.write(months[0] + "<br>"); 


//for (var i = 0; i < 12; i++) 
for (var i = 0; i < months.length; i++) {
    console.log(months[i]);//display in console
    document.write(months[i] + "<br>");//display in html file

}












