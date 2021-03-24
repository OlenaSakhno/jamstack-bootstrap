---
title: Loops, arrays and objects
date: 2021-03-12
layout: layouts/base.njk
eleventyNavigation:
  key: Loops, arrays and objects
  order: 5
  parent: JavaScript
---

<!--Even/Odd Counter-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>Even/Odd Counter</h3>
       Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current 
       number is even or odd, and report that to the screen (e.g. “2 is even”)
      </pre>
      <button id="iterateBtn"class="btn btn-primary small " type="submit" >Start iteration </button> <br>
      <h3 id="report">Report</h3>
      <div class="even"></div>
      <div class="odd"></div>
    </div>
  </div>
</div>
<hr>
<!--The Reading List-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>The Reading List</h3>
        Keep track of which books you read and which books you want to read!
        Create an array of objects, where each object describes a book and has properties for the title 
        (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
        Iterate through the array of books. For each book, log the book title and book author like so: 
        “The Hobbit by J.R.R. Tolkien”.
        Now use an if/else statement to change the output depending on whether you read it yet or not. 
        If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not, 
        log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’
      </pre>
      <button id="readingBtn"class="btn btn-primary small " type="submit" >Show The Reading List </button> <br>
      <div id="readingList"></div>
    </div>
  </div>
</div>
<hr>
<!--Recipe-->
<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>Recipe</h3>
        Create an object to hold information on your favourite recipe. It should have properties for:
          1. recipeTitle (a string)
          2. servings (a number)
          3. ingredients (an array of strings)
          4. directions (a string)
        Try displaying some information about your recipe.
        Bonus: Create a loop to list all the ingredients.
        Function
        Add a function called letsCook that says “I’m hungry! Let’s cook…” with the name of your recipe title.
        Call your new method.
      </pre>
      <div id="recipe">
        <h4 id="recipeTitle"></h4>
      </div>
      <button id="letsCookBtn"class="btn btn-secondary small " type="submit" > Lets Cook Function</button> <br>
      <div class="letsCookFunction"></div>
    </div>
  </div>
</div>
<hr>

<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
        <h3>Mean, Median, Mode</h3>
        Insert a sequence of numbers separated by commas 
        For examples:
          1,2,3,4,5,6,7,8,9
          1,2,3,2,3,2,5,6,6,4,3,1,5,4,3
          1,108,55,77,2,3 
          1,-108,55,77,2,3, 25, 108 
        <input type="text" class="form-control"  id="array">
      </pre>
      <div class="btn-group mx-5" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-secondary" id="MeanBtn">Mean</button>
        <button type="button" class="btn btn-outline-secondary" id="MedianBtn">Median</button>
        <button type="button" class="btn btn-outline-secondary" id="ModeBtn">Mode</button>
      </div>
      <div id="MMMResult" class="alert-warning border  text-center mt-3"></div>
    </div>
  </div>
</div>



<script>
for(var i = 1; i <= 12; i++){
  console.log(`${i} x 7 = ${i*7}`); // ` it is not '
}

/*for ( var i= 1; i<=12; i++){
  var result = i*7;
  console.log(result);
} */

for (var i = 1; i <= 12; i++) {
  for (var j = 1; j <= 12; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

let myFavoruteFood = [
  'salmon caviar',
  'meat',
  'tomato',
  'olives'
];
console.log('Some of my favorite food are: ');
for(var x=0; x<=3; x++){
  console.log(myFavoruteFood[x])
}
  
//Task4 Recipe

let myRecipe = {
  title: 'Chicken noodles',
  servings: 2,
  ingredients: ['chicken', ' onions', ' garlic', ' noodles'],
  directions: ['Fry the chicken', ' add the onin and garlic', ' add noodles'],
  letsCook: function(title){
    document.querySelector('.letsCookFunction').innerHTML = '<br><i><b>I am hungry! Lets cook ' + this.title +'!</b></i>'; //this.title = myRecipe.title
  } 
}
let outTitle = (`<b>${myRecipe.title}</b>` + '<br>');
let outServings = (`<b>Serves:</b> ${myRecipe.servings}` + '<br>');
let outIngredients = (`<b>Ingredients:</b> ${myRecipe.ingredients}` + '<br>');
document.querySelector('#recipeTitle').insertAdjacentHTML('beforeEnd', outTitle);
document.querySelector('#recipe').insertAdjacentHTML('beforeEnd', outServings);
document.querySelector('#recipe').insertAdjacentHTML('beforeEnd', outIngredients);
//Itteration of object's properties
let outDirection = '<b>Directions:</b> <br>';
document.querySelector('#recipe').insertAdjacentHTML('beforeEnd', outDirection);
let outDirections;
for (i=0; i<myRecipe.directions.length; i++){
  outDirections = `${[i+1]}` + '.' + `${myRecipe.directions[i]}` + '<br>';
  document.querySelector('#recipe').insertAdjacentHTML('beforeEnd', outDirections)
};
let letsCookBtn = document.querySelector('#letsCookBtn');
letsCookBtn.onclick = function(){myRecipe.letsCook(myRecipe.letsCook);}


</script>

<script>
// Even/Odd Counter
iterateBtn = document.querySelector('#iterateBtn');
iterateBtn.onclick = function(){
  let outStr;
  for(i=0; i<=20; i++){
    if (i % 2 == 0){
      outStr = "<p class='outStr'>" + i + " is even</p>";
      document.querySelector('.even').insertAdjacentHTML('beforeEnd', outStr);
    }
    else{
      outStr = "<p class='outStr'>" + i + " is odd</p>";
      document.querySelector('.odd').insertAdjacentHTML('beforeEnd', outStr);
    }
  }
}
//The Reading List
let book =[
  {
    title: 'MaddAddam',
    author:'Margaret Atwood',
    alreadyRead: false
  },
  {
    title: 'Oryx and Crake ',
    author:'Margaret Atwood',
    alreadyRead: true
  },
  {
    title: 'The Road  ',
    author:' Cormac McCarthy',
    alreadyRead: true
  },
  {
    title: 'Beartown  ',
    author:' Fredrik Backman',
    alreadyRead: false
  }
];
let readingBtn = document.querySelector('#readingBtn');
let OutStr;
readingBtn.onclick = function(){
  for(i=0; i<book.length; i++){
    if(book[i].alreadyRead){
      outStr=`You already read ${book[i].title} by ${book[i].author}` + '<br>';
    }
    else{
      outStr =(`You still need to read ${book[i].title} by ${book[i].author}` + '<br>')
    }
  document.querySelector('#readingList').insertAdjacentHTML('beforeEnd', outStr);
  }
  document.querySelector('#readingList').setAttribute("class", "readingList");
}

// Get the cart total

let shoppingCart = [
    {
        name:"loaf of bread",
        type:"food",
        quantity:1,
        price:.85
    },
    {
        name:"multipack beans",
        type:"food",
        quantity:2,
        price:1
    },
    {
        name:"mushrooms",
        type:"food",
        quantity:10,
        price:.1
    },
    {
        name:"can of beer",
        type:"alcohol",
        quantity:4,
        price:1.1
    },
    {
        name:"prosecco",
        type:"alcohol",
        quantity:1,
        price:8.99
    },
    {
        name:"steak",
        type:"food",
        quantity:2,
        price:3.99
    },
    {
        name:"blue cheese",
        type:"food",
        quantity:1,
        price:2.99
    },
    {
        name:"candles",
        type:"home",
        quantity:3,
        price:1.99
    },
    {
        name:"cheesecake",
        type:"food",
        quantity:1,
        price:4.99
    },
    {
        name:"onions",
        type:"food",
        quantity:3,
        price:.4
    },
];
function ShoppingTotal(cart, di){
  let totalPrice=0;
  for(let i=0; i<cart.length; i++){
      let itemPrice = cart[i].price;
      if(cart[i].type === "food"){
        itemPrice = 0.8 * itemPrice; //20% discount
      }
      totalPrice += itemPrice * cart[i].quantity;
  }
  return totalPrice.toFixed(2);
};
console.log('Total price is ' + ShoppingTotal(shoppingCart) + 'with 20% discount on food');


function ShoppingTotalBetter(cart, discountAmount, type){
  let totalPrice=0;
  for(let i=0; i<cart.length; i++){
      let itemPrice = cart[i].price;
      if(cart[i].type === type){
        itemPrice = (100- discountAmount)/100 * itemPrice; //20% discount
      }
      totalPrice += itemPrice * cart[i].quantity;
  }
  return totalPrice.toFixed(2);
};
console.log('Total price with discount on home is ' + ShoppingTotalBetter(shoppingCart, 10, 'home'));
console.log('Total price with discount on food is ' + ShoppingTotalBetter(shoppingCart, 5, 'food'));
console.log('Total price with discount on alcohol is ' + ShoppingTotalBetter(shoppingCart, 20, 'alcohol'));


function ted(cart, lowPrice, highPrice, quantity ){
  let arrItems = [];
  for(let i=0; i<cart.length; i++){
    if (quantity === true){
      let itemPrice = cart[i].price * cart[i].quantity;
      if(cart[i].price >= lowPrice && cart[i].price <= highPrice){
        arrItems.push(cart[i]);
      }
    }
  }
  return arrItems;
}
console.log ('New array - ' + ted(shoppingCart, 2, 5, true));
//console.log ('New array - ' + ted(shoppingCart, 2, 5, false));

// Mean
let myNumbers = [3, 78, 5, 23, 1, 9, 7, 5];
function mean(numbers){
  let total = 0;
  for(let i=0; i<numbers.length; i++){
   total = total + numbers[i];
  }
  return  total / numbers.length;
}
console.log('The mean is ' + mean(myNumbers));

// Median

let numbers1 = [1,2,3,4,5,6,7,8,9];
let numbers2 = [1,2,3,2,3,2,5,6,6,4,3,1,5,4,3];
let numbers3 = [1,108,55,77,2,3]; 
let numbers4 = [1,-108,55,77,2,3, 25, 108];
//Сompare Numbers
function compareNumbers(a, b) {
  return a - b;
}
function median(numbers){
  let medinRes = 0;
  let numberLength = numbers.length; 
  if (numberLength % 2 ===0){   //for even number
    medianRes = ((numbers[numberLength / 2 ]) + (numbers[numberLength / 2 -1])) / 2;
  }
  else{ //for odd number
    medianRes =  numbers[Math.floor(numberLength / 2)] ;
  }
  return medianRes;
}
console.log('Sorted array numbers4 with compare function:', numbers4.sort(compareNumbers));
console.log('Sorted array numbers3 with compare function:', numbers3.sort(compareNumbers));
console.log('Sorted array numbers2 with compare function:', numbers2.sort(compareNumbers));
console.log('Sorted array numbers1 with compare function:', numbers1.sort(compareNumbers));

console.log('The median for array numbers4 is '+ median(numbers4));
console.log('The median for array numbers3 is '+ median(numbers3));
console.log('The median for array numbers2 is '+ median(numbers2));
console.log('The median for array numbers1 is '+ median(numbers1));

//      Mode
// As result can be bimodal or multi-modal,
// the returned result is provided as an array
// mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4].
myModeNumbers = [3, 5, 4, 4, 1, 1, 2, 3];
function mode(numbers) {
    let modes = [];
    let count = [];
    let number = 0;
    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    // For - in statement.
    // Push the number(s) with the highest appearance frequency
    // into modes array.
    for (let i in count) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
}
console.log('Mode for MyModenumbers - ' + mode(myModeNumbers));
console.log('Mode for numbers1 - ' + mode(numbers1));
console.log('Mode for numbers2 - ' + mode(numbers2));
console.log('Mode for numbers3 - ' + mode(numbers3));
console.log('Mode for numbers4 - ' + mode(numbers4));
// Mean, Median and mode for input array
//Split input string to elements of array and convert it to numbers
function splitString(stringToSplit, separator) { 
  let arrayOfStrings = stringToSplit.split(separator);
  for(i=0; i<arrayOfStrings.length; i++){
    arrayOfStrings[i] = Number(arrayOfStrings[i]);
  }
  return arrayOfStrings;
}
//apply onclick events and functions mean, median, mode splitString and sort  
let meanBtn = document.querySelector('#MeanBtn');
let medianBtn = document.querySelector('#MedianBtn');
let modeBtn = document.querySelector('#ModeBtn');
meanBtn.onclick = function(){
 let inputString = document.querySelector('#array').value;
 let meanStr = 'Mean for input string is ' +mean(splitString(inputString, ','));
 document.querySelector('#MMMResult').innerHTML = meanStr;
}
medianBtn.onclick = function(){
  let inputString = document.querySelector('#array').value;
  let medianStr = 'Median for input string is ' +median(splitString(inputString, ',').sort(compareNumbers));
  document.querySelector('#MMMResult').innerHTML = medianStr;
}
modeBtn.onclick = function(){
  let inputString = document.querySelector('#array').value;
  let modeStr = 'Mode for input string is ' +mode(splitString(inputString, ','));
  document.querySelector('#MMMResult').innerHTML = modeStr;
}


</script>


