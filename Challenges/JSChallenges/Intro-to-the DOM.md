---
title: Intro-to-the DOM
date: 2021-03-25
layout: layouts/base.njk
eleventyNavigation:
  key: Intro-to-the DOM
  order: 6
  parent: JavaScript
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>
<div id="task1wrapper">
  <h1 id="task1-header">Hello from task1</h1>
  <img src="http://placekitten.com/g/600/500" />
  <button onclick="task1()">Click me to run this</button>
</div>
<hr>

<div id="task2wrapper">
<H2>task2</H2>
    <button onclick="task2()"> create new paragraph </button>
</div>
<hr>

<div id="task3wrapper">
  <h2>task3</h2>
  <div id="task3Div" style="height: 50px; width: 50px; background: red;"></div>
</div>

<hr>

<div id="task4wrapper">
  <h1>This is task4</h1>
  <a id="task4-link" href="https://LeedsWebDev.org">Leeds Web Dev</a>
</div>
<hr>
<div id="task5wrapper">
  <h1>This is task5</h1>
  <form action="/la-di-da">
    <fieldset>
      <div>
        <label for="task5-input">Enter a number</label>
        <input id="task5-input" name="my-number" placeholder="Fill in a number" />
        <button id="task5-submit" type="submit">Submit</button>
      </div>
      <p id="task5-output">The number multiplied by 5 will go here</p>
    </fieldset>
  </form>
</div>
<hr>  
</body>
</html>


<script>

  function task1() {
    var task1Image = document.getElementsByTagName('img')[0];
    task1Image.src = "http://placekitten.com/g/200/200";
    var task1Header = document.getElementById('task1-header');
    task1Header.style.color = 'red';
  } 
  function task2() {
      var theP = document.createElement('p');
      var theText = document.createTextNode('Theres no danger here, Will');
      theP.appendChild(theText);
      var task2wrapper = document.getElementById('task2wrapper');
      task2wrapper.appendChild(theP);
  }

  function task3(){
    var task3Div = document.querySelector('#task3Div');
    var myFunction = function() {
      alert('Hey, look at my red square!'); 
    };
    task3Div.addEventListener("mouseover", myFunction)
  } 
  task3();

  function task4() {
      var theLink = document.getElementById('task4-link');
      var myInterceptFunction = function(event) {
        event.preventDefault();
        alert('why leave my site? :(');
      };
      theLink.addEventListener('click', myInterceptFunction);
    }
    task4();

  function task5() {
    var theInput = document.getElementById('task5-input');
    var theButton = document.getElementById('task5-submit');
    var theOutput = document.getElementById('task5-output');
    var mySubmitFunction = function(dave) {
      dave.preventDefault();
      theOutput.innerHTML = theInput.value + ' * 5 = ' + (5 * theInput.value);
    };
    theButton.addEventListener('click', mySubmitFunction);
  }
  task5();

</script>