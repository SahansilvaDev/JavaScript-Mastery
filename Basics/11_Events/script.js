//Events - user clicking mouse, pressing a key, resizing a window, etc.


/*

How to listen for Events:

theough HTML attribute.
E.g. <a onlclick="doSomething();">Click Me</a>

through JavaScript property.
E.g. document.getElementById("myButton").onclick = function(){alert("Button Clicked");};

addEventListener() method.

addEventListener("event",function());
E.g. element.addEventListener("click", doSomething);

OR

E.g. document.getElementById("myButton").addEventListener("click", function(){alert("Button Clicked");});



Events in JavaScript

Some of the most used Events in JavaScript 

click - when an element is clicked
mouseover - when the mouse is moved over an element
mouseout - when the mouse is moved out of an element
keydown - when a key is pressed
keyup - when a key is released
load - when an object has loaded
resize - when the browser window has been resized
scroll - when the user scrolls up or down the page
focus - when an element gets focus
blur - when an element loses focus
submit - when a form is submitted
change - when the content of a form element changes







*/





//addEventListener() method.

//addEventListener("event",function());
//E.g. element.addEventListener("click", doSomething);

var myButton = document.getElementById("clickme");


//click - when an element is clicked

myButton.addEventListener("click", doSomething);

function doSomething(){
    console.log("Button 2 was Clicked");
    alert("Button 2 Clicked");
}

//OR

function doSomething(event){
    console.log(event);
}


document.addEventListener("keyup", function (event){
    console.log(event);
})

//get key code

document.addEventListener("keyup", function (event){
    console.log(event.keyCode);
})