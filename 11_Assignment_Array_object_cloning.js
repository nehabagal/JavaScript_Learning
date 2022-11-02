let bank_sbi = {
    accountHolderName : "ABC",
    typeOfAccount : "Savings",
    accountNumber : 1234567890,
    ifscCode: "ABC1234" 
}
let bank_location = {
street : "LBS Road",
city : "Pune",
pin_code : 411030,
}
//console.table(bank_sbi);
//console.table(bank_location);
console.log(`1. Object bank_sbi: accountHolderName ${bank_sbi.accountHolderName} ,typeOfAccount ${bank_sbi.typeOfAccount} ,accountNumber ${bank_sbi.accountNumber} ,ifscCode ${bank_sbi.ifscCode}`);
console.log(`2. Object bank_location: street ${bank_location.street}, city ${bank_location.city} , pin_code ${bank_location.pin_code}`);
console.log(`3. Cloning of bank_sbi & bank_location using Object.assign() method`);
let clonedObj = Object.assign({}, bank_sbi, bank_location);
console.log(`     Account Holder Name : ${clonedObj.accountHolderName}
     Type of Account: ${clonedObj.typeOfAccount}
     Account Number : ${clonedObj.accountNumber}
     IFSC Code: ${clonedObj.ifscCode}
     Bank Address: Street ${clonedObj.street}
     City: ${clonedObj.city}
     Pin Code: ${clonedObj.pin_code}`);
console.log(`4. Cloning of bank_sbi & bank_location using Spread Operator`);
console.log(`     Account Holder Name : ${clonedObj.accountHolderName}
     Type of Account: ${clonedObj.typeOfAccount}
     Account Number : ${clonedObj.accountNumber}
     IFSC Code: ${clonedObj.ifscCode}
     Bank Address: Street ${clonedObj.street}
     City: ${clonedObj.city}
     Pin Code: ${clonedObj.pin_code}`);
console.log(`5. Cloning of bank_sbi & bank_location & rate_of_interest using Object.assign() method`);
let rate_of_interest = {
    home_loan_interest : "6.8%",
    personal_loan_interest : "13%",
    due_interest : "3%"
}
let sbi_details = Object.assign({}, clonedObj, rate_of_interest);
console.log(`     Account Holder Name : ${sbi_details.accountHolderName}}
     Type of Account: ${sbi_details.typeOfAccount}
     Account Number : ${sbi_details.accountNumber}
     IFSC Code: ${sbi_details.ifscCode}
     Bank Address: Street ${sbi_details.street}
     City: ${sbi_details.city}
     Pin Code: ${sbi_details.pin_code}
     Home Loan Interest: ${sbi_details.home_loan_interest}
     Personal Loan Interest: ${sbi_details.personal_loan_interest}
     Due Interest: ${sbi_details.due_interest}`);
console.log(`6. Traversing of final merged object using For of loop`);
const array = [bank_sbi, bank_location, rate_of_interest];
for (const element of array) {
    console.log(element);
}