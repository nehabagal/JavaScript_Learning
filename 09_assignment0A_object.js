let teacher = {
    fullName: "Kalpana Jain",
    designation: "Assistant Professor",
    department: "Computer Engineering",
    degrees: {
        engineering: "Computer Science",
        PHD: "Advance Computing",
    },
    certificates: {
        certificate1: "Hacker Rank Participation",
        certificate2: "Certificate in IFE Course",
        certificate3: "Certificate in Advance Programming",
    },
    concatValues: function() {
      return `The degrees of teacher: ${this.degrees.engineering} and ${this.degrees.PHD}`;
    },
}
console.log(teacher.concatValues());
console.log("=======================================");
console.log("Added new property named experience after object creation and below is the value of experience property");
teacher.experience = "4 years";
console.log(teacher.experience);
console.log("=======================================");
console.log("Modified desination property value from Assistant Professor to HOD");
teacher.designation = "HOD";
console.log(teacher.designation);
console.log("=======================================");
console.log("Complete Object");
console.log(teacher);
console.log("=======================================");
console.log("Total certificates before delete");
console.log(teacher.certificates);
console.log("=======================================");
console.log("Deleted certificate3");
delete teacher.certificates.certificate3
console.log("Total certificates after delete");
console.log(teacher.certificates);
console.log("=======================================");
console.log("Added new certificate with value Artificial Intelligence");
teacher.certificates.certificate3= "Artificial Intelligence";
console.log("Total certificates after addition");
console.log(teacher.certificates);


