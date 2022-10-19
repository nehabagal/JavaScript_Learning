//WAP to print numbers from 5 to 15 by incrementing 1 using while loop
var index = 5;
do {
    //console.log(index);
    index++;
} while (index<=15);

//WAP to print numbers from 50 to 40 by decrementing 1 using while loop
var index = 50;
do {
   // console.log(index);
    index--;
} while (index>=40);

//WAP to find first 15 odd numbers using while loop
var index = 0;
var count = 0;
do {
    if (index%2!=0) {
        count++;
        //console.log(index);
    }
    index++;
if (count==15) {
    break;
}
} while (index<=100);

//WAP to find first 15 even numbers using while loop
var index = 0;
var count = 0;
do {
    if (index%2==0) {
        //console.log(index);
        count++;
    }
    index++;
    if (count==15) {
        break;
    }
} while (index<=100);

//WAP to print table of 5 using while loop
var index = 1;
do {
//console.log(index*5);
    index++;
    } while (index<=10);


//WAP to print table of 10 using while loop
var index = 1;
do {
   // console.log(index*10);
    index++;
} while (index<=10);

//WAP to print table of 10 in reverse order using while loop
var index = 10;
do {
    console.log(index*10);
    index--;
} while (index>=1);