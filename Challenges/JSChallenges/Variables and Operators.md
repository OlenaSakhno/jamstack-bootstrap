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
    </div>
</div>
      <hr><hr>
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

</div>


<script>
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
  
  
  let prediction = document.querySelector('#FortuneTellerBtn');
  prediction.onclick= function(){
    let numberOfCildren = 4;
    let PartnersName = "Vlad";
    let location = "Leeds";
    let jobTitle = "web Developer";
    let outString2 = "You will be a " + jobTitle + " in " + location  + ", and married to " + PartnersName + " with "+ numberOfCildren +" kids";
    document.querySelector('#FortuneTeller').innerHTML = outString2;
    document.querySelector('#FortuneTeller').setAttribute("class", "alert-success", );
  }


</script>