/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumpsNum = current = maxJump = 0;
   
    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);
        
        if (i === current) {
            jumpsNum++; 
            current = maxJump; 
        }
    }
    
    return jumpsNum;
};