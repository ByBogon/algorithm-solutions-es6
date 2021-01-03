/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  if (!s) return 0;
  let longestWord = "";
  let uniqueWord = "";
  const length = s.length;
  for (let i = 0; i < length; i++) {
    if (longestWord.indexOf(s[i]) > -1) {
      longestWord = longestWord.slice(longestWord.indexOf(s[i]) + 1);
      longestWord += s[i];
    } else {
      longestWord += s[i];
    }

    if (longestWord.length > uniqueWord.length) {
      uniqueWord = longestWord;
    }
  }
  return uniqueWord.length;
};
