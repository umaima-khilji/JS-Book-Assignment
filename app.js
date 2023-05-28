
//ALERTS
// 1.
// Greeting message
// var greeting = "Welcome to our website!";

// Display alert box with greeting
// alert(greeting);

// .2
// var greet = "Error! Please Enter a vaild password";
// alert(greet);

// 3.
// var webpg = "Welcome to js land... \n Happy Cooding!";
// alert(webpg);

//.4
// var msg = "Welcome to js land...";
// alert(msg);

// var msg2 = "Happy Codding \n Prevent this page from creating additional dialogs"
// alert(msg2);

//.5
// alert("Hello... I can run JS through my web browser's console :)");


// .6
// function showAlert() {
//     alert("Hello! This is an alert message.");
//   }

///////////////////////////**********///////////////////////////
//VARIABLES FOR STRINGS
//1. 
var username = "Umaima";

//2.
var myName = "Umaima khilji";

//3.
// var message = "hello world!"
// alert(message);

//4.
// var studentName = "John Doe";
// var age = '21 year old';
// var certificate = "Certified Mobile Application development"

// alert(studentName);
// alert( age);
// alert(certificate);

//5. pizza

//6.
// var email = "umaimaayoubk@gmail.com";
// alert("my email address is " + email);

//.7
// var book = "A smarter way to learn JavaScript";
// alert("Iam trying to lear from the book " +book)

//8.
var paragraph = document.createElement("p");
paragraph.textContent = "Yah! I can write HTML content through JS.";
document.body.appendChild(paragraph);

var para = document.createElement("p");
para.textContent = "///////////////////////////";
document.body.appendChild(para);


// var cardText = document.createElement('p')
// cardText.className = "card-text"
// var cardTextContent = document.createTextNode(data.textdetails)
// cardText.appendChild(cardTextContent)

//9.
// var thisString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(thisString);

///////////////////////////**********///////////////////////////
//VARIABLES FOR NUMBERS
//.1 
// var age = "I am 21 year Old";
// alert(age);

//2. ????
 // Retrieve the current visit count from localStorage or initialize it to 0
//  var visitCount = localStorage.getItem("visitCount");
//  if (visitCount === null) {
//    visitCount = 0;
//  } else {
//    visitCount = parseInt(visitCount);
//  }

//  // Increment the visit count and store it in localStorage
//  visitCount++;
//  localStorage.setItem("visitCount", visitCount);

//  // Display the visit count on the web page
//  window.onload = function() {
//    var visitMessage = "You have visited this site " + visitCount + " times.";
//    document.getElementById("visitCountMessage").textContent = visitMessage;
//  };

 //3.
      var birthYear = document.createElement("p");
birthYear.textContent = "My birth year is 1900 ";
document.body.appendChild(birthYear);

var dataType = document.createElement("p");
dataType.textContent = "the data type of my declared variable is number";
document.body.appendChild(dataType);


//4.
 // visitor information 
 var visitorName = "John Doe";
 var productTitle = "T-shirt";
 var quantity = 5;

 // to display the message in the browser
   var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
   document.getElementById("orderMessage").textContent = message;


 
///////////////////////////**********///////////////////////////
//VARIABLE NAMES: LEGAL & ILLEGAL

//1.
var a = "1st variable" , b = "2nd variable", c = "3rd variable";

//2.
//legal varible:
// 1. thisIsLegal
//2. count
//3. using_underscore
//4. using$sign
//5. myName

//illegal variables:
//1st character should not start form number:
//1. 116variable
//cannot use predefined keyword such as:
//2. let, const 
//3. function
//4. Math 
//5. cannotuse-hyphen

//3.
var heading = "Rules for naming JS variables";
document.getElementById("heading").textContent = heading;

  var msga = "a) Variable names can only contain numbers, $ and _ . For example $my_1stVariable ";
  document.getElementById("rule1").textContent = msga;

  var msgb = "b)  Variables must begin with a letter, $ or _ . For example $name, _name or name ";
  document.getElementById("rule2").textContent = msgb;

  var msgc = "c)  Variable names are case sensitive ";
  document.getElementById("rule3").textContent = msgc;

  var msgd = "d)  Variable names should not be JS Keywords ";
  document.getElementById("rule4").textContent = msgd;


//////////////////////////////**********///////////////////////////
//MATH EXPRESSIONS
//1.
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// var sum = num1 + num2;
// document.write("the sum of" + " " + num1 + " " + "and" +" " +num2+ " " + "is" + " " + sum + "<br>");


//2.
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// var sum = num1 - num2;
// document.write("the subtraction of" + " " + num1 + " " + "and" +" " +num2+ " " + "is" + " " + sum + "<br>");

// //multiplication
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// var sum = num1 * num2;
// document.write("the multiplication of" + " " + num1 + " " + "and" +" " +num2+ " " + "is" + " " + sum + "<br>");

// //division
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));

// var sum = num1 / num2;
// document.write("the division of" + " " + num1 + " " + "and" +" " +num2+ " " + "is" + " " + sum + "<br>");
document.write("//////////////////////////////// <br>");



//3.
// a. Declare a variable.
var myVariable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h.  Show the value of variable in your browser like “Value after addition is: 13”
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l.  Output : “The remainder is : 0”.
document.write("The remainder is: " + remainder + "<br>");

document.write("//////////////////////////////// <br>");

//4.
var ticketPrice = 600;
totalCost = ticketPrice*5;
document.write("Total cost to buy 5 tickets to movie is" + totalCost + " " + "PKR" + "<br>");
document.write("//////////////////////////////// <br>");

//5. ???????
var number = 4;

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write("<table>");

for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write("<tr>");
  document.write("<td>" + number + " x " + i + "</td>");
  document.write("<td>=</td>");
  document.write("<td>" + result + "</td>");
  document.write("</tr>");
}

document.write("</table>");

document.write("//////////////////////////////// <br>");

//6.
var celsiusTemp = 25;
var farenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "°C is " + farenheitTemp + "°F" + "<br>");

var farenheitTemp = 25;
var celsiusTemp = (farenheitTemp  - 32) * 5/9;
document.write(farenheitTemp + "°F is" + " " + celsiusTemp + "°C " + "<br>" );

document.write("//////////////////////////////// <br>");

//7. 
document.write("<h2> Shooping Cart "  + "</h2>");

var priceI1 = 650;
var priceI2 = 100;
var quantityI1 = 3;
var quantityI2 = 7;
var shippingcharges = 100;

var item1Cost = priceI1 * quantityI1;
var item2Cost = priceI2 * quantityI2;

var totalCost = item1Cost + item2Cost + shippingcharges;

document.write("Price of item 1 is: " + priceI1 + "<br>");
document.write("Price of item 2 is: " + priceI2 + "<br>");
document.write("Quantity of itme 1 is: " + quantityI1 + "<br>");
document.write("Quantity of item 1 is: " + quantityI2 + "<br>");
document.write("Shipping Charges are: " + shippingcharges + "<br>" + "<br>");

document.write("Total cost of your order is:" + totalCost + "<br>" + "<br>");

document.write("//////////////////////////////// <br> <br>" );

//8.
var totalMarks = 980;
var marksObtained = 804;

var Percentage = (marksObtained/totalMarks) * 100;

document.write("Total Marks: " + " " + totalMarks + "<br>");
document.write("Marks Obtained: "+ " " + marksObtained + "<br>");
document.write("Percentage: "+ " " + Percentage + "%" + "<br>");

document.write("//////////////////////////////// <br> <br>" );

//9.
// //Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h2> Currency in PKR "  + "</h2>" );
var UsDollars = 10;
var SaudiRiyals = 25;

var exchangeRtUS1D = 104.80;
var exchangeSaudi1R = 28;

var DollarsInPKR = UsDollars * exchangeRtUS1D;
var RiyalInPKR = SaudiRiyals * exchangeSaudi1R;

var TotalPKR = DollarsInPKR + RiyalInPKR;

document.write("Total currency in PKR :" + TotalPKR + "<br>" + "<br>" );

document.write("//////////////////////////////// <br> <br>" );

//10.
// Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 2;

var result = ((number + 5) * 10) / 2;

document.write("The result of arthmetic is: " + " " + result + "<br>" + "<br>");
document.write("//////////////////////////////// <br> <br>" );

//11.
// The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
document.write("<h2> Age Calculator"  + "</h2>" );
var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("Current Year:" + " " + currentYear + "<br>");
document.write("Birth Year:" + " " + birthYear + "<br>");
document.write("they are either" + " " + age1 + " " + "or" + " " + age2+ " " + " years old."  + "<br>" + "<br>");
document.write("//////////////////////////////// <br> <br>" );

//12.
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h2> The Geometrizer"  + "</h2>" );

//a.
var radius = 10;
var PI = 3.142;
//b.
var circumference =  2 * PI * radius;
document.write("The circumference is:" + " " + circumference + "<br>" );
//c.
var area = PI * (radius * radius);
document.write("the area is: " + " " + area + "<br>");
document.write("//////////////////////////////// <br> <br>" );

//13.
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

document.write("<h2> Life time supply calculator"  + "</h2>" );

var snack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var snackPerDay = 3;

var total = (maximumAge - currentAge) * snackPerDay;

document.write("Faveriot snack:" + " " + snack + "<br>");
document.write("Current age:" + " " + currentAge + "<br>");
document.write("Esitemeted maximum age:" + " " + maximumAge + "<br>");
document.write("Amount of snack per day:" + " " + snackPerDay + "<br>");
document.write( "You will need" + " " + total + " " + "to last you until the ripe old age of" + " " + maximumAge + "<br>");;
document.write("//////////////////////////////// <br> <br>" );

//////////////////////////////**********///////////////////////////
//MATH EXPRESSIONS

//1.

var a = 10;
document.write("Result:" + "<br>");
document.write("value of a is:" + a + "<br>");
document.write("------------------------------------------------" + "<br>" + "<br>");

document.write("value of a is:" + ++a + "<br>");
document.write("now the value of a is:" + a + "<br>" + "<br>");

document.write("value of a is:" + a++ + "<br>");
document.write("now the value of a is:" + a + "<br>" + "<br>");

document.write("value of a is:" + --a + "<br>");
document.write("now the value of a is:" + a + "<br>" + "<br>");

document.write("value of a is:" + a-- + "<br>");
document.write("now the value of a is:" + a + "<br>" + "<br>");
document.write("//////////////////////////////// <br> <br>" );


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b= 1;
//var result = --a - --b + ++b + b--;

//--a;
// a will 1

 //--a - --b;
 // a = 0 , b = 0
 //result = 0

 //--a - --b + ++b;
 // a = -1 , b =0 , b = 1
 // (-1 - 0 + 1)
 //result = 0

 //--a - --b + ++b + b--;
 //a = -2, b= 0, b = 2, b = 1 
 //(-2 - 1 + 1 + 1)
 //result = -1

 document.write( --a + " " + " = --a" +  "<br>");
 document.write( --a - --b + " " + " = --a - --b"  + "<br>");
 document.write(--a - --b + ++b + " " + " = --a - --b + ++b"  + "<br>");
 document.write(--a - --b + ++b + b-- + " " + " = --a - --b + ++b + b--" + "<br>");

 document.write("a = -2" + "<br>");
 document.write("b = 0" + "<br>");
 document.write("result = -1" + "<br>");
 document.write("//////////////////////////////// <br> <br>" );

 //3.
//  var name = prompt("Enter your name:");
// document.write("Hello, " + name + "! Welcome!" + "<br>");

// document.write("//////////////////////////////// <br> <br>" );


//4.
// var number = parseInt(prompt("Enter a number to display its multiplication table:"));

// if (isNaN(number)) {
//   number = 5;
// }

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// document.write("<table>");

// for (var i = 1; i <= 10; i++) {
//   var result = number * i;
//   document.write("<tr>");
//   document.write("<td>" + number + " x " + i + "</td>");
//   document.write("<td>=</td>");
//   document.write("<td>" + result + "</td>");
//   document.write("</tr>");
// }

// document.write("</table>");

document.write("//////////////////////////////// <br> <br>" );

//5.
// Prompt the user to enter three subject names
// var subject1 = prompt("Enter the name of subject 1:");
// var subject2 = prompt("Enter the name of subject 2:");
// var subject3 = prompt("Enter the name of subject 3:");

// // Prompt the user to enter total marks for each subject
// var totalMarks = 100;

// // Prompt the user to enter obtained marks for each subject
// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// var subject1Per = (obtainedMarks1 / totalMarks ) * 100;
// var subject2Per = (obtainedMarks2 / totalMarks ) * 100;
// var subject3Per = (obtainedMarks3 / totalMarks ) * 100;

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// // Display the result in a table format in the browser
// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarks1 + "</td>");
// document.write("<td>" + subject1Per + "% </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarks2 + "</td>");
// document.write("<td>" + subject2Per + "% </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtainedMarks3 + "</td>");
// document.write("<td>" + subject3Per + "% </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<th>Total</th>");
// document.write("<th>" + (totalMarks * 3) + "</th>");
// document.write("<th>" + totalObtainedMarks + "</th>");
// document.write("<th>" + percentage.toFixed(2) + "%</th>");
// document.write("</tr>");
// document.write("</table>");
//document.write("//////////////////////////////// <br> <br>" );



//////////////////////////////**********///////////////////////////
//User Input & Conditional Statement

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights

// var cityName = prompt("Enter a city name:");

// if (cityName === "karachi") {
//   document.write("Welcome to the city of lights!" + "<br>");

// } else {
//   document.write("Welcome to " + cityName + "!" + "<br>");
// }
//document.write("//////////////////////////////// <br> <br>" );

//2.
// var gender = prompt("Enter your gender (male or female):");

// if (gender === "male") {
//   document.write("Good Morning Sir.");
// } else if (gender === "female") {
//   document.write("Good Morning Ma'am.");
// } 




