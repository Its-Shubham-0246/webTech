const person = {
 name: "Shubham Maurya",
 age:19,
 Address:{
  houseNo:23,
  city:"Gorakhpur",
  pinCode:273211
 }
}
console.log(person.Address.pinCode);
const person1 = person;
console.log(person);
console.log(person1); 