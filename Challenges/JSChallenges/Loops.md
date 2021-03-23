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


</script>
