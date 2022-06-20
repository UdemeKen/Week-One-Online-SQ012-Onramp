function filterArray(arr) {
   return arr.filter(function (elem) {return typeof elem === 'number'});
 }
 
 module.exports = filterArray
 console.log(filterArray([1, 2, "a", "b"]))


