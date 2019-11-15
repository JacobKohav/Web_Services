function display2_1() {
  var myanswer  = "Console Log Function: 1. 'var saiyan = {name: 'San Goku', age: 40};' Result: undefined 2. 'console.log(null == undefined);' Result: True \n 3. 'console.log(null === undefined);' Result: False Explanation 2/3: 2. Comparing 'null' to 'undefined' by '==' compared the values of the two values: 'null' and 'undefined' are equal values. The result of True. 3. However, comparing 'null' and 'undefined' through '===' compared the value and the type, though 'null' and 'undefined' are the same value, 'null' and 'undefined' and not the same type. The result is False. " // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
  var saiyan = {name: 'San Goku', age: 40};
  // console.log(saiyan.dragonball);
  // console.log(null == undefined);
  // console.log(null === undefined);
}
function display2_2() {
  var myanswer  = "The code must be written in 'strict mode' when 'use strict' is in the beginning of a function. Undeclared variables such as 'x' in this case are not allowed. The result will be an error from the Javascript. Without the 'use strict' the undeclared variable is allowed." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
  "use strict";
  // x = 3.14;
  // console.log(x)
}

function display2_5() {
  var myanswer  = "1. Find the Tag with Element ID 'div_1134' by searching with getElementbyId(). 2. View the children of the element using the 'children' attribute." // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change
}

function makeOrange() { // Do not add or remove lines to this function
    // console.log(document.getElementsByTagName('Naruto'));
    // console.log(document.getElementsByName('naruto'));
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    // console.log(document.getElementsByName('naruto'));
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById('div_1134').children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  // console.log(document.getElementById('div_1134').children);
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}
