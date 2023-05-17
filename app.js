// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sortedArr = ages.sort(function(a, b){return b-a}); // sort into descending
    return [sortedArr[1], sortedArr[0]];
}

console.log(twoOldestAges([1,5,87,45,8,8])); // [45, 87]
console.log(twoOldestAges([6,5,83,5,3,18])); // [18, 83]