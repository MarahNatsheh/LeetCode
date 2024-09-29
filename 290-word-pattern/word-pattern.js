/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    let map = new Map();
    for(let i=0; i<Math.max(pattern.length, s.length); i++){
        if(map.has(pattern[i])){
            if(map.get(pattern[i]) !== s[i]){
                return false;
            }
        } else{
            if(!s[i] || !pattern[i] || [...map.values()].includes(s[i])){
              return false;
            }
            map.set(pattern[i], s[i])
        }
    }
    return true;
};