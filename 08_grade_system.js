var gradeSystem = function(score){
    if(score<35 && score!=" "  && score>0) {
        console.log("You are failed");
    }

    if (score>=35 && score<60) {
        console.log("Passed and GRADE is C ");
    }
    
    if (score>=60 && score<75) {
        console.log("Passed and GRADE is B");
    }
    
    if (score>=75 && score<90) {
        console.log("Passed and GRADE is A");
    }
    
    if (score>=90 && score<100) {
        console.log("Passed and GRADE is A+");
    }
    
   if (score<0 || score>100 || score==" " || score==null || score==undefined || typeof score=='string') {
     console.log("Invalid Input");
    }
}

console.log("for input value 66");
gradeSystem(66);
console.log("===================");
console.log("for input value 13");
gradeSystem(13);
console.log("===================");
console.log("for input value space ");
gradeSystem(" ");
console.log("===================");
console.log("for input value 98 ");
gradeSystem(98);
console.log("===================");
console.log("for input value Fifty Five");
gradeSystem("fifty five");
console.log("===================");
console.log("for input value 35");
gradeSystem(35);
console.log("===================");
console.log("for input value 75");
gradeSystem(75);
console.log("===================");
console.log("for input value null");
gradeSystem(null);
console.log("===================");
console.log("for input value undefined");
gradeSystem(undefined);
console.log("===================");
console.log("for input value -20");
gradeSystem(-20);
console.log("===================");
console.log("for input value 55");
gradeSystem(55);
console.log("===================");
console.log("for input value 82");
gradeSystem(82);
