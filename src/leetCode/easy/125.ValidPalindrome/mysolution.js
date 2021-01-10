/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  if (s.length === 0) return true;
  const lowerCaseS = s.toLowerCase();
  const filteredS = lowerCaseS.match(/\w/g);
  if (filteredS === null || filteredS === undefined) return true;
  const length = filteredS.length;

  let reversedS = "",
    originalS = "";

  for (let i = 0; i < length; i++) {
    reversedS = filteredS[i] + reversedS;
    originalS = originalS + filteredS[i];
  }

  return reversedS === originalS;
};
