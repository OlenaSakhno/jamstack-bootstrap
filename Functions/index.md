---
layout: layouts/post.njk
title: Functions
templateClass: tmpl-post
eleventyNavigation:
  key: Function and Control Flow
  order: 6
---
<div class="container mt-4">
  <h1>Basic JavaScript Tasks</h1> 
  <p>Open the  console to view the results</p> 
</div>
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