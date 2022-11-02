class Bank{
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
this.account_no = account_no;
this.ifsc = ifsc;
this.interest_rate = interest_rate; 
    }
}

let axis_bank = new Bank("Axis Bank", "Pune", 123456789, "ABC1234", "13%");
let sbi_bank = new Bank("State Bank of India", "Pune", 123456789, "ABC1234", "13%");
let icici_bank = new Bank("ICICI Bank", "Pune", 123456789, "ABC1234", "13%");
let kotak_bank = new Bank("Kotak Mahindra Bank", "Pune", 123456789, "ABC1234", "13%");
let hdfc_bank = new Bank("HDFC Bank", "Pune", 123456789, "ABC1234", "13%");
let punjab_bank = new Bank("Punjab National Bank", "Pune", 123456789, "ABC1234", "13%");
//console.log(axis_bank);
console.log("Bank Name & Location of all objects");
let array = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank];
for (const element of array) {
 console.log(`Bank Name: ${element.bank_name}, Location: ${element.location}`);  
}
console.log("==================================================================================");
console.log("Details of object which has name Kotak Bank using for of loop");
console.log("                                                                                  ");
for (const element of array) {
    if(element.bank_name=="Kotak Mahindra Bank"){
        console.log(`${element.bank_name}, ${element.location}, ${element.account_no}, ${element.ifsc}, ${element.interest_rate}`);
    }
}
console.log("==================================================================================");
console.log("Details of all objects");
console.log("                                                                                  ");
for (const element of array) {
   // console.log(`${element.bank_name}, ${element.location}, ${element.account_no}, ${element.ifsc}, ${element.interest_rate}`);
    console.log(element);
}