/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result =[];
    for(let i=1;i<=n;i++){
     let count =""
     if(i%3===0 && i%5==0){
        count = "FizzBuzz"
     }else if(i%3===0){
        count = "Fizz"
     }else if(i%5===0){
        count = "Buzz"
     }else{
        count = i.toString();
     }
     result.push(count);
    }
    return result;
    
};