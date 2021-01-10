/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = area => {
  let w,
    l,
    quo,
    rest,
    gap = area,
    result = [];

  for (let i = 1; i <= area; i++) {
    quo = area / i;
    rest = area % i;
    if (rest === 0) {
      l = i;
      w = quo;
      if (l >= w) {
        if (l - w < gap) {
          gap = l - w;
          result.push(l, w);
        }
      }
    }
  }

  return result;
};
