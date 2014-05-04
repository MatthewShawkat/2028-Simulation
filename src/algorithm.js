/*
 * 2024Sim
 * 
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

(function ($) {
    function Square(value, location){
        this.value = value;
        this.block = false;
        this.original = location;
        this.location = location;
    };
    Square.prototype.toString = function abc(){
        return this.value;
    };
    var list = [new Square(4,0),new Square(4,1),new Square(2,2),new Square(2,3)];
    
    function canMove(index1, index2){
        if(list[index1].value !== 0)
            if(list[index2].value === 0 || (areEqual(index1,index2) && !isBlocked(index2))  )
                return true;
        return false;
    };
    function add(index1, index2){
        if(list[index1].value === list[index2].value)
            list[index2].block = true;
        list[index2].value = list[index2].value + list[index1].value;
        list[index1].value = 0;
    };
    function areEqual(index1,index2){
        if(list[index1].value == list[index2].value)
            return true;
        return false;
    };
    function isBlocked(index){
        return list[index].block;
    };
    function nextPossibleMove(index){
        var nextMove = -1;
        var pointer = index + 1;
        while(pointer !== list.length){
            if(canMove(index,pointer)){
                nextMove = pointer;
                pointer++;
            } else {
                break;
            };
        };
        return nextMove;
    };

    console.log("-----------------------")
    console.log(list.toString());
    for(var i = list.length - 2; i >=0 ; i--){
        var nextMove = nextPossibleMove(i);
        if(nextMove > -1) {
            add(i, nextMove);
            console.log(list.toString());
        };
    };
    console.log(list.toString());
}(jQuery));
