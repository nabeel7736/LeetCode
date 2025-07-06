/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
const ltr={
    I:1, V:5, X:10, L:50,
    C:100, D:500, M:1000
};
let total=0;
for(i=0;i<s.length;i++){
    let current=ltr[s[i]];
    let next=ltr[s[i+1]];

    if(next>current){
        total +=next-current;
     i++
    }else{
        total+=current
    }
}
return total
};