function sumTwoSmallestNums(arr) {
    let sum=0
    let newFilteredArr=arr.filter(function(elem) {return elem>0;})
    newFilteredArr.sort(function(a,b) {return a-b; })
    sum=newFilteredArr[0]+newFilteredArr[1];
    return sum;
 }
  module.exports =sumTwoSmallestNums
  console.log(sumTwoSmallestNums([2, 9, 6, -1]))