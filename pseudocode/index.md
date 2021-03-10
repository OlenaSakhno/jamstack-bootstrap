---
layout: layouts/base.njk
title: Pseudocode
templateClass: tmpl-post
eleventyNavigation:
  key: Pseudocode
  order: 3
  parent: JS Tasks
---
<div class="container mt-4 ml-2">
  <h1>Basic JavaScript Tasks</h1> 
  <p>Open the  console to view the results</p> 
</div>
<pre>
  LOOP through number 0-100
      IF number is a multiple of 3 and 5
        THEN  output "fizzbuzz"
      ELSE IF number is a multiple of 3
        THEN  output "fizz"
      ELSE IF number is a multiple of 5
        THEN  output "buzz"
      ELSE
        THEN output number
</pre>


<!--*************************************************-->
<pre>
  CREATE function fixStart(argument){}
    ASSIGN to {newString} a first letter of argument 
    LOOP through length of argument 
      IF variable is equal first letter
        THEN change letter to *
      ADD letter or * to {newString} 
    RETURN {newString}
  CALL the function(argument)
</pre>

<!--*************************************************-->

<script>
// LOOP through number 0-100
for(counter = 0; counter<=100; counter++){
  var message = '';
//       IF number is a multiple of 3 
  if (counter % 3 == 0 ){ 
//         THEN  output "fizzbuzz"
  message += 'fizz';
  }
//       IF number is a multiple of 5
   if (counter % 5 == 0){
//         THEN  output "buzz"
  message += 'buzz';
   }
//   IF message isn't set
  if(!message){
//         THEN output number
  message = counter;
  }
  console.log(message);
}

</script>

<script>
 // CREATE function fixStart(argument){}
 function fixStart(argument){
   var newString = argument.charAt(0)
//LOOP through length of argument
  for(i=1; i<argument.length; i++){
    
//IF variable is equal first letter
  if(){
    newString +=argument.charAt(i)
  }
//THEN change letter to *
//  ADD letter or * to new variable
  }
//  RETURN new variable
 }
  CALL the function(argument)
</script>