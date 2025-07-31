// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
// Example:
// Input: nums = [2,3,1,1,4],[4,1,1,3,2],[4,1,0,0,5]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

function jumpindex(arr){
    let reachable = 0
    for(let i=0;i<arr.length;i++){
        if(i > reachable) return false
        reachable = Math.max(reachable,i+arr[i]); //Math.max(reachable,i+arr[i])
    }
    return true
}

console.log(jumpindex([3,1,0,0,5]));
// 1- (0,4)-4 
//2- 4 (4,2)-4
//3 - 4 (4,2) - 4
//4 - 4 (4,3)- 4
//5 - 4 (4,4) - 4
