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
