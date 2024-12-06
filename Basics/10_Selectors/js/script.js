
// Document object model (DOM) - HTML hierarchy (structure)

//Selectors - helps us access and change DOM 

/*

getElementById("idname") - element with the specified id acessed
getElementsByClassName("classname") - array - elements with the specified class name acessed
getElementsByTagName("<tagname>") - array - elements with the specified tag name acessed
querySectorAll("css selector") - array - elements with the specified css selector acessed
(".classname")
("#idname")
("<tagname>") - only in brackets tagname type




*/

//getElementById
var mainHeading = document.getElementById("main-heading");
mainHeading.innerText = "Java Script Selectors";


//getElementsByClassName - result is array
var oddRows = document.getElementsByClassName("odd");
// console.log(oddRows);
// oddRows[0].style.background = "yellow";
// oddRows[1].style.background = "yellow";
// oddRows[2].style.background = "yellow";

for(var i = 0; i < oddRows.length; i++){
    oddRows[i].style.background = "green";
}

//getElementsByTagName -  result is array

var subHeadings = document.getElementsByTagName("h2");

for(var i = 0; i < subHeadings.length; i++){
    subHeadings[i].style.color = "red";
}

//querySelectorAll - result is array

var list = document.querySelectorAll(".list");
// for(var i = 0; i < list.length; i++){
//     list[i].innerHTML = list[0].innerHTML + "<li>Item " + (i+1) + "</li>";
// }

list[0].innerHTML = list[0].innerHTML + "<li> LIST Item 4 </li>" + "<li> LIST Item 5 </li>";
//list[0].innerHTML = list[0].innerHTML + "<li> LIST Item 4 </li>" + "<li> LIST Item 5 </li>";


