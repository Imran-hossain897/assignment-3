function feetToMile(feet){
    var mile = feet/5280;
    return mile;
    }
var mile = feetToMile(10562);
console.log(mile);




function woodCalculator(chair, table, bed){
    chairCount = 1 * chair;
    tableCount = 3 * table;
   bedCount = 5 * bed;
   var total = chairCount+tableCount+bedCount;
   return total;
}
var totalCount = woodCalculator(1, 0, 4);
console.log(totalCount);



function brickCalculator(n){
    if(n<=10){
        var  level1 = n*15;
        var brickForLevel1 = level1*1000;
        return brickForLevel1;
    }
   if(n<=20){
        var level2 = n*12;
        var brickForLevel2 = level2*1000;
        var total = brickForLevel2+30000;
        return total;
    }
     else{
        var level3 = n*10;
        var brickForLevel3 = level3*1000;
        var amount = brickForLevel3+70000;
        return amount;
    }
}
var result = brickCalculator(1);
console.log(result);





function tinyFriend(string) {
    var string = string.split(" ");
    var shortestLength = string[0].length; 
    for(var i = 0; i < string.length; i++){
        if(string[i].length < shortestLength){
        shortestLength = string[i].length;   
        shortest = string[i];            
        }
    }
return shortest;
}
 var result = tinyFriend('john smith raian mim kabira');
 console.log(result);
