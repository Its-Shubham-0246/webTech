let arr = [2,3,8,4,7,1,5]
function isEvenPresent(arr){
 for(let i = 0;i < arr.length;i++){
  if(arr[i] % 2 == 0){
   return true
  }
 }
 return false
}
console.log(isEvenPresent(arr))