'use strict'
function display(name, ...myName){
    console.log(name, myName);
}
display("Anil", 31, "city", true);


//function default parameters
function divide(x, y=1){
    console.log(x/y);
}
divide(10);