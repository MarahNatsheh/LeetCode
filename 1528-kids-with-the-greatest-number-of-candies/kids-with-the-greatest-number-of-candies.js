/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     let maxNum = candies[0];
      for (let i = 1; i < candies.length; i++) {
        if (candies[i] > maxNum) {
            maxNum = candies[i];
        }   
    } //let maxNum = Math.max(...candies)
   let result = [];
   for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxNum) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
return result;

};
