/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (nums.includes(diff) && i != nums.indexOf(diff))
      return [i, nums.indexOf(diff)];
  }
};

console.log(twoSum((nums = [2, 7, 11, 15]), (target = 9)));
