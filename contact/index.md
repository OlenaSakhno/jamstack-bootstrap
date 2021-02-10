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
            <form class="form-check" name="contact" method="POST" data-netlify="true" >
        <div class="form-group"> 
            <label class="form-label">Your Name: </label> 
            <input class="form-control" type="text" name="name" placeholder="Enter name" required />
        </div>
        <div class="form-group">  
            <label class="form-label">Your Email: </label>
            <input class="form-control" type="email" name="email" placeholder="Enter email" required />
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
        <div class="form-group">
            <label for="Textarea1" class="form-label">Message: </label>
            <textarea class="form-control" id="Textarea1" rows="3"  name="message" placeholder="Enter your message here"></textarea>
        </div>
        <br>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
            <label class="form-check-label " for="exampleCheck1">Need accommodation</label>
        </div>
        <br>
        <button class="btn btn-primary " type="submit">Send</button>
    </form>
        </div>
    </div>
</div>

