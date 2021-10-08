document.write("Another file", "<br>");
document.getElementById("th").innerHTML="This is a paragraph";

//variable in javaScript
var a = 12;
var b = "This is my line"


// to use this variable
document.write(a, "<br>");
console.log("This is console");         // console use for debbuging perpouses


//var age = prompt("Tell me your age??");


//console.log(age);
//alert(age);

//Mathematical expression 
/*
document.write("3+4 = ", 3+4, "<br>")
document.write("3-4 = ", 3-4, "<br>")
document.write("3*4 = ", 3*4, "<br>")
document.write("3/4 = ", 3/4, "<br>")
document.write("3%4 = ", 3%4, "<br>")


var chocolateCost  =prompt("What is the total amount::  ")
var numberOfPeople = prompt("Number of people: ")
document.write("Total cost of the chocolate is : ", chocolateCost,"<br>");
document.write("Each of person pay for this is : ", (chocolateCost/numberOfPeople).toFixed(2), "<br>");

*/
//Mathematical function
/*
document.write("2^4 = ", Math.pow(2,4), "<br>");
document.write("sqrt(36) = ", Math.sqrt(36), "<br>");
*/

//String Function
/*
var str1 = "DhrubarajRoy-GokulNager";
document.write(str1.length,"<br>");
document.write(str1.indexOf("Roy"), "<br>");
document.write(str1.substr(2,6), "<br>");
document.write(str1.replace("Siliguri", "GokulNager"), "<br>");
document.write(str1.toUpperCase(), "<br>");
*/
//Relational Operators : ==, !=, <, >, >=
//Logical Operators : &&, ||
/*

var age = prompt("What is your age");

if (age<20 && age>=10)
{

	document.write("You go to the school");
}

else if(age<10 && age>3)
{
	document.write("You also go to the school");
}

else
{
	document.write("Do whatever you want");
}
*/
/*
var age = prompt("What is your age?");
switch(age)
{

	case "22":
		document.write("22 years old.. okay");
		break;

	case "21":
		document.write("21 years old.. okay");
		break;
		

	case "12":
		document.write("12 years old.. okay");
		break;
		

	default:
		document.write("default years old.. okay");
		break;			

}

var i =1;
while(i<=100)
{
	document.write(i,"<br>");
	i++;
}


var i =101;
do
{
	document.write(i,"<br>");
	i++;
} while(i<=100)




for (var i = 0; i < 2; i++) {
	document.write(i,"<br>");
}

var books = ["Harry potter", "ncert", "ctci", 65];

document.write(books[1]);


function code(){
    document.write("we catched this function");
    console.log("we executed this function");
}
code();
*/