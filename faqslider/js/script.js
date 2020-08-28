//Accordian
var action= "click";
var speed= "500";

$(document).ready(function(){
  $('li.q').on(action, function() { //li is not a class, its an element
    $(this).next()
      .slideToggle(speed);  //this refers to q you click on, next element is gonna be answer
  })                        //jquery have slide up slide down toggle function
});