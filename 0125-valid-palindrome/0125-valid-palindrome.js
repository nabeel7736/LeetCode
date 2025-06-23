/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reverse=""
    let word=s.trim().replace(/[^a-z0-9]/gi,"").toLowerCase();
    for(let i=word.length-1;i>=0;i--){
        reverse +=word.at(i);
    }
    if(reverse ===word){
        return true
    }else{
        return false
    }
};