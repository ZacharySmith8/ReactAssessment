function addCommas(num) {
    // converts number to string array
   num = num.toString().split("");
   //loops through number array and stylizes;
   for(let i = num.length; i >= 0; i = i-3){
    if(num.length > 3 && i != num.length){
        num.splice(i, 0, ",");
    }     
   }
   
   // converts to string.
   return num.join("") 
}


addCommas(4000)
addCommas(1234);
addCommas(9876543210);
addCommas(6);
addCommas(-10);
addCommas(-5678);
module.exports = addCommas;