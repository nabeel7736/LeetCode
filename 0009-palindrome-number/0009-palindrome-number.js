/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome =function(x) {
    let str =x.toString();
    let reverse=""
    for(i=str.length-1;i>=0;i--){
        reverse += str.at(i)
    }
    
    return str ===reverse
};

console.log(isPalindrome((-121)))