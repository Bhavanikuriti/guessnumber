//variable to store a random number
var random=Math.floor(Math.random()*100)+1;
 //random gives 0.01 to 0.99
 //varaible to store number of attempts
 var attempts=0;
 document.getElementById('btn').addEventListener('click',function(){
    attempts++;
    var guess=parseInt(document.getElementById('Guessinput').value);
    if(guess===random){
        display("Congratulations"+attempts);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Too low,try again");
    
    }
    else if(guess>random){
        display("too high,try again");
    }
 });
 function display(message){
    document.getElementById('msg').textContent=message;
 }