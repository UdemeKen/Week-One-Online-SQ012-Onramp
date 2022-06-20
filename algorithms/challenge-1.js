function secondLargest(arr) {
    const max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr);
  }
  
  const arr = [19, 2, 73, 44, 27, 9]
  secondLargest(arr);
  module.exports = secondLargest
  console.log(secondLargest([6, 3, 0, 30, 7]))