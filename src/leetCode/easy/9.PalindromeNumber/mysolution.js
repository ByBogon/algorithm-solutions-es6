/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }

  let reversedX = 0;
  while (x > reversedX) {
    reversedX = reversedX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversedX || x === Math.floor(reversedX / 10);
};
