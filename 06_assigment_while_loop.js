//WAP to print numbers from 5 to 15 by incrementing 1 using while loop
var index = 5; //Initialization
while (index<=15) { //Condition
//    console.log(index);
    index++; //update expression
}

//WAP to print numbers from 50 to 40 by decrementing 1 using while loop
var index = 50;
while (index>=40) {
//console.log(index);
    index--;
}

//WAP to find first 15 odd numbers using while loop
var index = 0;
var count = 0;
while (index<100) {
    if (index%2!=0) {
        count = count + 1;
       // console.log(index);
    }
    if (count==15) {
        break;
    }
    index++;
}

//WAP to find first 15 odd numbers using while loop
var index = 0;
var count = 0;
while (index<100) {
    if (index%2==0) {
        count = count + 1;
        //console.log(index);
    }
    if (count==10) {
        break;
    }
    index++;
}

//WAP to print table of 5 using while loop
var index = 1;
while (index<=10) {
    //console.log(index*5);
    index++;
}

//WAP to print table of 10 using while loop
var index = 1;
while (index<=10) {
    //console.log(index*10);
    index++;
}

//WAP to print table of 10 in reverse order using while loop
var index = 10;
while (index>=1) {
    console.log(index*10);
    index--;
}