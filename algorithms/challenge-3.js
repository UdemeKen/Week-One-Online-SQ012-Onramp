function sumMix(arr) {
    let sum=0;
      let numberOnlyArr= arr.map((item)=>{return parseInt(item, 10)})
      numberOnlyArr.map((item)=>{return sum+=item;})
      return sum;  
      
         
   }
  
    module.exports = sumMix 
    console.log(sumMix([9, 3, '7', '3']))