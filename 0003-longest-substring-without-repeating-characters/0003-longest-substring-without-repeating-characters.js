/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let longest = 0;
  let sub = "";
  for (let c of s) {
    if (sub.includes(c)) {
      sub = sub.substring(sub.indexOf(c)+1);
    }
    sub +=c;
    if (sub.length>longest) 
    longest = sub.length;
  }

  return longest;
}
