//Accordian
var action= "click";
var speed= "500";

$(document).ready(function(){
  $('li.q').on(action, function() { //li is not a class, its an element
    $(this).next()
      .slideToggle(speed)
        .siblings('li.a')
          .slideUp();
  });
});

//this refers to q you click on, next element is gonna be answer
//jquery have slide up slide down toggle function
//we are chaining here in this function
//siblings (pick all a)
//now once you opesns, it will close the previous opened ones