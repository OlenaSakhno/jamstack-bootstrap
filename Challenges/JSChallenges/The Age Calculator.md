---
title: Challenges
date: 2021-03-12
layout: layouts/base.njk
eleventyNavigation:
  key: Challenge
  order: 2
  parent: JS Tasks
---

<pre>
<h3>The Age Calculator</h3>
Forgot how old someone is? Calculate it!
Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN”, substituting the values.
</pre>


<div class="container md-5">
    <div class="row">
        <div class="col-md-8">
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Input your birthday year</span>
          <input type="text" class="form-control"  id="birthdayYear">
        </div>
        <button id="yearSubmit"class="btn btn-primary " type="submit">Summit</button>
        </div>
    </div>
</div>

<script>
var currentYear = new Date().getFullYear();
var birthdayYear= document.getElementById('birthdayYear').value;
var age=currentYear-birthdayYear;
console.log("Your age is " + age);

</script>