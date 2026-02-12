// const matrix = [1,[2,3]]
// console.log(matrix[1,[0]])
// const arr = [3]
// console.log(arr[3])
// const  [x,y = "Shubham"] = arr;
// console.log(x)
// console.log(y)

// let person = {
//  name: "Shubham",
//  age:19,
//  mobileNo:289383798
// }
// 
// let{
//  
//  name:x ,age,mobileNo
// } = person
// console.log(x)
// // console.log(age)
// console.log(mobileNo)
// 
// let arr1 = [1,2,3]
// let arr2 = [23,...arr1,4,5]
// // arr2[0] = 100
// console.log(arr1)
// console.log(arr2)

// let emp = {
//  id: 1,
//  name:"Shubham"
// }
// 
// let details = {
//  ...emp,
//  role:"developer"
// }
// details.name = "Shivam"
// console.log(details)
// console.log(emp)


// let arr1 = [1,2,{name : "Shubham"}]
// let arr2 = {...arr1}
// console.log(arr2)
// console.log(arr1)
// arr1[2].name = "Sarvesh"
// console.log(arr2)
// console.log(arr1)


function sum(...numbers){
 return numbers.reduce((a,b) => a + b,0)
}



