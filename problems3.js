
function ageCount() {
  return arr.map(item=>item.slice(11, 13)).filter(age=>age>60).length
}

function vowels(words, left, right) {
  const vowels = new Set(['a','e','i','o','u'])
  let count = 0
  for(let i=left; i<=right; i++){
    const word = words[i]
    if(vowels.has(word[0]) && vowels.has(word.slice(-1))){
      count ++
    }
  }
  return count
}
 
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
  return event2[0] <= event1[1] && event2[1] >= event1[0];
};


/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    const n = words.length;
    let minDistance = Infinity;

    for (let i = 0; i < n; i++) {
        const currentWord = words[(startIndex + i) % n];
        
        if (currentWord === target) {
            minDistance = Math.min(minDistance, i);
            break;  // No need to continue searching since we found the target
        }
    }

    for (let i = 0; i < n; i++) {
        const currentWord = words[(startIndex - i + n) % n];
        
        if (currentWord === target) {
            minDistance = Math.min(minDistance, i);
            break;  // No need to continue searching since we found the target
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
  const areAnagrams = (word1, word2) => {
     return word1.split('').sort().join('') === word2.split('').sort().join('');
 };

 for (let i = words.length - 1; i > 0; i--) {
     if (areAnagrams(words[i - 1], words[i])) {
         words.splice(i, 1);
     }
 }

 return words;
};

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  return words.filter(word => s.startsWith(word)).length;
};