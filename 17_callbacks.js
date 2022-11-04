function do_assignment(callback){
console.log("I'm done with the assignment you can copy now");
callback();
}
function copy_assignment() {
    console.log("Thank you..I'll do it");
    }

    do_assignment(copy_assignment);
function display() {
    console.log("display function");
}

//setInterval( display, 2000);
setTimeout( display, 2000);
