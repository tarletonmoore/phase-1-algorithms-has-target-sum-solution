function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {}
  for (const number of array) {
    const compliment = target - number
    if (seenNumbers[compliment]) return true
    seenNumbers[number] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n)
*/

/* 
  Add your pseudocode here
  loop through to get target number - array number to equal another array number 
  if the loop can't do this, then it is false
*/

/*
  Add written explanation of your solution here
  This takes the array into an object. It takes the target number and loops through the other numbers subtracting them from the target and if there is another number in the loop that equals the result it will return true. This is due to the key value pair in the object, the key being the number and the value being true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
