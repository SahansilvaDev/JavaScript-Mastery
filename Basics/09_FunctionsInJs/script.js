function printDate() {
    document.write( Date());
}

printDate(); // Output: Mon May 24 2021 15:52:00 GMT+0530 (India Standard Time)


function printValue(price, qty) {
    document.write(price * qty);
}

printValue(100, 5); // Output: 500

function getValue(price,qty){

    return price * qty;

}

var myValue = getValue(100,5); 
alert(myValue);// Output: 500



var myName = "John";

function printName() {
    var myName = "Doe"; // Local Variable only serve inside the function
    document.write("My Name is : "+ myName);
}


printName(); // Output: My Name is : Doe


document.write('<br>');
document.write("My Name is : "+ myName); // Output: My Name is : John