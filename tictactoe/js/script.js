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
    } else if (spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') || //if row of X
    spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
    spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
    spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
    spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
    spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
    spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
    spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x') 
    ){
      alert("Winner: X") //announce winner X, clear board 
      $('#board li').text('+');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
    } else if (turns === 9){ //if number of turns is 9, announce tie game, clear board, turn counter back to zero
      alert("Tie Game")
      $('#board li').text('+');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');
      turns = 0;
    } else if ($(this).hasClass('disable')){//if tile have disable, announce spot filled
      alert('Spot filled');
    } else if (turns%2 === 0){ // if turns is even number, turns counter increase by 1
      turns ++;
      $(this).text(o); //Show's O
      $(this).addClass('disable o');//disable this box
      if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
    spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
    spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
    spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
    spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
    spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
    spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o') 
     ){
       alert('Winner: O');
      turns = 0;
     }
    } 
})