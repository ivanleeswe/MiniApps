$(document).ready(function(){
  var x = "x";
  var o = "o";
  var turns = 0;
  var spot1 = $('#spot1');
  var spot2 = $('#spot2');
  var spot3 = $('#spot3');
  var spot4 = $('#spot4');
  var spot5 = $('#spot5');
  var spot6 = $('#spot6');
  var spot7 = $('#spot7');
  var spot8 = $('#spot8');
  var spot9 = $('#spot9');

  $('#board li').on('click',function(){ //if line of O's
    if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
    spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
    spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
    spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
    spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
    spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
    ){
      alert("Winner: O") //announce winner 0, clear board
      $('#board li').text('+');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
    } 
})