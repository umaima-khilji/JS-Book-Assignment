
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

document.write("/////////////////////");


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
 var visitorName = "John Doe";
 var productTitle = "T-shirt";
 var quantity = 5;

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
// // Initialize the array with color names
// var colors = ["Red", "Green", "Blue"];

// // Display the array elements in the browser
// document.write("<h3>Original Array:</h3>");
// document.write(colors.join(", "));

// // a. Ask the user to add a color to the beginning of the array
// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);

// // Display the updated array
// document.write("<h3>Updated Array (Added at the Beginning):</h3>");
// document.write(colors.join(", "));

// // b. Ask the user to add a color to the end of the array
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);

// // Display the updated array
// document.write("<h3>Updated Array (Added at the End):</h3>");
// document.write(colors.join(", "));

// // c. Add two more colors to the beginning of the array
// colors.unshift("Yellow", "Orange");

// // Display the updated array
// document.write("<h3>Updated Array (Added Two Colors at the Beginning):</h3>");
// document.write(colors.join(", "));

// // d. Delete the first color in the array
// colors.shift();

// // Display the updated array
// document.write("<h3>Updated Array (Deleted First Color):</h3>");
// document.write(colors.join(", "));

// // e. Delete the last color in the array
// colors.pop();

// // Display the updated array
// document.write("<h3>Updated Array (Deleted Last Color):</h3>");
// document.write(colors.join(", "));

// // f. Ask the user to add a color at a specific position/index
// var indexToAddColor = prompt("Enter the index where you want to add a color:");
// var colorToAddIndex = prompt("Enter the color name to add at the specified index:");
// colors.splice(indexToAddColor, 0, colorToAddIndex);

// // Display the updated array
// document.write("<h3>Updated Array (Added Color at Specific Index):</h3>");
// document.write(colors.join(", "));

// // g. Ask the user to delete color(s) from a specific position/index
// var indexToDeleteColor = prompt("Enter the index from where you want to delete color(s):");
// var numberOfColorsToDelete = prompt("Enter the number of colors to delete from the specified index:");
// colors.splice(indexToDeleteColor, numberOfColorsToDelete);

// // Display the updated array
// document.write("<h3>Updated Array (Deleted Color(s) from Specific Index):</h3>");
// document.write(colors.join(", "));



/////10.
var scores = [320, 230, 480, 120];

document.write("Scores of students: " + scores + "<br>");

scores.sort(function(a, b) {
  return a - b;
});

document.write("Ordered Scores of students: " + scores + "<br>");
document.write("//////////////////////////////// <br> <br>" );

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
// // var fifoArray = [keyboard, mouse, printer, moniter];
var fifoArray = [];

fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("moniter");

var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var fourthValue = fifoArray.shift();

document.write("Out: " + firstValue + "<br>");
document.write("Out: " + secondValue + "<br>");
document.write("Out: " + thirdValue + "<br>");
document.write("Out: " + fourthValue + "<br>");

document.write("//////////////////////////////// <br> <br>" );

///14.
// // var fifoArray = [keyboard, mouse, printer, moniter];
var lifoArray = [];

lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("moniter");

var firstValue = lifoArray.pop();
var secondValue = lifoArray.pop();
var thirdValue = lifoArray.pop();
var fourthValue = lifoArray.pop();

document.write("Out: " + firstValue + "<br>");
document.write("Out: " + secondValue + "<br>");
document.write("Out: " + thirdValue + "<br>");
document.write("Out: " + fourthValue + "<br>");

document.write("//////////////////////////////// <br> <br>" );

///15.
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdownMenu = "<select>";

for (var i = 0; i < manufacturers.length; i++) {
  dropdownMenu += "<option>" + manufacturers[i] + "</option>";
}

dropdownMenu += "</select>";

document.write(dropdownMenu);
