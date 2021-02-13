---
layout: layouts/post.njk
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 3
---

<div class="container md-5">
    <div class="row">
        <div class="col-md-8">
            <form class="form-check" name="contact" id="contactForm" method="POST" data-netlify="true" onsubmit="valid()" >
                <div class="form-group"> 
                    <label for="name" class="form-label">Your Name: </label> 
                    <input class="form-control" type="text" name="name" id="name" placeholder="Enter name" required />
                </div>
                <div class="form-group">  
                    <label for="email" class="form-label">Your Email: </label>
                    <input class="form-control" type="email" name="email" id="email" placeholder="Enter email"  required />
                </div>
                <br>
                <div class="form-group">
                    <label>Your Role: <select class="form-control" name="role[]" required  >
                    <option value="">--Choose role--</option>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </div>
                <br>
                <div class="form-group">
                    <label class="form-label" for="exampleFormControlSelect1">Select week(s)</label>
                        <select  class="form-control" id="exampleFormControlSelect1" multiple required>
                            <option>Week 1</option>
                            <option>Week 2</option>
                            <option>Week 3</option>
                            <option>Week 4</option>
                        </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="Textarea1" class="form-label">Message: </label>
                    <textarea class="form-control" id="Textarea1" rows="3"  name="message" placeholder="Enter your message here"></textarea>
                </div>
                <br>
                <!--<div class="form-check">
                    <input type="checkbox" class="form-check-input" id="Check1" >
                    <label class="form-check-label " for="Check1">Need accommodation</label>
                </div>-->
                <br>
                <a href="/" target="_blank">Read terms and conditions</a>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="Check2" required>
                    <label class="form-check-label " for="Check2">Agree to terms and conditions </label>
                </div>
                <br>
                <button id="formSubmit"class="btn btn-primary " type="submit">Send</button>
            </form>
        </div>
    </div>
</div>

