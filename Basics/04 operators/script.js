// Operators

/*

Arithmetic Operators
+ - * / % ++ -- **

+ is the addition operator
- is the subtraction operator
* is the multiplication operator
/ is the division operator
% is the modulus operator
++ is the increment operator
-- is the decrement operator
** is the exponentiation operator



*/

10 + 5 //15

10-5 //5

10 * 5 //50

10 / 5 //2

10 % 5 //0
9 % 2 //1

//return value and increment a++ = (a = a +1)
a =1;
a++ //1 
a //2

//increment and return value
++a //3

//return value and decrement
a = 3;
a-- //3
a //2

//decrement and return value
a =3;
--a //2


/*
comparison operators
== === != !== > < >= <=

== is the equality operator
=== is the strict equality operator
!= is the not equal operator
!== is the strict not equal operator
> is the greater than operator
< is the less than operator
>= is the greater than or equal operator
<= is the less than or equal operator


*/

var userName = 'admin';

userName == 'admin' //true
userName == 'John' //false


userName === 'admin' //true


userName != 'admin' //false

userName !== 'admin' //false

userName !== 'John' //true



var maths =78;

maths > 50 //true
maths < 50 //false

maths >= 78 //true
maths <= 78 //true


//Logical Operators

/*

&& || !

&& is the logical AND operator
|| is the logical OR operator
! is the logical NOT operator

*/

var english = 80;
var maths = 78;

//AND
maths > 50 && english > 50 //true


//OR
maths = 40;

maths > 50 || english > 50 //true


//NOT
var pass = true;
!pass //false;

!(maths > 50) //false


//string concatenation

var firstName = 'John';
var lastName = 'Doe';

var fullName = firstName + lastName;

fullName = firstName + ' ' + lastName;


'Hello ' + fullName //Hello John Doe

5 + "stars" //if we add number and string, it will convert number to string and concatenate
// "5 stars"



