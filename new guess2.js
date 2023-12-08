var readline = require("readline-sync"); 
var ans=[]; 

var answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
answer.sort(function(a, b) { return Math.random() - 0.5; });
answer = answer.slice(0, 4);


var counterA=0;
var counterB=0;

for(var x=0;x<4;x++){ 
    var rand = Math.floor(Math.random()*10); 
    ans[x]=rand; 
} 
console.log(ans); 
do { 
    var guess = readline.question("Please guess 4 digits: "); 
 
    if (!isNaN(guess) && guess.length == 4)//repeat digit? 
        break; 
    else { 
        console.log("4 digits please!") 
        continue; 
    } 
} while (true); 
console.log(guess); 
var counterA=0; 
console.log("U have ten chance to guess."); 
for(var a=0;a<10;a++){ 
for(var x=0;x<4;x++){ 
    if(guess[x]==ans[x]) 
    counterA++; 
} 
console.log(counterA); 
if(counterA==4){ 
console.log("You win the game!"); 
break;} 
else{ 
console.log("You lose!");} 
}