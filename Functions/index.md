---
layout: layouts/base.njk
title: Functions
templateClass: tmpl-post
eleventyNavigation:
  key: Function and Control Flow
  order: 2
  parent: JavaScript
---
<div class="container ml-2 mt-4">
  <h1>Basic JavaScript Tasks</h1>
  <h2>Functions and Control Flow</h2> 
  <p>Open the  console to view the results</p> 
</div>
      <!--What number is bigger?-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>What number is bigger?</h3>
        Write a function that compares two numbers and returns the larger one. Be sure to try it out with 
        some different numbers. Bonus: add error messages if the numbers are equal or cannot be compared.
        Don’t forget to test it!
      </pre>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Input two numbers</span>
        <input type="number" class="form-control"  id="number1">
        <input type="number" class="form-control"  id="number2">
      </div>
      <h3 id="result"></h3>
      <button id="CompareBtn"class="btn btn-primary small " type="submit" >Compares two numbers </button> <br>
    </div>
  </div>
</div>
<hr>
<!--The Fortune Teller: With Functions!-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>The Fortune Teller: With Functions!</h3>
        Let’s turn one of the Class 1 Exercises into a function.
        Write a function named tellFortune that:
        takes 4 arguments: number of children, partner’s name, geographic location, job title.
        outputs your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
        Call that function 3 times with 3 different values for the arguments.
      </pre>
      <h3 id="fortune"></h3>
      <button id="tellFortuneBtn"class="btn btn-primary small " type="submit" > Tell Fortune </button> <br>
    </div>
  </div>
</div>
<hr> 
 <!--The Calculator-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>The Calculator</h3>
        1. Write a function called squareNumber that will take one argument (a number), square that number, 
        and return the result.
        It should also log a string like “The result of squaring the number 3 is 9.”
        2. Write a function called halfNumber that will take one argument (a number), divide it by 2, and 
        return the result. It should also log a string like “Half of 5 is 2.5.”.
        3. Write a function called percentOf that will take two numbers, figure out what percent the first 
        number represents of the second number, and return the result. It should also log a string like 
        “2 is 50% of 4.”
        4. Write a function called areaOfCircle that will take one argument (the radius), calculate the area
        based on that, and return the result. It should also log a string like “The area for a circle 
        with radius 2 is 12.566370614359172.”
          - Bonus: Round the result so there are only two digits after the decimal.
        Write a function that will take one argument (a number) and perform the following operations, using
         the functions you wrote earlier:
        1. Take half of the number and store the result.
        2. Square the result of #1 and store that result.
        3. Calculate the area of a circle with the result of #2 as the radius.
        4. Calculate what percentage that area is of the squared result (#3).
      </pre>
      <div class="col-md-6">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Input a number ( an argument)</span>
        <input type="number" class="form-control"  id="argument">
      </div>
      </div>
      <div class="btn-group mx-5" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-secondary" id="squareBtn">X <sup>2</sup></button>
        <button type="button" class="btn btn-outline-secondary" id="halfBtn">1/2</button>
        <button type="button" class="btn btn-outline-secondary" id="percentBtn">%</button>
        <button type="button" class="btn btn-outline-secondary" id="CirclesAreaBtn">Circles area</button>
      </div>
      <button type="button" class="btn btn-outline-secondary" id="roundResultBtn">Round result</button>
      <h3 id="calculatorResult"></h3>
    </div>
  </div>
</div>
<hr>

<script>
  //function from task 2
  function message(){
    console.log('This  is a message');
  };
  //function from task 2
  function fullNameGenerator1(firstName, lastName){
    var fullName=firstName + ' ' + lastName;
    console.log(fullName);
  };
  //function from task 2
  function fullNameGenerator2(firstName, lastName){
    var fullName=firstName + ' ' + lastName;
    return fullName;
  };
   console.log('Task 1 one below');
   console.log('-------');
   message();
   console.log('-------');
   console.log('Task 1 above');
   /*
   *
   */
   console.log('Task 2 one below');
   console.log('-------');
   var fName = 'Olena';
   var lName = 'Sakhno';
   fullNameGenerator1(fName, lName);
   console.log('-------');
   console.log('Task 2 above');
   /*
   *
   */
   console.log('Task 3 one below');
   console.log('-------');
   var fName = 'Olena';
   var lName = 'Sakhno';
   var fullName = fullNameGenerator2(fName, lName);
   console.log(fullName);
   console.log('-------');
   console.log('Task 3 above');
  /*
   *
   */
  //function from task 4
  function wearCoatExtra(temperature){
    var strMessage;
    if (temperature < 10) {
      strMessage = 'You  need to wear a coat and a hat!';
    }
    else if (temperature < 15){
       strMessage =  'You need a coat';
    }
    if(!strMessage){
      strMessage = 'You don\'t need to wear a coat!'
    }
    return strMessage;
  };
  console.log(wearCoatExtra(-1));
  console.log(wearCoatExtra(15));
  console.log(wearCoatExtra(9));


</script>
<script>
//    What number is bigger?
function bigerNumber(a,b){
   let res;
   if (a>b){
   res = a;
  }
  else if (b>a){
    res = b;
  }
  else {
    res = 'Numbers are equal';
  } 
  document.querySelector('#result').innerHTML = res;
  document.querySelector('#result').setAttribute("class", "alert-warning border mx-5 text-center");
};
let CompareBtn = document.querySelector('#CompareBtn');
CompareBtn.onclick = function(){
  let c = document.querySelector('#number1').value;
  let d= document.querySelector('#number2').value; 
  bigerNumber(c,d);
  };
//    The Fortune Teller: With Functions!
function tellFortune(){
  let max = 3; // 4 elements in arrays
  let min = 0
  let PartnersName = ["Vlad", "Alexandr", "Victor", "George"];
  let location = ["Leeds", "Kyiv", "Edinburgh", "Barcelona"];
  let jobTitle = ["Web Developer", "Network Engineer", "Illustrator", "Dancer"];
  let n = Math.floor(Math.random() * (max - min + 1) ) + min;
  let p = Math.floor(Math.random() * (max - min + 1) ) + min;
  let l = Math.floor(Math.random() * (max - min + 1) ) + min;
  let j = Math.floor(Math.random() * (max - min + 1) ) + min;
  let outString2 = "You will be a " + jobTitle[j] + " in " + location[l]  + ", and married to " + PartnersName[p] + " with "+ n +" kids";
  return outString2;
}
let tellFortuneBtn = document.querySelector('#tellFortuneBtn');
tellFortuneBtn.onclick = function(){
  document.querySelector('#fortune').innerHTML = tellFortune();
  document.querySelector('#fortune').setAttribute("class", "alert-warning border mx-5 text-center");
}


//The Calculator
let halfBtn = document.querySelector('#halfBtn');
let squareBtn = document.querySelector('#squareBtn');
let percentBtn = document.querySelector('#percentBtn');
let CirclesAreaBtn = document.querySelector('#CirclesAreaBtn');
function calculatorOutput(result){
  document.querySelector('#calculatorResult').innerHTML = result;
  document.querySelector('#calculatorResult').setAttribute("class", "alert-warning border mx-5 text-center");
}
    //squareNumber
function squareNumber(number){
  let result = number*number;
  calculatorOutput(result);
}  
squareBtn.onclick = function(){
  let number = document.querySelector('#argument').value;
  squareNumber(number);
}
    // halfNumber
function halfNumber(number){
  let result = number/2;
  calculatorOutput(result);
}  
halfBtn.onclick = function(){
  let number = document.querySelector('#argument').value;
  halfNumber(number);
}
    //percentOf
function percentOf(number, percent){
  let result = number*percent/100;
  calculatorOutput(result);
}
percentBtn.onclick = function(){
  let number = document.querySelector('#argument').value;
  let percent = prompt("input %", 0);
  percentOf(number, percent);
}
    //areaOfCircle
function areaOfCircle(number){
  let result = Math.PI*number*number;
  calculatorOutput(result);
  let roundResultBnt= document.querySelector('#roundResultBnt');
  roundResultBtn.onclick = function() {
    let roundRes = Math.round(result*100)/100;
    calculatorOutput(roundRes);
  }
}
CirclesAreaBtn.onclick = function(){
  let number = document.querySelector('#argument').value;
  areaOfCircle(number);
}



</script>