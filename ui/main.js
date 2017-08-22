//Counter Code
var button = document.getElementById("counter");
var count = document.getElementById("count");
var counter = 0;
button.onclick = function(){
    counter = counter+1;
    count.innerHTML = counter;
};