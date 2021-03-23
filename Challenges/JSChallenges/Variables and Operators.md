---
title: Variables and Operators
date: 2021-03-12
layout: layouts/base.njk
eleventyNavigation:
  key: Variables and Operators
  order: 2
  parent: JavaScript
---

<div class="container md-5">
  <div class="row">
    <div class="col-md-8">
      <pre>
      <!-------------------The Age Calculator-->
        <h3>The Age Calculator</h3>
        Forgot how old someone is? Calculate it!
        Store the current year in a variable.
        Store their birth year in a variable.
        Calculate their 2 possible ages based on the stored values.
        Output them to the screen like so: “They are either NN or NN”, substituting the values.
      </pre>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Input your birthday year</span>
        <input type="text" class="form-control"  id="birthdayYear">
      </div>
      <button id="yearSubmit"class="btn btn-primary " type="submit" > Summit</button>
      <br><br>
      <div id="age"> </div>
      <hr><hr> 
      <!-------------------The Fortune Teller-->
      <pre>
        <h3>The Fortune Teller</h3>
        Why pay a fortune teller when you can just program your fortune yourself?
        Store the following into variables:
        number of children
        partner’s name
        geographic location
        job title
        Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
      </pre>
      <button id="FortuneTellerBtn"class="btn btn-primary " type="submit" >Make a prediction</button>
      <br><br>
      <div id="FortuneTeller"> </div>
      <hr><hr>
      <!-------------------Using Math functions-->
      <pre>
        <h3>Using Math functions</h3>
        JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called 
        a method. We’ll talk about methods more later in the class. For now, know if you type Math.random(),
        you’ll get a random number between 0 and 1.
        Using this tool, update your fahrenheit to celsius temperature conversion program to do the following:
        Instead of inputing a value for the Fahrenheit temperature, use Math.random() to generate a random 
        temperature between 0 and 100
        Have to program output: “It is NN°F today. That’s NN°C.”
      </pre>
      <h3 id="RandomTemperature" class="alert-warning border mx-5 text-center" > </h3> <br>
      <button id="UpdateTemperatureBtn"class="btn btn-primary small " type="submit" >Update temperature</button>
      <div id="UpdateTemperature"> </div>
      <hr><hr>
      <!--The Temperature Converter-->
      <pre>
        <h3>The Temperature Converter</h3>
        Let’s make a program to convert celsius temperatures to fahrenheit and vice versa, so we can 
        complain about the weather with our friends overseas.
        Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. 
        To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.
        Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write 
        \u00B0 to represent the unicode character for the degrees symbol.
        Store a celsius temperature into a variable.
        Convert it to fahrenheit and output “NN°C is NN°F”.
        Now store a fahrenheit temperature into a variable.
        Convert it to celsius and output “NN°F is NN°C.”
      </pre>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Input temperature, &degC</span>
        <input type="text" class="form-control"  id="tempC">
        <div>or</div>
        <span class="input-group-text" >Input temperature, &degF</span>
        <input type="text" class="form-control"  id="tempF">
      </div>
      <button id="ConvertTemperatureBtn"class="btn btn-primary small " type="submit" >Convert temperature </button> <br>
      <h3 class="alert-warning border mx-5 text-center"  id="ConvertedTemperature"> </h3>
      <hr><hr>
    </div>
  </div>
</div>


<script>
// The Age Calculator
  let yearSubmit = document.querySelector('#yearSubmit');
  yearSubmit.onclick = function (){
    let currentYear = new Date().getFullYear();
    let birthdayYear = Number(document.querySelector('#birthdayYear').value);
    let age1 = currentYear-birthdayYear - 1;
    let age2 = currentYear-birthdayYear;
    let outString = "They are either " + age1 + " or " + age2;
   document.getElementById('age').innerHTML = outString;
   document.querySelector('#age').setAttribute("class", "alert-success", );
  };
  //FortuneTellerBtn
  let prediction = document.querySelector('#FortuneTellerBtn');
  prediction.onclick= function(){
    let numberOfCildren = 4;
    let PartnersName = "Vlad";
    let location = "Leeds";
    let jobTitle = "web Developer";
    let outString2 = "You will be a " + jobTitle + " in " + location  + ", and married to " + PartnersName + " with "+ numberOfCildren +" kids";
    document.querySelector('#FortuneTeller').innerHTML = outString2;
    document.querySelector('#FortuneTeller').setAttribute("class", "alert-success");
  }
  //Using Math functions (fahrenheit to celsius temperature conversion program)
  function ConvertTemp(){
    let randomTemp = Math.round(Math.random()*100);
    let tempCels = Math.round((randomTemp -32) * 5 / 9 , 0.1);
    document.querySelector('#RandomTemperature').innerHTML = "   It is " + randomTemp + "&degF today. That’s " + tempCels + "&degC";
  };
  ConvertTemp();
  let updateTemp = document.querySelector('#UpdateTemperatureBtn');
  updateTemp.onclick = function (){ConvertTemp();};
  //The Temperature Converter
  /*Store a celsius temperature into a variable.
        Convert it to fahrenheit and output “NN°C is NN°F”.
        Now store a fahrenheit temperature into a variable.
        Convert it to celsius and output “NN°F is NN°C.”*/
  function TempConverterCtoF (){
    let CelsiusTemp = document.querySelector('#tempC').value;
    let FahrenheitTemp = CelsiusTemp *9/5+32;
    let outStr1 = "It is " + FahrenheitTemp + " &degF";
    document.querySelector('#ConvertedTemperature').innerHTML = outStr1;
    };
  function TempConverterFtoC (){
    let FahrenheitTemp = document.querySelector('#tempF').value;
    let CelsiusTemp = (FahrenheitTemp-32)*5/9;
    let outStr2 = "It is " + CelsiusTemp + " &degC";
    document.querySelector('#ConvertedTemperature').innerHTML = outStr2;
    };

    let tempConvertorBtn = document.querySelector('#ConvertTemperatureBtn');
    tempConvertorBtn.onclick = function(){
      if ( document.querySelector('#tempC').value ) {
        TempConverterCtoF ();
        document.querySelector('#tempC').value = null;
      }
      else if (document.querySelector('#tempF').value ) {
        TempConverterFtoC();
        document.querySelector('#tempF').value = null;
      }
    };

  
  


</script>