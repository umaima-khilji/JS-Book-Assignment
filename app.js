
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
// alert("Pizza\nPizz\npiz\npi\np\n");

//6.
// var email = "umaimaayoubk@gmail.com";
// alert("my email address is " + email);

//.7
// var book = "A smarter way to learn JavaScript";
// alert("Iam trying to lear from the book " +book)

//8.
document.write("Yah! i can write HTML content through Javascript");
document.write("/////////////////////");

//9.
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


///////////////////////////**********///////////////////////////
//VARIABLES FOR NUMBERS
//.1 
// var age = "I am 21 year Old";
// alert(age);

//2. 
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

//or
// alert("you have visited thiss website 14 times");

 //3.
var birthYear = 1900;
document.write(" <br> My birth year is " + birthYear + "<br>");
document.write("the data type of my declared variable is number" + "<br>" );

document.write("///////////////////// <br>");
//4.
 var visitorName = "John Doe";
 var productTitle = "T-shirt";
 var quantity = 5;

   var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
   document.getElementById("orderMessage").textContent = message;

   document.write("///////////////////// <br>");
 
///////////////////////////**********///////////////////////////
//VARIABLE NAMES: LEGAL & ILLEGAL

//1.
var name, age, lastName;

//2.
//legal varible:
var thisIsLegal;
var count;
var upperCase;
var using_underscore;
var My_name;
var using$sign;

//illegal variables:
//1st character should not start form number:
//1. 116variable
//cannot use predefined keyword such as:
//2. let, const 
//3. function, math
//4. nam e ;
//5. cannotuse-hyphen


//3.
var heading = "Rules for naming JS variables";
document.getElementById("heading").textContent = heading;

// document.write("<h2> Rules for naming JS variables"  + "</h2>");

  var msga = "a) Variable names can only contain numbers, $ and _ . For example $my_1stVariable ";
  document.getElementById("rule1").textContent = msga;

  var msgb = "b)  Variables must begin with a letter, $ or _ . For example $name, _name or name ";
  document.getElementById("rule2").textContent = msgb;

  var msgc = "c)  Variable names are case sensitive ";
  document.getElementById("rule3").textContent = msgc;

  var msgd = "d)  Variable names should not be JS Keywords ";
  document.getElementById("rule4").textContent = msgd;




  ////
//   document.write("///////////////////// <br>");
//   // var heading = "Rules for naming JS variables";
//   // document.getElementById("heading").textContent = heading;
//   document.write("Rules for naming JS variables");
// var msgb = " a) Variables names can only contain , alphabet, $ ,uppercase and _. for example:$my_1stVariable";
// var msgc = " b) Variables must begin with a letter, $ or _ . For example : $name,_name or name";
// var msgd = "c) Variables names are case sensitivee";
// var msge = " d) Variables names should not be JS keyword";
// document.write(msgb + "<br>" + msgc + "<br>" + msgd + "<br>" + msge + "<br>");

document.write(" ///////////////////// <br>");
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
// var number = 4;

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


// var number = +prompt("Enter a number to display its multiplication table:");
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   var result = number * i;
//   document.write(number + " x " + i + " = " + result + "<br>");
// }
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
//document.write("//////////////////////////////// <br> <br>" );

////3.
// signal = input("Enter the color of the traffic signal (Red/Yellow/Green): ")

// if signal.lower() == "red":
//     print("Must Stop")
// else  if signal.lower() == "yellow":
//     print("Ready to move")
// else if signal.lower() == "green":
//     print("Move now")
// else
//     print("Invalid color entered")

//4.
// var fuel = parseInt(prompt("Enter the remaining fuel in your car (in litres): "));

// if (fuel < 0.25){
//     document.write("Please refill the fuel in your car" + "<br>");
// }
// else {
// document.write("You have enough fuel to go..." + "<br>");
// }
//document.write("//////////////////////////////// <br> <br>" );

//5.
// //a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// //The alert message will be displayed.

// //b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //The alert message will not be displayed because the condition b++ === 83 is false.

// //c.
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// //The alert messages "condition 2 is true" and "condition 4 is true" will be displayed.

// //d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// //The alert message will be displayed

// //e.
// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }
// //The alert message "True" will be displayed

// //f.
// if ("car" < "cat"){
//   alert("car is smaller than cat");
// }
// //The alert message will be displayed.

//document.write("//////////////////////////////// <br> <br>" );


// ///6.
// var totalMarks= prompt("Enter total marks of all 3 subjects (such as 300):");

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for subjrct1"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for subjrct2"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for subjrct3"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks )) * 100;

// document.write("<h2>MARKS SHEET </h2>");

// if(percentage  >= 80){
//   document.write("Total Marks :"+ " " + totalMarks + "<br>");
//   document.write("Obtained Marks :"+ " " + totalObtainedMarks + "<br>");
//   document.write("Percentage :"+ " " + percentage + "<br>");
//   document.write("Grade: A-one" + "<br>");
//   document.write("Remarks : Excellent" + "<br>");
 
// }
// else if (percentage >= 70){
//   document.write("Total Marks :"+ " " + totalMarks + "<br>");
//   document.write("Obtained Marks :"+ " " + totalObtainedMarks + "<br>");
//   document.write("Percentage :"+ " " + percentage + "<br>" );
//   document.write("Grade: A"+ "<br>");
//   document.write("Remarks : Good"+ "<br>");
// }
// else if (percentage >= 60){
//   document.write("Total Marks :"+ " " + totalMarks+ "<br>");
//   document.write("Obtained Marks :"+ " " + totalObtainedMarks+ "<br>");
//   document.write("Percentage :"+ " " + percentage+ "<br>");
//   document.write("Grade: B"+ "<br>");
//   document.write("Remarks : You need to Improve"+ "<br>");
// }
// else if (percentage < 60){
//   document.write("Total Marks :"+ " " + totalMarks+ "<br>");
//   document.write("Obtained Marks :"+ " " + totalObtainedMarks+ "<br>");
//   document.write("Percentage :"+ " " + percentage+ "<br>");
//   document.write("Grade: Fail"+ "<br>");
//   document.write("Remarks : Sorry"+ "<br>");
// }

//document.write("//////////////////////////////// <br> <br>" );

// //7. Guess game:
// document.write("<h2>GUESS GAME </h2>");
// var secretNumber = 7;
// var userGuess = prompt("Guess the secret number (between 1 and 10): " + "<br>");

// if (userGuess == secretNumber){
//     document.write("Bingo! Correct answer" + "<br>")}

// else if (userGuess == secretNumber + 1 , userGuess == secretNumber - 1){
//   document.write("Close enough to the correct answer" + "<br>")}

// else{
//   document.write("Sorry, incorrect guess" + "<br>")}
//   document.write("//////////////////////////////// <br> <br>" );

// ///8.
// var number = parseInt(prompt("Enter a number to check if its divisible by 3:"));

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else { 
//     alert("The number is not divisible by 3");
// }
// document.write("//////////////////////////////// <br> <br>" );

// ///9.

// var num = parseInt(prompt("Enter a number: "));
// var result = checkEvenOdd(num);

// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// alert("The number is " + result);

////10.
// var temp = parseFloat(prompt("Enter the temperature: "));
// var message = checkTemp(temp);

// function checkTemp(temperature) {
//   if (temperature > 40) {
//       return "It is too hot outside.";
//   } else if (temperature > 30) {
//       return "The Weather today is Normal.";
//   } else if (temperature > 20) {
//       return "Today's Weather is cool.";
//   } else if (temperature > 10) {
//       return "OMG! Today's weather is so Cool.";
//   } else {
//       return "The temperature is below 10 degrees.";
//   }
// }
// alert(message);

// ///11.
// var number1 = parseFloat(prompt("Enter the first number: "));
// var number2 = parseFloat(prompt("Enter the second number: "));
// var operator = prompt("Enter the operation (+, -, *, /, %): ");

// function calculate(num1, num2, operation) {
//   if (operation === "+") {
//       return num1 + num2;
//   } else if (operation === "-") {
//       return num1 - num2;
//   } else if (operation === "*") {
//       return num1 * num2;
//   } else if (operation === "/") {
//       if (num2 !== 0) {
//           return num1 / num2;
//       } else {
//           return "Error: Division by zero is not allowed.";
//       }
//   } else if (operation === "%") {
//       if (num2 !== 0) {
//           return num1 % num2;
//       } else {
//           return "Error: Division by zero is not allowed.";
//       }
//   } else {
//       return "Error: Invalid operation.";
//   }
// }

// var result = calculate(number1, number2, operator);
// alert("The result is: " + result);

//////////////////////*******///////////////////////////////
//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION

// ///1.
// var input = prompt("Enter a character: ");
// var charType = checkCharType(input);

// function checkCharType(character) {
//   var charCode = character.charCodeAt(0);
  
//   if (charCode >= 48 && charCode <= 57) {
//       return "Number";
//   } else if (charCode >= 65 && charCode <= 90) {
//       return "Uppercase Letter";
//   } else if (charCode >= 97 && charCode <= 122) {
//       return "Lowercase Letter";
//   } else {
//       return "Other Character";
//   }
// }
// alert("The character is: " + charType);

// ///2.
// var num1 = parseInt(prompt("Enter the first integer: "));
// var num2 = parseInt(prompt("Enter the second integer: "));

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//       return num1 + " is larger.";
//   } else if (num2 > num1) {
//       return num2 + " is larger.";
//   } else {
//       return "Both numbers are equal.";
//   }
// }
// var result = compareNumbers(num1, num2);
// alert(result);

    // var num1 = parseInt(prompt("Enter the first integer:"));
    // var num2 = parseInt(prompt("Enter the second integer:"));

    // if (num1 > num2) {
    // document.write("<h3>The larger number is: " + num1 + "</h3>");
    // }
    // else if (num2 > num1) {
    // document.write("<h3>The larger number is: " + num2 + "</h3>");
    // }
    // else {
    // document.write("<h3>The two integers are equal.</h3>");
    // }



// ///3.
// var input = parseFloat(prompt("Enter a number: "));
// var sign = checkNumberSign(input);

// function checkNumberSign(number) {
//   if (number > 0) {
//       return "Positive";
//   } else if (number < 0) {
//       return "Negative";
//   } else {
//       return "Zero";
//   }
// }

// alert("The number is " + sign);
//////////////////////
// // Prompt the user to enter a number
// var number = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive
// if (number > 0) {
// document.write("<h3>The number is positive.</h3>");
// }
// // Check if the number is negative
// else if (number < 0) {
// document.write("<h3>The number is negative.</h3>");
// }
// // If none of the above conditions match, the number is zero
// else {
// document.write("<h3>The number is zero.</h3>");
// } 

// ///4.
// var input = prompt("Enter a character: ");

// function isVowel(character) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   var lowerCaseChar = character.toLowerCase();
  
//   if (vowels.includes(lowerCaseChar)) {
//       return true;
//   } else {
//       return false;
//   }
// }

// if (input.length === 1) {
//   var result = isVowel(input);
//   alert(result);
// } else {
//   alert("Invalid input. Please enter a single character.");
// }

// //5.

// // A) Store the correct password
// var correctPassword = "password123";

// // B) Ask user to enter password
// var userPassword = prompt("Enter your password: ");

// // C)  Validate the passwords
// if (userPassword === "") {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }

// ///6.
// //correcet code:
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// //7.

// var time = parseInt(prompt("Enter the time (in 24-hour clock format): "));

// if (time >= 0 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2000) {
//     console.log("Good evening!");
// } else if (time >= 2000 && time <= 2359) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid time format. Please enter a time in 24-hour clock format.");
// }

//////////////////////*******///////////////////////////////
//ARRAY
//1.
var studentNames = [];

//2.
var studentNames = new Array();

//3.
var stringsArray = ["a", "b", "c", "d"];

//4.
var numbersArray = [1, 2, 3, 4, 5];

//5.
var booleanArray = [true, false, true, false];

//6.
var mixedArray = [7, "Heyyy", true, false , null, { name: "umaima", age: 21 }];

//7.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Qualifications:</h3>");
document.write("<ul>");

for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ul>");


//8.
var studentNames = ["Umaima", "Sawaira", "Ifra"];

var scores = [420, 380, 450];

var totalMarks = 500;
var percentages = [];

for (var i = 0; i < scores.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    percentages.push(percentage);
}

  document.write("Score of "+ " " + studentNames[0] + " " + "is" + " " + scores[0] + "." + " " + "Percentage: " + " " + percentages[0] + "%" + "<br>");
  document.write("Score of "+ " " + studentNames[1] + " " + "is" + " " + scores[1] + "." + " " + "Percentage: " + " " + percentages[1] + "%" + "<br>");
  document.write("Score of "+ " " + studentNames[2] + " " + "is" + " " + scores[2] + "." + " " + "Percentage: " + " " + percentages[2] + "%" + "<br>");

document.write("//////////////////////////////// <br> <br>" );

// ///9.
// var color = ["Red","Yellow","Green"]
// document.write(color+"<br/>");
// var beginning = prompt("Enter which color you want to add at the beginning of array")
// color.unshift(beginning)
// document.write(color+"<br/>");
// var ending = prompt("Enter which color you want to add at the ending of array")
// color.push(ending)
// document.write(color+"<br/>");
// color.shift()
// document.write(color+"<br/>");
// color.pop()
// document.write(color+"<br/>");
// var update =+prompt("At which index do you want to add color?")
// var newColor =+prompt(" which color do you want to add on that index?")
// color.splice(update,0,newColor)
// document.write(color+"<br/>");
// var dlete =+prompt("At which index do you want to delete color?")
// var colorDelete =+prompt(" which color do you want to delete on that index?")
// color.splice(dlete, colorDelete);
// document.write(color+"<br/>");


/////10.
// var scores = [320, 230, 480, 120];
// document.write("Scores of students: " + scores + "<br>");
// score.sort()
// document.write("Ordered Scores of students: " + scores + "<br>");

// document.write("//////////////////////////////// <br> <br>" );

/////11.
var cities = ["karachi", "lahore", "Islambad", "Quetta", "Peshawar"];

var selectedCities = [];

selectedCities = cities.slice(2, 4);

document.write("Cities list: <br> " + cities + "<br> <br>");
document.write("Selected Cities:  <br>" + selectedCities + "<br> <br>");

document.write("//////////////////////////////// <br> <br>" );


///12.
var arr = ["This", "is", "my", "cat"];
var result = arr.join(" ");

document.write("Array: <br> " + arr + "<br> <br>");
document.write("String: <br>" + result + "<br>");

document.write("//////////////////////////////// <br> <br>" );

/////13.
var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

document.write("//////////////////////////////// <br> <br>" );

///14.

var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")

document.write("//////////////////////////////// <br> <br>" );

///15.
var phone = ["apple","samsung","motorla","nokia","sony" , "haier"]
document.write(
    "<select>"+
    "<option>"+phone[0]+"</option>"+
    "<option>"+phone[1]+"</option>"+
    "<option>"+phone[2]+"</option>"+
    "<option>"+phone[3]+"</option>"+
    "<option>"+phone[4]+"</option>"+
    "</select>"
)
document.write(" <br> ////////////////////////////<br>");


//////////////////////*******///////////////////////////////
/////Arrays and loop

///1.
//Declare and initialize an empty multidimensional array.
//(Array of arrays)

// 1
var num = [[],[],[]]
/// 2
num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")
document.write("////////////////////////////");

///3
for (var i = 1; i <= 10; i++){
  document.write(i+"<br/>")
}
/// 4
// var table = +prompt("Enter a number  to show its multiplication table");
// var length = +prompt("Enter Multiplication table" );
// document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
// for(var i = 1; i <= length; i++){
//   document.write(table+" x "+i+" = "+table*i+"<br/>")
// }
// document.write("////////////////////////////  <br> <br>");

///5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var arr = fruits.length
for(var i = 0; i <arr; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}
document.write("////////////////////////////  <br> <br>");

/// 6
var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <=15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")
document.write("////////////////////////////  <br> <br>");

/// 7

// var a = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
// var b = a.indexOf(user)
// if(b<0){
//     alert("we are sorry"+user+"is not available in our bakery")
// }
// else{
//     alert(user+"is available at index "+b+" in our bakery") 
// }
// document.write("////////////////////////////  <br> <br>");

////8

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min
)
document.write("////////////////////////////  <br> <br>");

///9

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)
document.write("////////////////////////////  <br> <br>");

/// 10

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}
document.write("////////////////////////////  <br> <br>");

////////////////////******************///////////////////////
//
//String Methods 

// 1.
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "! Welcome.");
// document.write("////////////////////////////  <br> <br>");

//2.
//     var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
//     var inputLength = favoritePhoneModel.length;
// document.write("My favorite phone is: " + favoritePhoneModel);
//     document.write("Length of your input: " + inputLength);
//document.write("////////////////////////////  <br> <br>");

//3.
    var word = "Pakistani";
    var targetLetter = "n";
    var index = word.indexOf(targetLetter);
    document.write("String: " + word + "<br>");
    document.write("Index of '" + targetLetter  + "': " + index + "<br>");
    document.write("////////////////////////////  <br> <br>");

// 4.
    var word = "Hello World";
    var targetLetter = "l";
    var lastIndex = word.lastIndexOf(targetLetter)
    document.write("String: " + word + "<br>");
    document.write("Last index of  '" + targetLetter + "': " + lastIndex + "<br>");
    document.write("////////////////////////////  <br> <br>");

//5.
    var word = "Pakistani";
    var index = 3;  
    var character = word.charAt(index);
    document.write("Character at index " + index + " in the word '" + word + "': " + character + "<br>");
    document.write("////////////////////////////  <br> <br>");
  
//6.
  var name = "Hyderabad";
var change = name.replace("Hyder", "Islam");
document.write(change + "<br>");
document.write("////////////////////////////  <br> <br>");

// 7
var message = "Ali and Sami are best friends. They play cricket and football together";
var replace = message.replace(/and/g, "&");
document.write(replace + "<br>");
document.write("////////////////////////////  <br> <br>");

//8.
    var str = "472";
    var num = Number(str);
    document.write("String value: " + str + "<br>");
    document.write("String type: " + typeof str + "<br>");
    document.write("Number value: " + num + "<br>");
    document.write("Number type: " + typeof num + "<br>");
    document.write("////////////////////////////  <br> <br>");

  
// 9.
    // var userInput = prompt("Enter your input:");
  
    // var capitalizedInput = userInput.toUpperCase();
  
    // document.write("Input: " + userInput + "<br>");
    // document.write("Capitalized input: " + capitalizedInput + "<br>");
    //document.write("////////////////////////////  <br> <br>");

// 10.

// function main() {
   
//     var userInput = prompt("Enter your input:");
  
//     var titleCaseInput = toTitleCase(userInput);
  
//     console.log("Input: " + userInput);
//     console.log("Title case input: " + titleCaseInput);
//   }
  
//   function toTitleCase(str) {
    
//     var words = str.toLowerCase().split(" ");
  
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
  
//     var titleCaseStr = words.join(" ");
  
//     return titleCaseStr;
//   }
  
//   main();
  //document.write("////////////////////////////  <br> <br>");

// 11.
// function main() {
   
//     var username = prompt("Enter your username:");
  
//     var hasSpecialSymbols = checkSpecialSymbols(username);
  
//     while (hasSpecialSymbols) {
//       username = prompt("Please enter a valid username without special symbols ([@ . , !]):");
//       hasSpecialSymbols = checkSpecialSymbols(username);
//     }
  
//     document.write("Username: " + username + "<br>");
//   }
  
//   function checkSpecialSymbols(str) {
//     var specialSymbols = ['@', '.', ',', '!'];
  
//     for (var i = 0; i < specialSymbols.length; i++) {
//       if (str.indexOf(specialSymbols[i]) !== -1) {
//         return true;
//       }
//     }
  
//     return false;
//   }
  
//   main();
//document.write("////////////////////////////  <br> <br>");
  
// 12.
// function main() {
   
//     var password = prompt("Enter your password:");
  
//     var isValid = checkPasswordRequirements(password);
  
//     while (!isValid) {
//       password = prompt("Please enter a valid password:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long");
//       isValid = checkPasswordRequirements(password);
//     }
   
//     document.write("Password: " + password + "<br>");
//   }
  
//   function checkPasswordRequirements(password) {
   
//     var containsAlphabets = /[a-zA-Z]/.test(password);
//     var containsNumbers = /[0-9]/.test(password);
  
//     var startsWithLetter = isNaN(parseInt(password[0]));
  
//     var isLongEnough = password.length >= 6;
  
//     return containsAlphabets && containsNumbers && startsWithLetter && isLongEnough;
//   }
  
//   main();
//document.write("////////////////////////////  <br> <br>");

// 13.
    var university = "University of Karachi";
  
    var universityArray = university.split(" ");
  
    document.write("Original string: " + university + "<br>");
    document.write("Array elements: " + universityArray.join(", ") + "<br>");
    document.write("////////////////////////////  <br> <br>");

// 14.
    // var userInput = prompt("Enter your input:");
    // var lastCharacter = userInput[userInput.length - 1];
    // document.write("Last character: " + lastCharacter + "<br>");
    // document.write("////////////////////////////  <br> <br>");

// 15.
    var sentence = "The quick brown fox jumps over the lazy dog";
    var wordToCount = "the";
  
    var lowercaseSentence = sentence.toLowerCase();
    var lowercaseWord = wordToCount.toLowerCase();
  
    var words = lowercaseSentence.split(" ");
  
    var count = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i] === lowercaseWord) {
        count++;
      }
    }
  
    document.write("Number of occurrences of '" + wordToCount + "': " + count + "<br>");
    document.write("////////////////////////////  <br> <br>");



////////////////////******************///////////////////////
//MATH METHODS
// 1
// var input = parseFloat(prompt("Enter any positive integer that you want : "));
// document.write("<br>Number : "+input + "<br>");
// document.write("<br>Round off value : "+Math.round(input)+ "<br>");
// document.write("<br>Floor value : "+Math.floor(input)+ "<br>");
// document.write("<br>Ceil value : "+Math.ceil(input)+ "<br>");
//document.write("////////////////////////////  <br> <br>");

// 2
// var input = parseFloat(prompt("Enter any negative integer that you want : "));
// document.write("<br>Number : "+input + "<br>");
// document.write("<br>Round off value : "+Math.round(input)+ "<br>");
// document.write("<br>Floor value : "+Math.floor(input)+ "<br>");
// document.write("<br>Ceil value : "+Math.ceil(input)+ "<br>");
//document.write("////////////////////////////  <br> <br>");

//3
// function absoluteValue(num) {
//   if (num < 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }

// var num = parseFloat(prompt("Enter a number:"));
// var absValue = absoluteValue(num);
// document.write("The absolute value of " + num + " is " + absValue + "." + "<br>");
//document.write("////////////////////////////  <br> <br>");

//4
// var dice = Math.floor(Math.random()*6+1);
// document.write("random dice value: " +dice + "<br>");
//document.write("////////////////////////////  <br> <br>");

//5
// var coin = Math.floor(Math.random()*2+1);
// if(coin == 1){
//     document.write("random dice value: " + "Tails" + "<br>");
// }
// else if(coin == 2){
//     document.write("random dice value: " +"Heads" + "<br>")
// }
//document.write("////////////////////////////  <br> <br>");

//6
// var dice = Math.floor(Math.random()*99+1);
// document.write(dice + "<br>");
//document.write("////////////////////////////  <br> <br>");


// 7
// var input = parseFloat(prompt("Enter your Weight : "));
// var roundoff = Math.round(input);
// document.write("The weight of user is "+input.toFixed(1)+" Kilograms" + "<br>");
//document.write("////////////////////////////  <br> <br>");

//8
// var input = parseInt(prompt("Enter any number you want : "));
// var secretRandomNumber = Math.floor(Math.random()* 10 + 1);
// if(input == secretRandomNumber){
//     document.write("Congratulations ! The number that you have entered is found" + "<br>");
// }
// else if(input != secretRandomNumber){
//     document.write("Not found ! try Again" + "<br>");
// }
//document.write("////////////////////////////  <br> <br>");


////////////////////******************///////////////////////
//DATE METHODS
// Q01
// var date = new Date;
// document.write("<br/>"+"<br/>"+date + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q02
// var date = new Date;
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var _newDate = date.getMonth()
// document.write("<br/>"+"<br/>"+ months[_newDate] + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q03
// var date = new Date;
// var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var _newDate = date.getDay()
// document.write("<br/>"+"<br/>"+"Today is "+ week[_newDate] + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q04
// var date = new Date;
// var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var _newDate = date.getDay()
// var newday = week[_newDate]
// if (newday == "Sat" || "Wed" ){
//     document.write("<br/>"+"<br/>"+"It’s Fun day" + "<br>")
// }
//document.write("////////////////////////////  <br> <br>");

// Q05
// var date = new Date;
// var _newDay = date.getDate()
// if(_newDay <= 15){
//     document.write("<br/>"+"<br/>"+"First fifteen days of the month" + "<br>")
// }else{
//     document.write("<br/>"+"<br/>"+"last days of the month" + "<br>")
// }
//document.write("////////////////////////////  <br> <br>");

// Q06
// var date = new Date;
// var _newDay = date.getTime()
// var min = _newDay/1000
// var min1 = min/60
// document.write("<br/>"+"<br/>"+"Current Date: " + date + "<br>")
// document.write("<br/>"+"Elaped milliseconds since January 1, 1970: " + min + "<br>")
// document.write("<br/>"+"Elaped minutes since January 1, 1970: " + min1 + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q07
// var date = new Date;
// var _newDay = date.getHours()
// if(_newDay <= 12){
//     document.write("It's AM" + "<br>")
// }else{
//     document.write("It's PM" + "<br>")
// }
//document.write("////////////////////////////  <br> <br>");

// Q08
// var laterDate = new Date('12-31-2020')
// document.write("<br/>"+"<br/>"+laterDate+ "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q09
// var specidaydate = new Date('06-18-2015');
// var todaydate = new Date('03-22-2023');
// var a = (todaydate.getTime())
// var b = (specidaydate.getTime())
// var age_in_milSec = a-b;
// var sec  = Math.round(age_in_milSec/1000)
// var min  = Math.round(sec/60)
// var hour  = Math.round(min/60)
// var day  = Math.round(hour/24)
// document.write("<br/>","<br/>",day +" days have passed since 1st Ramdan, 2015" + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q10
// var specidaydate = new Date('01-01-2015');
// var todaydate = new Date('12-05-2015');
// var a = (todaydate.getTime())
// var b = (specidaydate.getTime())
// var age_in_milSec = a-b;
// var sec  = Math.round(age_in_milSec/1000)
// document.write("<br/>","<br/>","On reference date "+ todaydate + "<br>")
// document.write("<br/>",sec, " seconds had passed since begining of 2015" + "<br>")
//document.write("////////////////////////////  <br> <br>");

// Q11
// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setHours("10");
// document.write("<br>1 Hours ago on this same day : "+laterDay + "<br>");
//document.write("////////////////////////////  <br> <br>");

// Q12
// var todayDate = new Date();
// document.write("Current Date is : "+todayDate);
// var laterDay = new Date();
// var year = laterDay.setFullYear("1922");
// document.write("<br>100 years ago on this same day : "+laterDay + "<br>");
//document.write("////////////////////////////  <br> <br>");


// Q13
// var inp = +prompt("Enter Your Age")
// var date = new Date()
// var year = (date.getFullYear()-inp)
// document.write("<br/>","<br/>","Your age is "+ inp + "<br>");
// document.write("<br/>"+"Your birth year is "+ year + "<br>");
//document.write("////////////////////////////  <br> <br>");

// Q14
// var Name = prompt("Enter Your Name")
// var Unit = +prompt("Enter Your Number of Units")
// var charges = 16; 
// var late = 350;
// var date = new Date()
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var _newDate = date.getMonth()
// document.write("<br/>"+"<br/>"+"K-Electric Bill");
// document.write("<br/>"+"<br/>"+"Customer Name: "+ Name);
// document.write("<br/>"+"Month: "+ months[_newDate]);
// document.write("<br/>"+ "Number of units: " + Unit);
// document.write("<br/>"+ "Charges per unit: " + charges);
// document.write("<br/>"+"<br/>"+ "Net Amount Payable (within Due Date): "+ Unit*charges);
// document.write("<br/>"+ "Late payment surcharge: " + late);  
// document.write("<br/>"+ "Gross Amount Payable (after Due Date): " + ((Unit*charges)+late) + "<br>");
//document.write("////////////////////////////  <br> <br>");


////////////////////******************///////////////////////
//function
// Q01
// function date(){
//     var date = new Date;
//     document.write("<br/>"+"<br/>"+date + "<br>")
// }
// date()
//document.write("////////////////////////////  <br> <br>");

// Q02
// function name(){
//     var Fname = prompt("enter your First name");
//     var Lname = prompt("enter your Last name");
//     document.write("<br/>"+"<br/>"+"Assalam-o-Alaikum Mr. "+Fname +" " + Lname+" How are you Sir!")
//   }
//   name()
//document.write("////////////////////////////  <br> <br>");

//   Q03
// function sum(){
//     var a = +prompt("Enter first value");
//     var b = +prompt("Enter second value");
//     var c = (a+b);
//     return c;
// }
// document.write(sum())
//document.write("////////////////////////////  <br> <br>");

// Q04
// function newFunc(){

//     var num1 = +prompt("Enter First VAlue");
//     var operator = prompt("Enter Operator");
//     var num2 = +prompt("Enter Second VAlue");
    
//     if(operator == "+"){
//         document.write("<br/>"+"<br/>"+num1+num2)
//     }
//     else if(operator == "-"){
//         document.write("<br/>"+"<br/>"+num1-num2)
//     }
//     else if(operator == "*"){
//         document.write("<br/>"+"<br/>"+num1*num2)
//     }
//     else if(operator == "/"){
//         document.write("<br/>"+"<br/>"+num1/num2)
//     }
//     }
//     newFunc()
//document.write("////////////////////////////  <br> <br>");


// Q05
// function square(){
//     var inp = +prompt("Enter your argument");
//     return inp*inp;
// }
// document.write("<br/>"+"<br/>"+square())
//document.write("////////////////////////////  <br> <br>");

// Q06
// function fact(){
//     var number = +prompt("Enter a positive integer: ");
//     if (number === 0) {
//         document.write("<br/>"+"<br/>"+"The factorial of "+number+" is 1.");
//     }
//     else {
//         var fact = 1;
//         for (i = 1; i <= number; i++) {
//             fact *= i;
//         }
//         document.write("<br/>"+"<br/>"+"The factorial of "+number+" is "+fact);
//     }
//     }
//     fact()
//document.write("////////////////////////////  <br> <br>");

// Q07
// function fact(){
// var fvalue = +prompt("Enter starting number");
// var evalue = +prompt("Enter ending number");

// for(var i=fvalue; i<=evalue; i++){
//     document.write("<br/>"+"<br/>"+i)
// }
// }
// fact()
//document.write("////////////////////////////  <br> <br>");

// Q08
// function multi(){
//     var base = +prompt("Enter Value of Base");
//     var perp = +prompt("Enter Value of Perpendicular");
    
//         function square(){
//             var basee = (base*base)
//             var perpen = (perp*perp)
//             var hypo = (basee+perpen)
    
           
//             document.write("<br/>"+"<br/>"+hypo)
//     }
//     square()
//     }
//     multi()
//document.write("////////////////////////////  <br> <br>");

// Q09
//     function A()
// {
//     var wid = +prompt("Enter Width");
//     var heig = +prompt("Enter Height");
//     var A = (wid*heig)
//     return A;
// }
// document.write("<br/>"+"<br/>"+A())
//document.write("////////////////////////////  <br> <br>");

// Q10

// var input = prompt("Enter the string that you want to check : ");
// input = input.toLowerCase();
// function checkPalindrome(){
//     var mustafa = input.split("");
//     var kashif = mustafa.reverse("");
//     var join = kashif.join("");
//     if(input == join){
//         document.write("The word "+" "+input+" "+"is palindrome");
//     }
//     else{
//         document.write("The word"+" "+input+" "+"is not a palindrome");
//     }
// }
// checkPalindrome();
//document.write("////////////////////////////  <br> <br>");

// Q11

// var inputString = prompt("Enter any String that you want to capitalize : ");
// function stringCapitalize(){
//     var stringSplit = inputString.split(" ");
    
//     for (let i = 0; i < stringSplit.length; i++) {
//         stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].substr(1);
//     }
//     stringSplit.join(" ");
//     var string = stringSplit.toString();
//     var repl = string.replace(/,/g," ");
//     document.write(repl)
// }
// stringCapitalize();
//document.write("////////////////////////////  <br> <br>");

// Q13
// var string = prompt("Enter any sentence that you want to enter : ");
// var findOut = prompt("Enter any chracter that you want to find out from your entered string : ");
// function findingStrings(){
//     var st = string.toLowerCase();
//     var find = findOut.toLowerCase();
//     var count = st.split(find).length-1;
//     document.write("The letter"+" "+findOut+" "+"appears"+" "+count+" "+"times in the given array");   
// }
// findingStrings();
//document.write("////////////////////////////  <br> <br>");

// Q14
// var radius = parseInt(prompt("Enter the radius of the circle : "));
// function calCircumference(){
//       var circumference = 2 * 3.142 * radius;
//       document.write("The circumference of circle is : "+circumference);
// }
// function calArea(){
//      var area = 3.142 * (radius * radius);
//      document.write("The Area of the circle is : "+area);
// }
// calCircumference();
// document.write("<br>");
// calArea();
//document.write("////////////////////////////  <br> <br>");

//////////////////**********************//////////////////////////
//FUNCTIONS| SWITCH | WHILE.. DO-WHILE 
//1.
// function power(a, b) {
//     var result = 1;
  
//     for (var i = 0; i < b; i++) {
//       result *= a;
//     }
  
//     return result;
//   }
//   function main() {
    
//     var base = parseFloat(prompt("Enter the base number:"));
//     var exponent = parseInt(prompt("Enter the exponent:"));
  
//     var result = power(base, exponent);
  
//     document.write(base + " raised to the power of " + exponent + " is:", result + "<br>");
//   }
//   main();

//2.
// alert("started")
// function leapYear(y){
//     if(y%4===0 && (y%100!==0 ||y % 400 == 0)){
//         console.log(y + " is a leap year")
//     }else{
//         document.write(y + " is not a leap year" + "<br>");

//     }
// }

// leapYear(2023)

//3.
// function sides(a,b,c){
//     var S=(a+b+c)/2
//     document.write(S);
//     var area=(S*(S-a)*(S-b)*(S-c))
//     document.write(Math.sqrt(area));
// }
// sides(2,3,2)


//4.
// function findIndexOf(array,findOf){
//     x=0
//     for (var i=0; i<= array.length ; i++){
//         if(array[i]===findOf){
//             alert(`the index of ${findOf} is ${i}`)
//             x=1
//         }
//     }
//     if(x!=1){
//         alert(`the index of ${findOf} is -1`)
//     }
    
// }
// var li=['a','b','c','d','e','f']
// findIndexOf(li,"l")

//5.
// function RemoveVowel(string){
//     var checkPoint="";
//     string=string.toLowerCase()
//     for(var i=0; i<string.length; i++){
//         if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u"){
//             checkPoint+=string[i]
//         }
//     }
//     return checkPoint
// }
// document.write(RemoveVowel("hello This IS Umaima" + "<br>"));

//6.
// function occuranceOfvowel(str){
//     str=str.toLowerCase().split('')
//     console.log(str)
//     for (var i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
//             if(str[i+1]==="a" || str[i+1]==="e" || str[i+1]==="i" || str[i+1]==="o" || str[i+1]==="u" ){
//                 console.log(str[i] , str[i+1])
//             }
//         }
//     }
// }
// occuranceOfvowel('Pleases read this application and give me gratuity')

//7.
// function convertToMeters(distance) {
//     return distance * 1000;
//   }
//   function convertToFeet(distance) {
//     return distance * 3280.84;
//   }
//   function convertToInches(distance) {
//     return distance * 39370.1;
//   }
//   function convertToCentimeters(distance) {
//     return distance * 100000;
//   }
//   function main() {
    
//     var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//     var distanceInMeters = convertToMeters(distanceInKilometers);
//     console.log("Distance in meters:", distanceInMeters);
  
//     var distanceInFeet = convertToFeet(distanceInKilometers);
//     console.log("Distance in feet:", distanceInFeet);

//     var distanceInInches = convertToInches(distanceInKilometers);
//     console.log("Distance in inches:", distanceInInches);

//     var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
//     console.log("Distance in centimeters:", distanceInCentimeters);
//   } 
//   main();

// 9.
// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
  
    
//     if (hoursWorked > regularHours) {
//       var overtimeHours = hoursWorked - regularHours;
//       var overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     } else {
//       return 0;
//     }
//   }
  

//   function main() {
    
//     var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
   
//     var overtimePay = calculateOvertimePay(hoursWorked);
  

//     console.log("Overtime Pay: Rs.", overtimePay.toFixed(2));
//   }
  

//   main();

// 10.
// function calculateCurrencyNotes(amount) {
//     var hundredNotes = Math.floor(amount);
//     var fiftyNotes = Math.floor((amount % 1) * 10 / 5);
//     var tenNotes = Math.floor(((amount % 1) * 10) % 5);
  
//     document.write("Number of 100 notes:", hundredNotes + "<br>");
//     document.write("Number of 50 notes:", fiftyNotes + "<br>");
//     document.write("Number of 10 notes:", tenNotes + "<br>");
//   }
  

//   function main() {
  
//     var amount = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  
//     calculateCurrencyNotes(amount);
//   }
  
//   main();



/////////////***********////////////////////
//EVENTS
//1.
function showAlert() {
    alert("Link clicked!");
  }
  document.write("<br> ////////////////////// <br>");

//2.
function showMessage(message) {
    alert(message);
}
document.write("<br> ////////////////////// <br>");

//3.
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.remove();
  }
  document.write("<br> ////////////////////// <br>");

  //4.


  //EVENTS
  //1.
//   var signupForm = document.getElementById('signupForm');
//     var formDataDiv = document.getElementById('formData');

//     signupForm.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent form submission

//       var name = document.getElementById('name').value;
//       var email = document.getElementById('email').value;
//       var password = document.getElementById('password').value;

//       var formData = "<p>Name: " + name + "</p><p>Email: " + email + "</p><p>Password: " + password + "</p>";
//       formDataDiv.innerHTML = formData;
//     });





////////////////////////////////////////////////
  //chapter 16
  function deleteRow(e){
    var pr=e.parentNode.parentNode
    pr.remove()
}
var img=document.getElementById('img')
function imageChange(){
    img.src='https://www.pakmobizone.pk/wp-content/uploads/2019/12/VgoTel-Smart-7-Blue-1.jpg'
}

function restoreImage(){
     img.src='https://static.toiimg.com/thumb/msid-70072353,width-640,resizemode-4/70072353.jpg'

}
var counter=document.getElementById('counter').innerHTML

function increment(){
    counter=parseInt(counter)+1
    document.getElementById('counter').innerHTML=counter
}

function decrement(){
    counter=parseInt(counter)-1
    document.getElementById('counter').innerHTML=counter

}

//chpter 17
function submit(){
    var name= document.getElementById('name')
    var email= document.getElementById('email')
    alert("your name is "+name.value)
    alert("your email is "+email.value)
}


function seemore(){
    var seemore=document.getElementById('seemore')
    var btn=document.getElementById('btn')
    if(btn.innerHTML==="see more"){
        seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
        console.log(seemore)
        document.getElementById('seemore').innerHTML=seemore
        btn.innerHTML="see less"
        btn.style.color="red"
    }else{
        seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
        console.log(seemore)
        document.getElementById('seemore').innerHTML=seemore
        btn.innerHTML="see more"
        btn.style.color="aqua"

        
    }

}

//chapter 18


//chapter19
alert("please open the console and find the out puts")
var mianContent=document.getElementById('main-content')
for (var i = 0; i < mianContent.childNodes.length; i++) {
     if (mianContent.childNodes[i].nodeType === 1 ) {
         console.log(mianContent.childNodes[i].nodeName)
    }
    
}

var render=document.getElementsByClassName('render')
for(var i=0; i<render.length; i++){
    console.log(render[i].firstChild)
}
document.getElementById('first-name').value="First Name"
document.getElementById('last-name').value="Last Name"
document.getElementById('email').value="mail@mail.com"

var formContent=document.getElementById('form-content')
console.log("form-content node type is ",formContent.nodeType)
var lastName=document.getElementById('lastName')
console.log("the node type of lastName is ",lastName.nodeType)

console.log("lastName having first child of node type" , lastName.firstChild)
lastName.textContent="Node Updated"
lastName.style.color="red"

var len=mianContent.length

console.log("mianContent having first child of node type" , mianContent.firstElementChild.innerHTML)

console.log("mianContent having last child of node type" , mianContent.lastElementChild.innerHTML ) 

console.log("lastName having next child of node type" , lastName.nextElementSibling)

console.log("lastName having previous child of node type" , lastName.previousElementSibling)
