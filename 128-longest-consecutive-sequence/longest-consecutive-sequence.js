/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    count = 0 ;
    curr = 1 ;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] === nums[i + 1] - 1){
                curr++;
                count =  Math.max(count,curr);
            }
            else if(nums[i]==(nums[i+1])){
                count =  Math.max(count,curr);
            }
            else{
                curr=1;
                count =  Math.max(count,curr);
            }
        }
    return count;
};