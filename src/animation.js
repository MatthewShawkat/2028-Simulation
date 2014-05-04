/*
 * 2024Sim
 * 
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

(function ($) {

  function Square(value, location) {
      this.value = value;
      this.block = false;
      this.original = location;
      this.location = location;
  }
  Square.prototype.toString = function abc() {
      return this.value;
  };

  var locations = [0,'53px','108px','162px'];

  var square1 = new Square(4, 0);
  square1.location = 2;
  var square2 = new Square(2, 1);
  square2.location = 3;
  var square3 = new Square(2, 2);
  square3.location = 3;
  var square4 = new Square(0, 3);

  var list = [square1, square2, square3, square4];

  for (var i = 0; i < list.length; i++) {
      var classes = "square";
      if(list[i].value === 0)
          classes += " hidden";
      $('.main').append('<div class=' + classes + ' id="b' + (i + 1) + '">' + list[i].value + '</div>');
  }

  function finalValue(index) {
      var theFinalValue = 0;
      for (var i = 0; i < list.length; i++) {
          if (list[i].location === index) theFinalValue += list[i].value;
      }
      return theFinalValue;
  }

  function listToBeMoved(index) {
      var moveList = [];
      for (var j = index - 1; j >= 0; j--) {
          if (list[j].location > list[j].original && list[j].location === index) 
              moveList.unshift(j);
      }
      return moveList;
  }
  function animateMove(listToMove, location){
      
      for(var i = 0; i < listToMove.length; i++){
          var id = '#b'+ (list[listToMove[i]].original + 1);
          
          if(i===0){
              console.log(listToMove.length);
              if(listToMove.length > 1){            
                  $(id).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                      $(this).addClass('add').html(finalValue(location));
                  });
              } else {
              
              }
          } else {
              console.log("other");
              $(id).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                  $(this).hide();
              });
          }
          
          $(id).css('left', locations[location]);
      }
  };

  $('input').click(function () {
      for (var i = list.length - 1; i > 0; i--) {
          var moveList = listToBeMoved(i);
          console.log("to move to location:" + i + "," + moveList);
          animateMove(moveList, i);
      }
  });

}(jQuery));
