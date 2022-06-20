function filterList(arr) {
    return arr.filter(function (item) {return typeof item === 'number'});
   }
  
    module.exports =filterList
    console.log(filterList(['wk', 4, 5, 6, 'yl', 'to' ]))