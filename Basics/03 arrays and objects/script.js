// non primitive data types

// 01  array
//creating array
var cars = ["Saab", "Volvo", "BMW", 390, ture];// array can add any type of data type(string, number, boolean)

cars;


cars[2]

cars[2] = "Mercedes";
//creating array
var motobike = [];

//creating array
var airplances = new Array('airbus', 'boeing', 'cessna');

//arrays in js
//properties -  length
//methods - push, pop, shift, unshift, splice, slice, concat, reverse, sort, indexOf, lastIndexOf, isArray, toString, join, fill, includes, find, findIndex, filter, map, reduce, some, every, forEach
//most usefull methods - push(), pop(), shift(), unshift(), indexOf()

cars.length;


cars.push('Nissan') //add element at the end of the array

cars.pop() //remove element from the end of the array

cars.shift() //remove element from the start of the array(first element in array removed)

cars.unshift('Nissan') //add element at the start of the array

cars.indexOf('BMW') //find index of the element
//if return -1 that means element is not present in the array


//02  object in js

/* 
eg: Student object

properties
- id
- name
- age
- subjects
- address

Methods 
CalculateAge()
CalculateGrade()
calculateAverageMarks()
ChangeAddress()

*/


/* 

Array vs Object


Array access in element by index

weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

[0] = 'mon'
[1] = 'tue'
[2] = 'wed'
[3] = 'thu'
[4] = 'fri'
[5] = 'sat'
[6] = 'sun'

object access element by key

student
.id = 10025
.name = 'John'
.age = 25
.subjects()



*/


//creating object - empty object
var student = new Object(); //method 01

var student2 = {}; //method 02

var student = {'id': 10025, 'name': 'John', 'age': 25, 'subjects': ['maths', 'science', 'english'], 'address': 'New York'}; //method 03

//adding values to stundet2 object
student2.name = 'seiya'

student2.age = 25

student2.smile = function(){
    console.log('smile');
    alert('ha haha ha ha');
}


//accessing method
student2.smile()









